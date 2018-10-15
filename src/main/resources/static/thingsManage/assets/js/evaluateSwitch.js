// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    if(lang_flag==1){
        document.getElementById("userManualTitle").innerText="用户手册";
        document.getElementById("uploadFileTitle").innerText="+ 上传文件";
        document.getElementById("referenceDocs").innerText="参考文档";
        document.getElementById("totalDoc").innerText="共有";
        document.getElementById("docNumber").innerText="篇文档";
        document.getElementById("manualDocName").innerText="文档名称";
        document.getElementById("manualOperation").innerText="操作";
        document.getElementById("manualDown").innerText="下载";
        document.getElementById("manualDel").innerText="删除";
        document.getElementById("uploadFile").innerText="上传文件";
        document.getElementById("chooseFile").innerText="请选择上传文件：";
        document.getElementById("fileFormat").innerText="证书文件只支持.xls .xlsx .doc .docx .ppt .pptx格式";
        document.getElementById("browseFileBtn").value="选择文件";
        document.getElementById("modalUploadConfirm").innerText="确定";
        document.getElementById("modalUpdateCancel").innerText="取消";
    }
    else{
        document.getElementById("userManualTitle").innerText="User Manual";
        document.getElementById("uploadFileTitle").innerText="+ Upload File";
        document.getElementById("referenceDocs").innerText="Reference Document";
        document.getElementById("totalDoc").innerText="";
        document.getElementById("docNumber").innerText=" documents in total";
        document.getElementById("manualDocName").innerText="Document Name";
        document.getElementById("manualOperation").innerText="Operation";
        document.getElementById("manualDown").innerText="Download";
        document.getElementById("manualDel").innerText="Delete";
        document.getElementById("uploadFile").innerText="Upload File";
        document.getElementById("chooseFile").innerText="Please select the file to upload：";
        document.getElementById("fileFormat").innerText="The certificate file only supports .xls .xlsx .doc .docx .ppt .pptx format.";
        document.getElementById("browseFileBtn").value="Select A File";
        document.getElementById("modalUploadConfirm").innerText="Yes";
        document.getElementById("modalUpdateCancel").innerText="Cancel";

    }
});

function getCookie(Name) {
    var search = Name + "="
    if(document.cookie.length > 0)
    {
        offset = document.cookie.indexOf(search)
        if(offset != -1)
        {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if(end == -1)
                end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        }
        else return ""
    }
}