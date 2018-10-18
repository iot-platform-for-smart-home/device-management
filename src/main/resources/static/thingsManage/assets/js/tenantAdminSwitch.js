// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    if(lang_flag==1){
        $('h1 span').text('个人中心');
        $('h1 small').text('编辑');
        $('.panel-heading').text( '修改个人资料');
        document.getElementById("label_username1").innerText="用户名";
        document.getElementById("label_email1").innerText="邮箱";
        document.getElementById("label_remarkInfo1").innerText="备注信息";
        document.getElementById("button_submit").innerText="提交";
        document.getElementById("button_reset").innerText="取消";
        $('h4').text('曾用信息展示')
        document.getElementById("label_username2").innerText="用户名";
        document.getElementById("label_email2").innerText="邮箱";
        document.getElementById("label_remarkInfo2").innerText="备注信息";

    }
    else{
        $('h1 span').text('Personal Center');
        $('h1 small').text('Edit');
        $('.panel-heading').text( 'Modify Personal Information');
        document.getElementById("label_username1").innerText="UserName";
        document.getElementById("label_email1").innerText="Email";
        document.getElementById("label_remarkInfo1").innerText="Note Information";
        document.getElementById("button_submit").innerText="submit";
        document.getElementById("button_reset").innerText="reset";
        $('h4').text('Used Information Display')
        document.getElementById("label_username2").innerText="UserName";
        document.getElementById("label_email2").innerText="Email";
        document.getElementById("label_remarkInfo2").innerText="Note Information";
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