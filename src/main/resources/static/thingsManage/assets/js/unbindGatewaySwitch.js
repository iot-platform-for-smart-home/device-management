// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    if(lang_flag==1){
        document.getElementById("GatewayList").innerText="网关列表";
        document.getElementById("display").innerText="每页显示";
        document.getElementById("devices").innerText="个网关";
        document.getElementById("searchGatewayText").setAttribute("placeholder","请输入网关名称...");
        document.getElementById("Customerid").innerText=" 用户ID：";
        document.getElementById("Gateway_30222").innerText=" 网关ID：";
        document.getElementById("unbindGW-i").title="解绑网关";
        document.getElementById("gwUnbind").innerText="解绑网关";
        document.getElementById("gwUnbindConfirm").innerText="确定解绑此网关？";
        document.getElementById("gwCancelUnbind").innerText="取消";
        document.getElementById("gwConfirmUnbind").innerText="确定";
    }
    else{
        document.getElementById("GatewayList").innerText="Gateway List";
        document.getElementById("display").innerText=" ";
        document.getElementById("devices").innerText="gateways per page";
        document.getElementById("searchGatewayText").setAttribute("placeholder","Please input the gateway name...");
        document.getElementById("Customerid").innerText=" Customer_Id：";
        document.getElementById("Gateway_30222").innerText=" Gateway_Id：";
        document.getElementById("unbindGW-i").title="Unbind Gateway";
        document.getElementById("gwUnbind").innerText="Unbind Gateway";
        document.getElementById("gwUnbindConfirm").innerText="Are you sure to unbind this gateway？";
        document.getElementById("gwCancelUnbind").innerText="Cancel";
        document.getElementById("gwConfirmUnbind").innerText="Yes";
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