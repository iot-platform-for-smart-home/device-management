// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    if(lang_flag==1){
        document.getElementById("dblist_title").innerText="仪表板列表";
        document.getElementById("dbAddDashboard").innerText="+ 添加仪表板";
        document.getElementById("chooseDashboard").innerText="点击左侧列表选择仪表板";
        document.getElementById("curDashboard").innerText="仪表板    ";
        document.getElementById("dbDevice").innerText=" 设备：";
        document.getElementById("dbAddWidget").innerText="仪表板为空，请添加组件实例";
        document.getElementById("newDashboard").innerText="添加仪表板";
        document.getElementById("newDashboardName").innerText="仪表板名称：";
        document.getElementById("newDashboardClose").innerText="关闭";
        document.getElementById("newDashboardConfirm").innerText="确定";
        document.getElementById("dbNewWidget").innerText="添加组件";
        document.getElementById("dbNewWidgetName").innerText="组件名称：";
        document.getElementById("dbNewWidgetDevice").innerText="关联设备：";
        document.getElementById("dbNewWidgetType").innerText="组件类型：";
        document.getElementById("dbChooseDevice").innerText="--请选择设备--";
        document.getElementById("dbChooseWidget").innerText="--请选择组件--";
        document.getElementById("dbNewWidgetClose").innerText="关闭";
        document.getElementById("dbNewWidgetConfirm").innerText=" 确定";
        document.getElementById("deleteDashboard").innerText="删除仪表板";
        document.getElementById("confirmDeleteDashboard").innerText="确定删除此仪表板？";
        document.getElementById("deleteDashboardCancel").innerText="取消";
        document.getElementById("deleteDashboardConfirm").innerText="确定";
        document.getElementById("dbDeleteEntity").innerText="删除实例";
        document.getElementById("confirmDeleteEntity").innerText="确定删除当前实例？";
        document.getElementById("dbDeleteEntityCancel").innerText="取消";
        document.getElementById("dbDeleteEntityConfirm").innerText="确定";
    }
    else{
        document.getElementById("dblist_title").innerText="Dashboard List";
        document.getElementById("dbAddDashboard").innerText="+ Add Dashboard";
        document.getElementById("chooseDashboard").innerText="Click on the list on the left to select the dashboard";
        document.getElementById("curDashboard").innerText="Dashboard    ";
        document.getElementById("dbDevice").innerText=" Device：";
        document.getElementById("dbAddWidget").innerText="The dashboard is empty, please add a component instance.";
        document.getElementById("newDashboard").innerText="Add Dashboard";
        document.getElementById("newDashboardName").innerText="Dashboard Name：";
        document.getElementById("newDashboardClose").innerText="Close";
        document.getElementById("newDashboardConfirm").innerText="Yes";
        document.getElementById("dbNewWidget").innerText="Add Widget";
        document.getElementById("dbNewWidgetName").innerText="Widget Name：";
        document.getElementById("dbNewWidgetDevice").innerText="Associated Device：";
        document.getElementById("dbNewWidgetType").innerText="Widget Type：";
        document.getElementById("dbChooseDevice").innerText="--Select a device--";
        document.getElementById("dbChooseWidget").innerText="--Select a widget--";
        document.getElementById("dbNewWidgetClose").innerText="Close";
        document.getElementById("dbNewWidgetConfirm").innerText="Yes";
        document.getElementById("deleteDashboard").innerText="Delete Dashboard";
        document.getElementById("confirmDeleteDashboard").innerText="Are you sure to delete this dashboard？";
        document.getElementById("deleteDashboardCancel").innerText="Cancel";
        document.getElementById("deleteDashboardConfirm").innerText="Yes";
        document.getElementById("dbDeleteEntity").innerText="Delete Entity";
        document.getElementById("confirmDeleteEntity").innerText="Are you sure to delete this entity？";
        document.getElementById("dbDeleteEntityCancel").innerText="Cancel";
        document.getElementById("dbDeleteEntityConfirm").innerText="Yes";
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