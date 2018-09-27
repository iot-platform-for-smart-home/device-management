// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    if(lang_flag==1){
        document.getElementById("customerTitle").innerText="客户组";
        document.getElementById("addCustomer").innerText="+ 创建客户组";
        document.getElementById("custDisplay").innerText="每页显示 ";
        document.getElementById("custCustomerGroup").innerText=" 个客户组";
        document.getElementById("custGroupID").innerText="客户组ID：";
        document.getElementById("custTenantID").innerText="所属租户ID：";
        document.getElementById("custPhone").innerText="电话：";
        document.getElementById("custAddress").innerText="地址：";
        document.getElementById("custEmail").innerText="email：";
        document.getElementById("custNote").innerText="备注信息：";
        document.getElementById("custOperation").innerText="操作：";
        document.getElementById("custModify").innerText="修改客户组";
        document.getElementById("custCheck").innerText="查看：";
        document.getElementById("custCheckUser").innerText="查看客户组用户";
        document.getElementById("custCheckDevice").innerText="查看客户组设备";
        document.getElementById("custJump").innerText="跳转到";
        document.getElementById("custPage").innerText="页";
        document.getElementById("custJumpConfirm").innerText="确定";
        document.getElementById("custAddGroup").innerText="新增客户组";
        document.getElementById("newCustomerName").innerText="客户名称:";
        document.getElementById("newCustomerPhone").innerText="电话:";
        document.getElementById("newCustomerAddress").innerText="地址:";
        document.getElementById("newCustomerEmail").innerText="E-mail:";
        document.getElementById("newEmailRemind").innerText="邮箱格式错误";
        document.getElementById("newCustomerNote").innerText="备注信息：";
        document.getElementById("modalCloseCreateCustomer").innerText="关闭";
        document.getElementById("modalConfirmCreateCustomer").innerText="确定";
        document.getElementById("custDeleteGroup").innerText="删除客户组";
        document.getElementById("custDeleteConfirm").innerText="您真的要删除该客户组吗？";
        document.getElementById("modalCloseDeleteCustomer").innerText="取消";
        document.getElementById("modalConfirmDeleteCustomer").innerText="确定";
        document.getElementById("custModifyGroup").innerText="修改客户组";
        document.getElementById("renewGroupName").innerText="客户组名称:";
        document.getElementById("renewGroupPhone").innerText="电话:";
        document.getElementById("renewGroupAddress").innerText="地址:";
        document.getElementById("renewGroupEmail").innerText="E-mail:";
        document.getElementById("renewEmailRemind").innerText="邮箱格式错误";
        document.getElementById("renewGroupNote").innerText="备注信息：";
        document.getElementById("modalCloseRefresheCustomer").innerText="关闭";
        document.getElementById("modalConfirmRefresheCustomer").innerText="确定";
        document.getElementById("groupAllDevice").innerText="客户组所有设备";
        document.getElementById("groupDeviceName").innerText="设备名称";
        document.getElementById("groupDeviceID").innerText="设备ID";
        document.getElementById("modalCloseCustomerDevice").innerText="取消";
        document.getElementById("modalConfirmCustomerDevice").innerText="清空所有设备";
    }
    else{
        document.getElementById("customerTitle").innerText="Customer Group";
        document.getElementById("addCustomer").innerText="+ Add Customer Group";
        document.getElementById("custDisplay").innerText="";
        document.getElementById("custCustomerGroup").innerText="customer groups per page";
        document.getElementById("custGroupID").innerText="Customer Group ID：";
        document.getElementById("custTenantID").innerText="Tenant ID：";
        document.getElementById("custPhone").innerText="Telephone：";
        document.getElementById("custAddress").innerText="Address：";
        document.getElementById("custEmail").innerText="E-mail：";
        document.getElementById("custNote").innerText="Remarks：";
        document.getElementById("custOperation").innerText="Operation：";
        document.getElementById("custModify").innerText="Modify Customer Group";
        document.getElementById("custCheck").innerText="Check：";
        document.getElementById("custCheckUser").innerText="Check Customer Group Users";
        document.getElementById("custCheckDevice").innerText="Check Customer Group Devices";
        document.getElementById("custJump").innerText="jump to";
        document.getElementById("custPage").innerText="page";
        document.getElementById("custJumpConfirm").innerText="Yes";
        document.getElementById("custAddGroup").innerText="Add Customer Group";
        document.getElementById("newCustomerName").innerText="Customer Name:";
        document.getElementById("newCustomerPhone").innerText="Telephone:";
        document.getElementById("newCustomerAddress").innerText="Address:";
        document.getElementById("newCustomerEmail").innerText="E-mail:";
        document.getElementById("newEmailRemind").innerText="Incorrect Mailbox Format";
        document.getElementById("newCustomerNote").innerText="Remarks：";
        document.getElementById("modalCloseCreateCustomer").innerText="Close";
        document.getElementById("modalConfirmCreateCustomer").innerText="Yes";
        document.getElementById("custDeleteGroup").innerText="Delete Customer Group";
        document.getElementById("custDeleteConfirm").innerText="Are you sure to delete this customer group?";
        document.getElementById("modalCloseDeleteCustomer").innerText="Cancel";
        document.getElementById("modalConfirmDeleteCustomer").innerText="Yes";
        document.getElementById("custModifyGroup").innerText="Modify Customer Group";
        document.getElementById("renewGroupName").innerText="Customer Group Name:";
        document.getElementById("renewGroupPhone").innerText="Telephone:";
        document.getElementById("renewGroupAddress").innerText="Address:";
        document.getElementById("renewGroupEmail").innerText="E-mail:";
        document.getElementById("renewEmailRemind").innerText="Incorrect Mailbox Format";
        document.getElementById("renewGroupNote").innerText="Remarks：";
        document.getElementById("modalCloseRefresheCustomer").innerText="Close";
        document.getElementById("modalConfirmRefresheCustomer").innerText="Yes";
        document.getElementById("groupAllDevice").innerText="All Devices of the Customer Group";
        document.getElementById("groupDeviceName").innerText="Device Name";
        document.getElementById("groupDeviceID").innerText="Device ID";
        document.getElementById("modalCloseCustomerDevice").innerText="Cancel";
        document.getElementById("modalConfirmCustomerDevice").innerText="Empty All Devices";
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