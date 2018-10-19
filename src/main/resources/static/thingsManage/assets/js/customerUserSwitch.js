// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');
    var div = document.getElementById('titleSize');

    if(lang_flag==1){
        div.setAttribute("class", "col-md-2");
        div.setAttribute("style", "width:23%");

        // document.getElementById("userGroupTitle").innerText="客户组";
        document.getElementById("userTitle").innerText="客户列表";
        // document.getElementById("addCustomerUser").innerText="+ 创建用户";
        // document.getElementById("userDisplay").innerText="每页显示 ";
        // document.getElementById("userCustomerGroup").innerText=" 个客户";
        // document.getElementById("userID").innerText="用户ID：";
        document.getElementById("userCustGroupID").innerText="客户组ID：";
        document.getElementById("userTenantID").innerText="所属租户ID：";
        document.getElementById("userEmail").innerText="E-mail：";
        // document.getElementById("userPrivilegeLevel").innerText="权限等级：";
        document.getElementById("userNote").innerText="备注信息：";
        // document.getElementById("userOperation").innerText="操作：";
        // document.getElementById("userModify").innerText="修改用户";
        // document.getElementById("userJump").innerText="跳转到";
        // document.getElementById("userPage").innerText="页";
        // document.getElementById("userJumpConfirm").innerText="确定";
        // document.getElementById("newUser").innerText="新增用户";
        // document.getElementById("newUserName").innerText="用户名:";
        // document.getElementById("newUserPassword").innerText="密码:";
        // document.getElementById("newUserPasswordConfirm").innerText="确认密码：";
        // document.getElementById("newUserEmail").innerText="E-mail：";
        // document.getElementById("emailCheck").innerText="邮箱格式错误";
        // document.getElementById("newUserNote").innerText="备注信息：";
        // document.getElementById("modalCloseCreateCustomerUser").innerText="关闭";
        // document.getElementById("modalConfirmCreateCustomerUser").innerText="确定";
        // document.getElementById("deleteUser").innerText="删除用户";
        // document.getElementById("deleteUserConfirm").innerText="您真的要删除该用户吗？";
        // document.getElementById("modalCloseDeleteCustomerUser").innerText="取消";
        // document.getElementById("modalConfirmDeleteCustomerUser").innerText="确定";
        // document.getElementById("renewUser").innerText="修改用户";
        // document.getElementById("renewUserName").innerText="用户名：";
        // document.getElementById("renewGroupID").innerText="客户组ID：";
        // document.getElementById("renewUserEmail").innerText="E-mail：";
        // document.getElementById("emailModifyCheck").innerText="邮箱格式错误";
        // document.getElementById("renewUserNote").innerText="备注信息：";
        // document.getElementById("modalCloseRefreshCustomerUser").innerText="关闭";
        // document.getElementById("modalConfirmRefreshCustomerUser").innerText="确定";
        // document.getElementById("customerUserName").setAttribute("placeholder","必填");
        // document.getElementById("customerUserPassword").setAttribute("placeholder","必填");
        // document.getElementById("customerUserPasswordAgain").setAttribute("placeholder","请再次输入密码...");
        // document.getElementById("customerUserEmail").setAttribute("placeholder","必填");
    }
    else{
        div.setAttribute("class", "col-md-4");
        div.setAttribute("style", "width:42%");

        // document.getElementById("userGroupTitle").innerText="Customer Group";
        document.getElementById("userTitle").innerText="Customer List";
        // document.getElementById("addCustomerUser").innerText="+ Add Customer";
        // document.getElementById("userDisplay").innerText="";
        // document.getElementById("userCustomerGroup").innerText="customers per page";
        // document.getElementById("userID").innerText="Customer ID：";
        document.getElementById("userCustGroupID").innerText="Customer Group ID：";
        document.getElementById("userTenantID").innerText="Tenant ID：";
        document.getElementById("userEmail").innerText="E-mail：";
        // document.getElementById("userPrivilegeLevel").innerText="Privilege Level：";
        document.getElementById("userNote").innerText="Remarks：";
        // document.getElementById("userOperation").innerText="Operation：";
        // document.getElementById("userModify").innerText="Modify Customer";
        // document.getElementById("userJump").innerText="Jump to Page ";
        // document.getElementById("userPage").innerText=" ";
        // document.getElementById("userJumpConfirm").innerText="Yes";
        // document.getElementById("newUser").innerText="Add Customer";
        // document.getElementById("newUserName").innerText="Name：";
        // document.getElementById("newUserPassword").innerText="Password：";
        // document.getElementById("newUserPasswordConfirm").innerText="Confirm Password：";
        // document.getElementById("newUserEmail").innerText="E-mail：";
        // document.getElementById("emailCheck").innerText="Incorrect Mailbox Format";
        // document.getElementById("newUserNote").innerText="Remarks：";
        // document.getElementById("modalCloseCreateCustomerUser").innerText="Close";
        // document.getElementById("modalConfirmCreateCustomerUser").innerText="Yes";
        // document.getElementById("deleteUser").innerText="Delete Customer";
        // document.getElementById("deleteUserConfirm").innerText="Are you sure to delete this customer?";
        // document.getElementById("modalCloseDeleteCustomerUser").innerText="Cancel";
        // document.getElementById("modalConfirmDeleteCustomerUser").innerText="Yes";
        // document.getElementById("renewUser").innerText="Modify Customer";
        // document.getElementById("renewUserName").innerText="Name：";
        // document.getElementById("renewGroupID").innerText="Customer Group ID：";
        // document.getElementById("renewUserEmail").innerText="E-mail：";
        // document.getElementById("emailModifyCheck").innerText="Incorrect Mailbox Format";
        // document.getElementById("renewUserNote").innerText="Remarks：";
        // document.getElementById("modalCloseRefreshCustomerUser").innerText="Close";
        // document.getElementById("modalConfirmRefreshCustomerUser").innerText="Yes";
        // document.getElementById("customerUserName").setAttribute("placeholder","required");
        // document.getElementById("customerUserPassword").setAttribute("placeholder","required");
        // document.getElementById("customerUserPasswordAgain").setAttribute("placeholder","Please input the password again...");
        // document.getElementById("customerUserEmail").setAttribute("placeholder","required");
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