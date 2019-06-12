package cn.edu.bupt.controller;

import com.google.gson.JsonObject;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.LinkedList;
import java.util.List;

@RestController
@RequestMapping("/api/document")
@Slf4j
public class DocumentController {

    @RequestMapping(value = "/allFile", method = RequestMethod.GET)
    public String getAllFile() throws IOException {
        JsonObject jsonObject = new JsonObject();
        List<String> filenames = new LinkedList<>();
        File filePath = new File("/root/doc/");
        if(filePath.exists()){
            File[] files = filePath.listFiles();
            if(files!=null){
                for(File file:files)
                {
                    String encodeName = new String(file.getName().getBytes(), "utf-8");
                    filenames.add(encodeName);
                }
            }
            jsonObject.addProperty("filenames",filenames.toString());
        }
        return jsonObject.toString();
    }

    @RequestMapping(value = "/download/{filename}/{fileType}", method = RequestMethod.GET)
    public void downloadFile(@PathVariable("filename") String filename, @PathVariable("fileType") String fileType, HttpServletResponse response, HttpServletRequest request) throws IOException {
            response.setCharacterEncoding(request.getCharacterEncoding());
            response.setContentType("application/octet-stream");
        //filename = URLDecoder.decode(filename,"UTF-8");
        FileInputStream fis = null;
        try {
            File file = new File("/root/doc/"+filename+"."+fileType);
            fis = new FileInputStream(file);
            response.setHeader("charset", "utf-8");
            String encodeName = URLEncoder.encode(file.getName(), StandardCharsets.UTF_8.toString());
            response.setHeader("Content-Disposition", "attachment; filename="+encodeName);
            IOUtils.copy(fis,response.getOutputStream());
            response.flushBuffer();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (fis != null) {
                try {
                    fis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

    }

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public String uploadFile(@RequestParam("file") MultipartFile file) throws Exception{
        try {
            if (file.isEmpty()) {
                return "文件为空";
            }

            // 获取文件名
            String fileName = file.getOriginalFilename();
            fileName = URLDecoder.decode(fileName,"UTF-8");
            String suffixName = fileName.substring(fileName.lastIndexOf("."));
            String filePath = "/root/doc";
            String path = filePath +"/"+ fileName;
            File dest = new File(path);
            file.transferTo(dest);// 文件写入
            return "上传成功";
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "上传失败";
    }

    @RequestMapping(value = "/delete/{fileName}/{fileType}", method = RequestMethod.DELETE)
    public void deleteFile(@PathVariable("fileName") String fileName, @PathVariable("fileType") String fileType) throws UnsupportedEncodingException {
        //fileName = URLEncoder.encode(fileName, StandardCharsets.UTF_8.toString());
        System.out.println("enter");
        File file = new File("/root/doc/"+fileName+"."+fileType);
        System.out.println(file.getName()+"|"+file.exists());
        if(file.exists()){
            System.out.println(file.delete());
        }

    }
}
