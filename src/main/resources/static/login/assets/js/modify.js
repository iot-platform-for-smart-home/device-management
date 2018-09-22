// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=0;

    if(lang_flag===1){
        document.getElementById("modifyTitle").innerText="冠川物联网平台-修改密码";
        document.getElementById("modifyLead").innerText="修改密码";
        document.getElementById("modifyInfo").innerText="修改密码";
        document.getElementById("modifyInput").innerText="请输入当前密码和新密码:";
        document.getElementById("currentPassword").setAttribute("placeholder","请输入当前密码...");
        document.getElementById("newPassword").setAttribute("placeholder","请输入新密码...");
        document.getElementById("newPasswordAgain").setAttribute("placeholder","请再次输入新密码...");
        document.getElementById("save").innerText="保存";
        document.getElementById("cancel").innerText="返回";
    }
    else{
        document.getElementById("modifyTitle").innerText="Gantch Internet of Things Platform - modify password";
        document.getElementById("modifyLead").innerText="Modify Password";
        document.getElementById("modifyInfo").innerText="Modify Password";
        document.getElementById("modifyInput").innerText="Please input your current password and new password:";
        document.getElementById("currentPassword").setAttribute("placeholder","Please input current password...");
        document.getElementById("newPassword").setAttribute("placeholder","Please input new password...");
        document.getElementById("newPasswordAgain").setAttribute("placeholder","Please input new password again...");
        document.getElementById("save").innerText="Save";
        document.getElementById("cancel").innerText="Return";
    }

});