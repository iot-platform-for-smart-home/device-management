mainApp.controller("unbindGatewayCtrl", function ($scope, $resource) {


    $scope.$location = $location;

    var lang_flag=getCookie('Language');


    var pageNum = 1;//用于记录当前页号

    /*返回值为所有设备信息*/
//    initUrl = "/api/device/alldevices?limit=" + showNum;
//    prePageUrl = "/api/device/alldevices?limit=" + showNum + "&idOffset=" + nextDeviceId + "&textOffset=" + nextDeviceName;


//    var obj = $resource("/api/device/alldevices?limit=1000");
//    $scope.deviceListAll = obj.query();

    /*鼠标移入动画效果*/
    $scope.fadeSiblings = function () {
        $(".chooseBtn").mouseover(function () {
            $(this).siblings().stop().fadeTo(300, 0.3);
            $(this).css("border-color","#38883C");
        });
    };
    /*鼠标移出动画效果*/
    $scope.reSiblings = function () {
        $(".chooseBtn").mouseout(function () {
            $(this).siblings().stop().fadeTo(300, 1);
            $(this).css("border-color","#C0C0C0");
        });
    };



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