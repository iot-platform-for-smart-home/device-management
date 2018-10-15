// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    if(lang_flag==1){
        document.getElementById("deviceGroupInfo").innerText="设备组信息";
        document.getElementById("groupName").innerText="设备组名：";
        document.getElementById("groupId").innerText="设备组ID：";
        document.getElementById("relatedDeviceList").innerText="关联设备列表";
        document.getElementById("deviceName").innerText="设备名";
        document.getElementById("deviceId").innerText="设备ID";
        document.getElementById("remove").innerText="移除";
        document.getElementById("relDeviceName").innerText="设备名称：";
        document.getElementById("relDeviceId").innerText="设备ID：";
        document.getElementById("relDeviceType").innerText="设备类型：";
        document.getElementById("relParentDevice").innerText="父类设备：";
        document.getElementById("relVendor").innerText="厂商：";
        document.getElementById("relModel").innerText="型号：";
        document.getElementById("relStatus").innerText="状态：";
        document.getElementById("relLocation").innerText="位置：";
        document.getElementById("groupUpdateDevice").innerText="更新设备";
        document.getElementById("groupViewToken").innerText="查看令牌";
        document.getElementById("groupViewDetail").innerText="查看详情";
        document.getElementById("deviceGroupEmpty").innerText="当前设备组下无关联设备";
        document.getElementById("myModalLabelRemove").innerText="取消关联";
        document.getElementById("removeConfirm").innerText="从设备组中除去此设备？";
        document.getElementById("modalCloseRemove").innerText="关闭";
        document.getElementById("modalConfirmRemove").innerText="确定";
        document.getElementById("myModalLabelDelete").innerText="删除设备组";
        document.getElementById("groupDeleteConfirm").innerText="确定删除此设备组？";
        document.getElementById("groupModalCloseDelete").innerText="取消";
        document.getElementById("groupModalConfirmDelete").innerText="确定";
        document.getElementById("myModalLabelEdit").innerText="编辑设备组";
        document.getElementById("groupNameEdit").innerText="设备组名：";
        document.getElementById("modalCloseEdit").innerText="关闭";
        document.getElementById("modalConfirmEdit").innerText="确定";
        document.getElementById("myModalLabelUpdate").innerText="更新设备";
        document.getElementById("groupNameUpdate").innerText="设备名称:";
        document.getElementById("parentDeviceUpdate").innerText="父类设备：";
        document.getElementById("select-1").innerText="------请选择------";
        document.getElementById("vendorUpdate").innerText="厂商:";
        document.getElementById("select-2").innerText="------请选择------";
        document.getElementById("deviceTypeUpdate").innerText="设备类型:";
        document.getElementById("modelUpdate").innerText="型号：";
        document.getElementById("locationUpdate").innerText="位置：";
        document.getElementById("statusUpdate").innerText="状态：";
        document.getElementById("groupModalCloseRefresh").innerText="关闭";
        document.getElementById("groupModalConfirmRefresh").innerText="更新";
        document.getElementById("myModalDeviceToken").innerText="设备令牌";
        document.getElementById("groupModalCloseToken").innerText="关闭";
        document.getElementById("groupModalConfirmToken").innerText="确定";
        document.getElementById("myModalDeviceDetail").innerText="设备详情";
        document.getElementById("groupAttribute").innerText="-----属性-----";
        document.getElementById("groupDisplayRecord").innerText="每页显示";
        document.getElementById("groupRecordNumber").innerText="条记录";
        document.getElementById("groupSearchKey").setAttribute("placeholder","请输入关键字搜索...");
        document.getElementById("groupAttrUpdateTime").innerText="最后更新时间";
        document.getElementById("groupAttrKey").innerText="键";
        document.getElementById("groupAttrValue").innerText="值";
        document.getElementById("groupTelemetry").innerText="-----最新遥测-----";
        document.getElementById("groupTeleUpdateTime").innerText="最后更新时间";
        document.getElementById("groupTeleKey").innerText="键";
        document.getElementById("groupTeleValue").innerText="值";
        document.getElementById("groupControl").innerText="-----控制-----";
        document.getElementById("groupModalCloseDetail").innerText="关闭";
        document.getElementById("groupModalConfirmDetail").innerText="确定";
        document.getElementById("groupTitle").innerText="设备组";
        document.getElementById("addGroup").innerText="+ 创建设备组";
        document.getElementById("addInput").setAttribute("placeholder","请输入设备名称");
        document.getElementById("emptyRemind").innerText="设备组为空，请创建设备组";
        document.getElementById("addToGroup").innerText="添加设备组";
        document.getElementById("addToGroupName").innerText="设备组名：";
        document.getElementById("addToInput").setAttribute("placeholder","请输入设备组名");
        document.getElementById("modalCloseAddTo").innerText="关闭";
        document.getElementById("modalConfirmAddTo").innerText="确定";
    }
    else{
        document.getElementById("deviceGroupInfo").innerText="The Information of Device Group";
        document.getElementById("groupName").innerText="Device Group Name：";
        document.getElementById("groupId").innerText="Device Group ID：";
        document.getElementById("relatedDeviceList").innerText="List of Associated Devices";
        document.getElementById("deviceName").innerText="Device Name";
        document.getElementById("deviceId").innerText="Device ID";
        document.getElementById("remove").innerText="Remove";
        document.getElementById("relDeviceName").innerText="Device Name：";
        document.getElementById("relDeviceId").innerText="Device ID：";
        document.getElementById("relDeviceType").innerText="Device Type：";
        document.getElementById("relParentDevice").innerText="Parent Device：";
        document.getElementById("relVendor").innerText="Vendor：";
        document.getElementById("relModel").innerText="Model：";
        document.getElementById("relStatus").innerText="Status：";
        document.getElementById("relLocation").innerText="Location：";
        document.getElementById("groupUpdateDevice").innerText="Update Device";
        document.getElementById("groupViewToken").innerText="Check Token";
        document.getElementById("groupViewDetail").innerText="Check Detail";
        document.getElementById("deviceGroupEmpty").innerText="No associated device under the current device group.";
        document.getElementById("myModalLabelRemove").innerText="Cancel Association";
        document.getElementById("removeConfirm").innerText="Are you sure to remove this device from the device group？";
        document.getElementById("modalCloseRemove").innerText="Close";
        document.getElementById("modalConfirmRemove").innerText="Yes";
        document.getElementById("myModalLabelDelete").innerText="Delete Device Group";
        document.getElementById("groupDeleteConfirm").innerText="Are you sure to delete the device group？";
        document.getElementById("groupModalCloseDelete").innerText="Cancel";
        document.getElementById("groupModalConfirmDelete").innerText="Yes";
        document.getElementById("myModalLabelEdit").innerText="Edit Device Group";
        document.getElementById("groupNameEdit").innerText="Device Group Name：";
        document.getElementById("modalCloseEdit").innerText="Close";
        document.getElementById("modalConfirmEdit").innerText="Yes";
        document.getElementById("myModalLabelUpdate").innerText="Update Device";
        document.getElementById("groupNameUpdate").innerText="Device Name:";
        document.getElementById("parentDeviceUpdate").innerText="Parent Device：";
        document.getElementById("select-1").innerText="------Select------";
        document.getElementById("vendorUpdate").innerText="Vendor:";
        document.getElementById("select-2").innerText="------Select------";
        document.getElementById("deviceTypeUpdate").innerText="Device Type:";
        document.getElementById("modelUpdate").innerText="Model：";
        document.getElementById("locationUpdate").innerText="Location：";
        document.getElementById("statusUpdate").innerText="Status：";
        document.getElementById("groupModalCloseRefresh").innerText="Close";
        document.getElementById("groupModalConfirmRefresh").innerText="Update";
        document.getElementById("myModalDeviceToken").innerText="Device Token";
        document.getElementById("groupModalCloseToken").innerText="Close";
        document.getElementById("groupModalConfirmToken").innerText="Yes";
        document.getElementById("myModalDeviceDetail").innerText="Device Detail";
        document.getElementById("groupAttribute").innerText="-----Attribute-----";
        document.getElementById("groupDisplayRecord").innerText="";
        document.getElementById("groupRecordNumber").innerText="records per page";
        document.getElementById("groupSearchKey").setAttribute("placeholder","Please input a keyword...");
        document.getElementById("groupAttrUpdateTime").innerText="Last Update Time";
        document.getElementById("groupAttrKey").innerText="Key";
        document.getElementById("groupAttrValue").innerText="Value";
        document.getElementById("groupTelemetry").innerText="-----Latest Telemetry-----";
        document.getElementById("groupTeleUpdateTime").innerText="Last Update Time";
        document.getElementById("groupTeleKey").innerText="Key";
        document.getElementById("groupTeleValue").innerText="Value";
        document.getElementById("groupControl").innerText="-----Control-----";
        document.getElementById("groupModalCloseDetail").innerText="Close";
        document.getElementById("groupModalConfirmDetail").innerText="Yes";
        document.getElementById("groupTitle").innerText="Device Group";
        document.getElementById("addGroup").innerText="+ Add Device Group";
        document.getElementById("addInput").setAttribute("placeholder","Please input the device name");
        document.getElementById("emptyRemind").innerText="The device group is empty. Please create a device group.";
        document.getElementById("addToGroup").innerText="Add Device Group";
        document.getElementById("addToGroupName").innerText="Device Group Name：";
        document.getElementById("addToInput").setAttribute("placeholder","Please input the device group name");
        document.getElementById("modalCloseAddTo").innerText="Close";
        document.getElementById("modalConfirmAddTo").innerText="Yes";
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