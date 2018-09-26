// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    if(lang_flag==1){
        document.getElementById("serviceTitle").innerText="服务组";
        document.getElementById("addService").innerText="+ 创建服务组";
        document.getElementById("serVendor").innerText=" 厂商：";
        document.getElementById("serDeviceType").innerText=" 设备类型：";
        document.getElementById("serDeviceModel").innerText=" 设备型号：";
        document.getElementById("serServiceName").innerText="服务名称";
        document.getElementById("serServiceDescription").innerText="服务描述";
        document.getElementById("serServiceType").innerText="服务类型";
        document.getElementById("serOperation").innerText="操作";
        document.getElementById("serDelete").innerText="删除";
        document.getElementById("serNewServiceGroup").innerText="创建服务组";
        document.getElementById("serNewVendor").innerText="厂商";
        document.getElementById("serNewDeviceType").innerText="设备类型";
        document.getElementById("serNewDeviceModel").innerText="设备型号";
        document.getElementById("serAdd").innerText="创建";
        document.getElementById("serCancel").innerText="取消";
        document.getElementById("serNewService").innerText="创建服务";
        document.getElementById("serNewServiceName").innerText="服务名称";
        document.getElementById("serNewServiceDescription").innerText="服务描述";
        document.getElementById("serNewServiceType").innerText="服务类型";
        document.getElementById("serNewProtocol").innerText="协议";
        document.getElementById("serNewURL").innerText="URL";
        document.getElementById("serRequireResponse").innerText="请求回复";
        document.getElementById("serServiceBody").innerText="服务体";
        document.getElementById("serMethodName").innerText="方法名";
        document.getElementById("serParameter").innerText="参数";
        document.getElementById("serAddService").innerText="创建";
        document.getElementById("serCancelService").innerText="取消";
        document.getElementById("serDeleteGroup").innerText="删除服务组";
        document.getElementById("serDeleteConfirm").innerText="确定删除此服务组？";
        document.getElementById("serCancelDelete").innerText="取消";
        document.getElementById("serConfirmDelete").innerText="确定";
        document.getElementById("manufacturerName").setAttribute("placeholder","必填");
        document.getElementById("deviceType").setAttribute("placeholder","必填");
        document.getElementById("model").setAttribute("placeholder","必填");
        document.getElementById("serviceName").setAttribute("placeholder","必填");
        document.getElementById("serviceDescription").setAttribute("placeholder","必填");
        document.getElementById("methodName").setAttribute("placeholder","必填");
    }
    else{
        document.getElementById("serviceTitle").innerText="Service Group";
        document.getElementById("addService").innerText="+ Add Service Group";
        document.getElementById("serVendor").innerText=" Vendor：";
        document.getElementById("serDeviceType").innerText=" Device Type：";
        document.getElementById("serDeviceModel").innerText=" Device Model：";
        document.getElementById("serServiceName").innerText="Service Name";
        document.getElementById("serServiceDescription").innerText="Service Description";
        document.getElementById("serServiceType").innerText="Service Type";
        document.getElementById("serOperation").innerText="Operation";
        document.getElementById("serDelete").innerText="Delete";
        document.getElementById("serNewServiceGroup").innerText="Add Service Group";
        document.getElementById("serNewVendor").innerText="Vendor";
        document.getElementById("serNewDeviceType").innerText="Device Type";
        document.getElementById("serNewDeviceModel").innerText="Device Model";
        document.getElementById("serAdd").innerText="Add";
        document.getElementById("serCancel").innerText="Cancel";
        document.getElementById("serNewService").innerText="Add Service";
        document.getElementById("serNewServiceName").innerText="Service Name";
        document.getElementById("serNewServiceDescription").innerText="Service Description";
        document.getElementById("serNewServiceType").innerText="Service Type";
        document.getElementById("serNewProtocol").innerText="Protocol";
        document.getElementById("serNewURL").innerText="URL";
        document.getElementById("serRequireResponse").innerText="Require Response";
        document.getElementById("serServiceBody").innerText="Service Body";
        document.getElementById("serMethodName").innerText="Method Name";
        document.getElementById("serParameter").innerText="Parameter";
        document.getElementById("serAddService").innerText="Add";
        document.getElementById("serCancelService").innerText="Cancel";
        document.getElementById("serDeleteGroup").innerText="Delete Service Group";
        document.getElementById("serDeleteConfirm").innerText="Are you sure to delete this service group？";
        document.getElementById("serCancelDelete").innerText="Cancel";
        document.getElementById("serConfirmDelete").innerText="Yes";
        document.getElementById("manufacturerName").setAttribute("placeholder","required");
        document.getElementById("deviceType").setAttribute("placeholder","required");
        document.getElementById("model").setAttribute("placeholder","required");
        document.getElementById("serviceName").setAttribute("placeholder","required");
        document.getElementById("serviceDescription").setAttribute("placeholder","required");
        document.getElementById("methodName").setAttribute("placeholder","required");
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