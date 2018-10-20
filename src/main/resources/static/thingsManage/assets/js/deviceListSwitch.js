// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');
    var div = document.getElementById('searchDeviceWidth');

    if(lang_flag==1){
        document.getElementById("list").innerText="设备列表";
        document.getElementById("addDevice").innerText="+ 创建设备";
        document.getElementById("deviceNum").innerText="           设备数量：";
        document.getElementById("display").innerText="每页显示";
        document.getElementById("devices").innerText="个设备";
        document.getElementById("searchDeviceText").setAttribute("placeholder","请输入设备名称...");
        document.getElementById("online").innerText="在线";
        document.getElementById("offline").innerText="离线";
        document.getElementById("remind").innerText="提醒";
        document.getElementById("warning").innerText="警告";
        document.getElementById("searchDevice").innerText="共搜索到";
        document.getElementById("searchResult").innerText="个设备";
        document.getElementById("curDeviceId").innerText="设备ID:";
        document.getElementById("curCustomerGroup").innerText="设备所属客户组:";
        document.getElementById("cancelAssign").innerText="取消分配";
        document.getElementById("curParentDevice").innerText="父类设备:";
        document.getElementById("curVendor").innerText="厂商：";
        document.getElementById("curDeviceType").innerText="设备类型:";
        document.getElementById("curModel").innerText="型号：";
        document.getElementById("curStatus").innerText="状态：";
        document.getElementById("curLocation").innerText="位置：";
        document.getElementById("curLifeTime").innerText="维修期限：";
        document.getElementById("curOperation").innerText="操作：";
        document.getElementById("updateDevice").innerText="更新设备";
        document.getElementById("assignDevice").innerText="分配设备";
        document.getElementById("curView").innerText="查看：";
        document.getElementById("viewToken").innerText="查看令牌";
        document.getElementById("viewEvent").innerText="查看事件";
        document.getElementById("viewDetail").innerText="查看详情";
        document.getElementById("newDevice").innerText="新增设备";
        document.getElementById("newDeviceName").innerText="设备名称:";
        document.getElementById("name").setAttribute("placeholder","必填");
        document.getElementById("newParentDevice").innerText="父类设备:";
        document.getElementById("newVendor").innerText="厂商:";
        document.getElementById("newDeviceType").innerText="设备类型:";
        document.getElementById("newModel").innerText="型号：";
        document.getElementById("newLocation").innerText="位置：";
        document.getElementById("newStatus").innerText="状态：";
        document.getElementById("newLifeTime").innerText="检修时间：";
        document.getElementById("modalClose").innerText="关闭";
        document.getElementById("modalConfirm").innerText="确定";
        document.getElementById("renewDevice").innerText="更新设备";
        document.getElementById("renewDeviceName").innerText="设备名称:";
        document.getElementById("renewParentDevice").innerText="父类设备:";
        document.getElementById("renewVendor").innerText="厂商:";
        document.getElementById("renewDeviceType").innerText="设备类型:";
        document.getElementById("renewModel").innerText="型号：";
        document.getElementById("renewLocation").innerText="位置：";
        document.getElementById("renewStatus").innerText="状态：";
        document.getElementById("renewLifeTime").innerText="检修时间：";
        document.getElementById("modalCloseRefresh").innerText="关闭";
        document.getElementById("modalConfirmRefresh").innerText="更新";
        document.getElementById("deviceToken").innerText="设备令牌";
        document.getElementById("modalCloseToken").innerText="关闭";
        document.getElementById("modalConfirmToken").innerText="确定";
        document.getElementById("assignDetail").innerText="分配设备";
        //document.getElementById("assignDeviceGroupBox").innerText="分配设备到设备组";
        //document.getElementById("assignCustomerBox").innerText="分配设备到客户组";
        document.getElementById("assignDeviceGroup").innerText="分配设备到设备组";
        document.getElementById("assignGroDeviceId").innerText="设备ID:";
        document.getElementById("assignGroDeviceName").innerText="设备名称：";
        document.getElementById("chooseGroDeviceGroup").innerText="请选择设备组：";
        // document.getElementById("assignCustomer").innerText="分配设备到客户组";
        // document.getElementById("assignCusDeviceId").innerText="设备ID:";
        // document.getElementById("assignCusDeviceName").innerText="设备名称：";
        // document.getElementById("chooseCustomer").innerText="请选择客户组：";
        document.getElementById("modalCloseAssign").innerText="关闭";
        document.getElementById("modalConfirmAssign").innerText="确定";
        document.getElementById("deleteDetail").innerText="删除设备";
        document.getElementById("deleteConfirm").innerText="您真的要删除该设备吗？";
        document.getElementById("modalCloseDelete").innerText="取消";
        document.getElementById("modalConfirmDelete").innerText="确定";
        document.getElementById("detailDetail").innerText="设备详情";
        document.getElementById("attribute").innerText="-----属性-----";
        document.getElementById("displayRecord").innerText="每页显示";
        document.getElementById("recordNumber").innerText="条记录";
        document.getElementById("searchKey").setAttribute("placeholder","请输入键值查找...");
        document.getElementById("attrUpdateTime").innerText="最后更新时间";
        document.getElementById("attrKey").innerText="键";
        document.getElementById("attrValue").innerText="值";
        document.getElementById("telemetry").innerText="-----最新遥测-----";
        document.getElementById("teleUpdateTime").innerText="最后更新时间";
        document.getElementById("teleKey").innerText="键";
        document.getElementById("teleValue").innerText="值";
        document.getElementById("history").innerText="-----历史数据-----";
        document.getElementById("historyStart").innerText="起始时间：";
        document.getElementById("historyEnd").innerText="终止时间：";
        document.getElementById("control").innerText="-----控制面板-----";
        document.getElementById("modalCloseDetail").innerText="关闭";
        document.getElementById("modalConfirmDetail").innerText="确定";
        document.getElementById("eventDetail").innerText="设备事件";
        document.getElementById("eventStart").innerText="起始时间：";
        document.getElementById("eventEnd").innerText="终止时间：";
        document.getElementById("methodName").innerText="方法名";
        document.getElementById("serviceName").innerText="服务名";
        document.getElementById("state").innerText="状态";
        document.getElementById("userId").innerText="uid";
        document.getElementById("createTime").innerText="创建时间";
        document.getElementById("preEvent").innerText="上一页";
        document.getElementById("nextEvent").innerText="下一页";
        document.getElementById("modalCloseEvent").innerText="关闭";


        $(".form_datetime").datetimepicker({
            format: 'yyyy-mm-dd hh:ii',//显示格式
            language: 'zh-CN',//显示语言
            todayHighlight: 1,//今天高亮
            todayBtn:true,
            bootcssVer:3,
            minView: 0,//设置显示到分钟
            startView:2,
            forceParse: 0,
            showMeridian: 1,
            autoclose: 1//选择后自动关闭
        });

    }
    else{
        div.setAttribute("style", "width:280px");

        document.getElementById("list").innerText="Device List";
        document.getElementById("addDevice").innerText="+ Add Device";
        document.getElementById("deviceNum").innerText="Number of Devices：";
        document.getElementById("display").innerText="";
        document.getElementById("devices").innerText="devices per page";
        document.getElementById("searchDeviceText").setAttribute("placeholder","Please input the device name...");
        document.getElementById("online").innerText="Online";
        document.getElementById("offline").innerText="Offline";
        document.getElementById("remind").innerText="Remind";
        document.getElementById("warning").innerText="Warning";
        document.getElementById("searchDevice").innerText="A total of";
        document.getElementById("searchResult").innerText="devices were searched.";
        document.getElementById("curDeviceId").innerText="Device ID:";
        document.getElementById("curCustomerGroup").innerText="Customer Group:";
        document.getElementById("cancelAssign").innerText="Cancel Assignment";
        document.getElementById("curParentDevice").innerText="Parent Device:";
        document.getElementById("curVendor").innerText="Vendor：";
        document.getElementById("curDeviceType").innerText="Device Type:";
        document.getElementById("curModel").innerText="Model：";
        document.getElementById("curStatus").innerText="Status：";
        document.getElementById("curLocation").innerText="Location：";
        document.getElementById("curLifeTime").innerText="Lifetime：";
        document.getElementById("curOperation").innerText="Operation：";
        document.getElementById("updateDevice").innerText="Update Device";
        document.getElementById("assignDevice").innerText="Assign Device";
        document.getElementById("curView").innerText="Check：";
        document.getElementById("viewToken").innerText="Check Token";
        document.getElementById("viewEvent").innerText="Check Event";
        document.getElementById("viewDetail").innerText="Check Detail";
        document.getElementById("newDevice").innerText="Add Device";
        document.getElementById("newDeviceName").innerText="Device Name:";
        document.getElementById("name").setAttribute("placeholder","required");
        document.getElementById("newParentDevice").innerText="Parent Device:";
        document.getElementById("newVendor").innerText="Vendor:";
        document.getElementById("newDeviceType").innerText="Device Type:";
        document.getElementById("newModel").innerText="Model：";
        document.getElementById("newLocation").innerText="Location：";
        document.getElementById("newStatus").innerText="Status：";
        document.getElementById("newLifeTime").innerText="Lifetime：";
        document.getElementById("modalClose").innerText="Close";
        document.getElementById("modalConfirm").innerText="Yes";
        document.getElementById("renewDevice").innerText="Update";
        document.getElementById("renewDeviceName").innerText="Device Name:";
        document.getElementById("renewParentDevice").innerText="Parent Device:";
        document.getElementById("renewVendor").innerText="Vendor:";
        document.getElementById("renewDeviceType").innerText="Device Type:";
        document.getElementById("renewModel").innerText="Model：";
        document.getElementById("renewLocation").innerText="Location：";
        document.getElementById("renewStatus").innerText="Status：";
        document.getElementById("renewLifeTime").innerText="Lifetime：";
        document.getElementById("modalCloseRefresh").innerText="Close";
        document.getElementById("modalConfirmRefresh").innerText="Update";
        document.getElementById("deviceToken").innerText="Device Token";
        document.getElementById("modalCloseToken").innerText="Close";
        document.getElementById("modalConfirmToken").innerText="Yes";
        document.getElementById("assignDetail").innerText="Assign Device";
        // document.getElementById("assignDeviceGroupBox").innerText="Assign Device to Device Group";
        // document.getElementById("assignCustomerBox").innerText="Assign Device to Customer Group";
        document.getElementById("assignDeviceGroup").innerText="Assign Device to Device Group";
        document.getElementById("assignGroDeviceId").innerText="Device ID:";
        document.getElementById("assignGroDeviceName").innerText="Device Name：";
        document.getElementById("chooseGroDeviceGroup").innerText="Please select a device group：";
        // document.getElementById("assignCustomer").innerText="Assign Device to Customer Group";
        // document.getElementById("assignCusDeviceId").innerText="Device ID:";
        // document.getElementById("assignCusDeviceName").innerText="Device Name：";
        // document.getElementById("chooseCustomer").innerText="Please select a customer group：";
        document.getElementById("modalCloseAssign").innerText="Close";
        document.getElementById("modalConfirmAssign").innerText="Yes";
        document.getElementById("deleteDetail").innerText="Delete Device";
        document.getElementById("deleteConfirm").innerText="Are you sure to delete this device?";
        document.getElementById("modalCloseDelete").innerText="Cancel";
        document.getElementById("modalConfirmDelete").innerText="Yes";
        document.getElementById("detailDetail").innerText="Device Detail";
        document.getElementById("attribute").innerText="-----Attribute-----";
        document.getElementById("displayRecord").innerText="";
        document.getElementById("recordNumber").innerText="records per page";
        document.getElementById("searchKey").setAttribute("placeholder","Please enter a key or value to find...");
        document.getElementById("attrUpdateTime").innerText="Last Update Time";
        document.getElementById("attrKey").innerText="Key";
        document.getElementById("attrValue").innerText="Value";
        document.getElementById("telemetry").innerText="-----Latest Telemetry-----";
        document.getElementById("teleUpdateTime").innerText="Last Update Time";
        document.getElementById("teleKey").innerText="Key";
        document.getElementById("teleValue").innerText="Value";
        document.getElementById("history").innerText="-----Historical Data-----";
        document.getElementById("historyStart").innerText="Start Time：";
        document.getElementById("historyEnd").innerText="End Time：";
        document.getElementById("control").innerText="-----Control Panel-----";
        document.getElementById("modalCloseDetail").innerText="Close";
        document.getElementById("modalConfirmDetail").innerText="Yes";
        document.getElementById("eventDetail").innerText="Device Event";
        document.getElementById("eventStart").innerText="Start Time：";
        document.getElementById("eventEnd").innerText="End Time：";
        document.getElementById("methodName").innerText="Method Name";
        document.getElementById("serviceName").innerText="Service Name";
        document.getElementById("state").innerText="Status";
        document.getElementById("userId").innerText="uid";
        document.getElementById("createTime").innerText="Creation Time";
        document.getElementById("preEvent").innerText="Last Page";
        document.getElementById("nextEvent").innerText="Next Page";
        document.getElementById("modalCloseEvent").innerText="Close";

        $(".form_datetime").datetimepicker({
            format: 'yyyy-mm-dd hh:ii',//显示格式
            todayHighlight: 1,//今天高亮
            todayBtn:true,
            bootcssVer:3,
            minView: 0,//设置显示到分钟
            startView:2,
            forceParse: 0,
            showMeridian: 1,
            autoclose: 1//选择后自动关闭
        });
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