// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=1;

    if(lang_flag===1){
        document.getElementById("list").innerText="设备列表";
        document.getElementById("addDevice").innerText="+ 创建设备";
        document.getElementById("deviceNum").innerText="设备数量：";
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
        document.getElementById("deviceGroupBox").innerText="分配设备到设备组";
        document.getElementById("customerBox").innerText="分配设备到客户组";
        document.getElementById("assignDeviceGroup").innerText="分配设备到设备组";
        document.getElementById("assignGroDeviceId").innerText="设备id:";
        document.getElementById("assignGroDeviceName").innerText="设备名称：";
        document.getElementById("chooseGroDeviceGroup").innerText="请选择设备组：";
        document.getElementById("assignCustomer").innerText="分配设备到客户组";
        document.getElementById("assignCusDeviceId").innerText="设备id:";
        document.getElementById("assignCusDeviceName").innerText="设备名称：";
        document.getElementById("chooseCustomer").innerText="请选择客户组：";
        document.getElementById("modalCloseAssign").innerText="关闭";
        document.getElementById("modalConfirmAssign").innerText="确定";
        document.getElementById("deleteDetail").innerText="删除设备";
        document.getElementById("deleteConfirm").innerText="您真的要删除该设备吗？";
        document.getElementById("modalCloseDelete").innerText="取消";
        document.getElementById("modalConfirmDelete").innerText="确定";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";
        document.getElementById("").innerText="";



    }
    else{

    }

});