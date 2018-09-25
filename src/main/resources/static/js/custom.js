// Custom Script
// Developed by: Samson.Onna
var customScripts = {
    profile: function () {
        // portfolio
        if ($('.isotopeWrapper').length) {
            var $container = $('.isotopeWrapper');
            var $resize = $('.isotopeWrapper').attr('id');
            // initialize isotope
            $container.isotope({
                itemSelector: '.isotopeItem',
                resizable: false, // disable normal resizing
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
			
            $("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");               
                return false;
            });
            $('.navbar-inverse').on('click', 'li a', function () {                
                $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
            });
            $('#filter a').click(function () {
                $('#filter a').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'easeOutQuart',
                        queue: false
                    }
                });
                return false;
            });
            $(window).smartresize(function () {
                $container.isotope({
                    // update columnWidth to a percentage of container width
                    masonry: {
                        columnWidth: $container.width() / $resize
                    }
                });
            });
        }
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {
		if($('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').css('background','none');
		}
        $('#mainNav').onePageNav({        
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
				
            },
            end: function () {
                //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').addClass('addBg');
				}else{
						$('#main-nav').removeClass('addBg');
				}
				
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').addClass('addBg');
				}else{
						$('#main-nav').removeClass('addBg');
				}
            }
        });
    },
    slider: function () {
        $('#da-slider').cslider({
            autoplay: true,
            bgincrement: 0
        });
    },
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox();
        customScripts.slider();
    }
}
$('document').ready(function () {
    customScripts.init();

    /*中英文切换*/
    document.getElementById("chooseChinese").onclick=function(){
        setCookie('Language',1);
    }

    document.getElementById("chooseEnglish").onclick=function(){
        setCookie('Language',0);
    }

    var lang_flag=getCookie('Language');
    console.log(lang_flag);

    if(lang_flag==1){
        document.getElementById("homeTitle").innerText="冠川物联网平台-主页";
        document.getElementById("home-menu-first").innerText="主页";
        document.getElementById("home-menu-second").innerText="关于我们";
        document.getElementById("home-menu-third").innerText="联系我们";
        document.getElementById("home-menu-fourth").innerText="登录";
        document.getElementById("about").innerText="关于我们";
        document.getElementById("objectManagement").innerText="物管理平台";
        document.getElementById("objectManagementInfo").innerText="创建虚拟设备，与被管理的实体设备对应。实现对设备的管理与检测。";
        document.getElementById("contact").innerText="联系我们";
        document.getElementById("address").innerText="地址:";
        document.getElementById("addressInfo").innerText="北京市海淀区西土城路十号\n" +
            "\t\t\t\t\t北京邮电大学新科研楼815";
        document.getElementById("telephone").innerText="联系方式:";
    }
    else{
        document.getElementById("homeTitle").innerText="Gantch Internet of Things Platform - home";
        document.getElementById("home-menu-first").innerText="HomePage";
        document.getElementById("home-menu-second").innerText="About Us";
        document.getElementById("home-menu-third").innerText="Contact Us";
        document.getElementById("home-menu-fourth").innerText="Log In";
        document.getElementById("about").innerText="about us";
        document.getElementById("objectManagement").innerText="OBJECT MANAGEMENT PLATFORM";
        document.getElementById("objectManagementInfo").innerText="Create a virtual device that corresponds to the managed physical device. Realize the management and detection of equipments.";
        document.getElementById("contact").innerText="contact us";
        document.getElementById("address").innerText="Address:";
        document.getElementById("addressInfo").innerText="Beijing University of Posts and Telecommunications\n" +
            "\t\t\t\t\tNo.10 Xitucheng Road, Haidian District, Beijing, China";
        document.getElementById("telephone").innerText="Tel:";
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

