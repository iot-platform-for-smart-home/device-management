// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    if(lang_flag==1){
        document.getElementById("pluginTitle").innerText="插件管理";
        document.getElementById("pluginInfo").innerText="插件基本信息";
        document.getElementById("curPluginName").innerText="插件名称：";
        document.getElementById("curPluginURL").innerText="插件URL：";
        document.getElementById("curPluginDescription").innerText="插件描述：";
        document.getElementById("changeState").innerText="插件状态：";
        document.getElementById("activatePlugin").innerText="激活插件";
        document.getElementById("stopPlugin").innerText="暂停插件";
        document.getElementById("runingStatus").innerText="运行状态";
        document.getElementById("pluginInterfaceInfo").innerText="插件接口信息";
        document.getElementById("inexInterface").innerText="内外接口";
        document.getElementById("interfaceName").innerText="接口名称";
        document.getElementById("pluginInterface").innerText="接口:  ";
        document.getElementById("pluginRunInfo").innerText="插件运行信息";
        document.getElementById("pluginRequestedFrequency").innerText="插件被请求次数：";
        document.getElementById("requestFrequency-1").innerText="";
        document.getElementById("requestFrequency-2").innerText="中MailController被请求次数：";
        document.getElementById("pluginConfirm").innerText="确定";
    }
    else{
        document.getElementById("pluginTitle").innerText="Plugin Management";
        document.getElementById("pluginInfo").innerText="Plugin Basic Information";
        document.getElementById("curPluginName").innerText="Plugin Name：";
        document.getElementById("curPluginURL").innerText="Plugin URL：";
        document.getElementById("curPluginDescription").innerText="Plugin Description：";
        document.getElementById("changeState").innerText="Plugin Status：";
        document.getElementById("activatePlugin").innerText="Activate Plugin";
        document.getElementById("stopPlugin").innerText="Stop Plugin";
        document.getElementById("runingStatus").innerText="Operating Status";
        document.getElementById("pluginInterfaceInfo").innerText="Plugin Interface Information";
        document.getElementById("inexInterface").innerText="Internal or External Interface";
        document.getElementById("interfaceName").innerText="Interface Name";
        document.getElementById("pluginInterface").innerText=" Interface:  ";
        document.getElementById("pluginRunInfo").innerText="Plugin Operation Information";
        document.getElementById("pluginRequestedFrequency").innerText="The number of times the plugin was requested：";
        document.getElementById("requestFrequency-1").innerText="The number of times the MailController was requested in the ";
        document.getElementById("requestFrequency-2").innerText="：";
        document.getElementById("pluginConfirm").innerText="Yes";
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