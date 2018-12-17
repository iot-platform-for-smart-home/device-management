// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    if(lang_flag==1){
        document.getElementById("GatewayList").innerText="网关列表";
        document.getElementById("display").innerText="每页显示";
        document.getElementById("devices").innerText="个设备";
        document.getElementById("searchGatewayText").setAttribute("placeholder","请输入网关名称...");
    }
    else{
        document.getElementById("GatewayList").innerText="Gateway List";
        document.getElementById("display").innerText=" ";
        document.getElementById("devices").innerText="devices per page";
        document.getElementById("searchGatewayText").setAttribute("placeholder","Please input the gateway name...");
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