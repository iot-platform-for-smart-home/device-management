// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    if(lang_flag==1){
        document.getElementById("loginTitle").innerText="冠川物联网平台-登录";
        document.getElementById("loginLead").innerText="物联网平台登录";
        document.getElementById("loginInfo").innerText="登录";
        document.getElementById("loginInput").innerText="请输入用户名密码：";
        document.getElementById("form-username").setAttribute("placeholder","请输入用户名...");
        document.getElementById("form-password").setAttribute("placeholder","请输入密码...");
        document.getElementById("login").innerText="登录";
        document.getElementById("modify").innerText="修改密码";
    }
    else{
        document.getElementById("loginTitle").innerText="Gantch Internet of Things Platform - login";
        document.getElementById("loginLead").innerText="Internet of Things Platform Log In";
        document.getElementById("loginInfo").innerText="Log In";
        document.getElementById("loginInput").innerText="Please input your username and password:";
        document.getElementById("form-username").setAttribute("placeholder","Please input username...");
        document.getElementById("form-password").setAttribute("placeholder","Please input password...");
        document.getElementById("login").innerText="Log In";
        document.getElementById("modify").innerText="Modify Password";
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