/* javascript 代码 */
$(document).ready(function() {
  $(window).load(function(){
      $('#projects-container').css({visibility:'visible'});

      $('#projects-container').masonry({
        itemSelector: '.project-item:not(.filtered)',
        isFitWidth: true,
        isResizable: true,
        isAnimated: !Modernizr.csstransitions,
        gutterWidth: 0
      });

      scrollSpyRefresh();
      waypointsRefresh();
    });

  //注：无论是鼠标向上或向下只要该元素的顶部碰到浏览器的顶部都会触发waypoints事件
   $('.scrollimation').waypoint(function(){
      $(this).addClass('in');//向下滚动
    },{offset:'90%'});
  //第１个参数为waypoints事件响应时所执行的代码，是一个匿名函数即可
  //第２个参数为偏移量,本例即该div到窗口高度90%时触发
  $(".modal-dialog" ).draggable();//登录框的拖动
  /*$('.project-item').click(function(e){
      e.preventDefault();

      var elem = $(this),
        title = elem.find('.project-title').text(),
        link = elem.attr('href'),
        descr = elem.find('.project-description').html(),
        slidesHtml = '',
        slides = elem.data('images').split(',');

      for (var i = 0; i < slides.length; ++i) {
        slidesHtml = slidesHtml + '<img src='+slides[i]+' alt=""  data-dismiss="modal">';
      }
      //on() 方法在被选元素及子元素上添加一个或多个事件处理程序。
      $('#project-modal').on('show.bs.modal', function () {
        $(this).find('h1').text(title);
        $(this).find('.project-descr').html(descr);
        $(this).find('.project-img').html(slidesHtml);
        *//*
         * owlcarousel是一款猫头鹰旋转木马插件

        *//*
        $("#project-img").owlCarousel();*//* 初始化方法来使旋转木马工作 *//*

        $("#project-img").data('owlCarousel').reinit({
          singleItem:true,//singleItem	是否只显示一张
          autoPlay:30000,//自动播放，可选布尔值或整数，若使用整数，如 3000，表示 3 秒切换一次；若设置为 true，默认 5 秒切换一次
          stopOnHover: true,//鼠标悬停停止自动播放
          pagination: true//显示分页
        });
      }).modal();

    });
    $('#project-modal').on('hidden.bs.modal', function () {
      $(this).find('.loader').show();
    });*/
    function scrollSpyRefresh(){
      setTimeout(function(){
        $('body').scrollspy('refresh');
      },1000);
    }

    function waypointsRefresh(){
      setTimeout(function(){
        $.waypoints('refresh');
      },1000);
    }
    /*中英文切换*/
    document.getElementById("chooseChinese").onclick=function(){
        //setCookie('Language',1);
    }

    document.getElementById("chooseEnglish").onclick=function(){
       // setCookie('Language',0);
    }
});