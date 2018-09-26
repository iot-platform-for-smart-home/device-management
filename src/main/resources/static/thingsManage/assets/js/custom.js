
$(document).ready(function () {

            document.getElementById("homePageChooseChinese").onclick=function(){
                setCookie('Language',1);
                location.reload();
            }

            document.getElementById("homePageChooseEnglish").onclick=function(){
                setCookie('Language',0);
                location.reload();
            }

           //SIDE MENU SCRIPTS
    
            $('.menu-close-icon').click(function (e) {
                e.preventDefault();
                $('#side-menu').animate({ left: '-250px'});
               
            });

            $('.menu-open-icon').click(function (e) {
                e.preventDefault();
                var left = $('#side-menu').offset().left
                if (left == -250) {
                    $('#side-menu').animate({ left: '0px', top: '0px' });
                }
                else {
                    $('#side-menu').animate({ left: '-250px'});
                }
               
            });

            /*====================================
             WRITE YOUR   SCRIPTS  BELOW
            ======================================*/

            /*中英文切换*/

            var lang_flag=getCookie('Language');



            if(lang_flag==1){
                document.getElementById("homePageTitle").innerText="物管理平台-租户管理员";
                document.getElementById("welcomeMessage").innerText=" 欢 迎 来 到 冠 川 物 管 理 平 台 ！";
                document.getElementById("personalCenter").innerText="个人中心 ";
                document.getElementById("currentUser").innerText=" 当前用户：";
                document.getElementById("userLevel").innerText="用户等级：";
                document.getElementById("setting").innerText=" 设置 ";
                document.getElementById("signOut").innerText=" 退出登录";
                document.getElementById("side-menu-1").innerText="首页";
                document.getElementById("side-menu-2").innerText="设备列表";
                document.getElementById("side-menu-3").innerText="设备组";
                document.getElementById("side-menu-4").innerText="服务管理";
                document.getElementById("side-menu-5").innerText="插件管理";
                document.getElementById("side-menu-6").innerText="规则管理";
                document.getElementById("side-menu-7").innerText="客户组";
                document.getElementById("side-menu-8").innerText="组件库";
                document.getElementById("side-menu-9").innerText="仪表盘";
                document.getElementById("side-menu-10").innerText="用户手册";
            }
            else{
                document.getElementById("homePageTitle").innerText="Object Management Platform - Tenant";
                document.getElementById("welcomeMessage").innerText=" Welcome To Gantch Things Management Platform ! ";
                document.getElementById("personalCenter").innerText="Personal Center ";
                document.getElementById("currentUser").innerText=" Current User：";
                document.getElementById("userLevel").innerText="User Level：";
                document.getElementById("setting").innerText=" Setting ";
                document.getElementById("signOut").innerText=" Sign Out ";
                document.getElementById("side-menu-1").innerText="Home";
                document.getElementById("side-menu-2").innerText="Device List";
                document.getElementById("side-menu-3").innerText="Device Group";
                document.getElementById("side-menu-4").innerText="Service Management";
                document.getElementById("side-menu-5").innerText="Plugin Management";
                document.getElementById("side-menu-6").innerText="Rule Management";
                document.getElementById("side-menu-7").innerText="Customer Group";
                document.getElementById("side-menu-8").innerText="Widgets Library";
                document.getElementById("side-menu-9").innerText="Dashboard";
                document.getElementById("side-menu-10").innerText="User Manual";
            }



   });

function setCookie(name, value) {
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    if(expires!=null)
    {
        var LargeExpDate = new Date ();
        LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
    }
    document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()+";path=/"));
}

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



