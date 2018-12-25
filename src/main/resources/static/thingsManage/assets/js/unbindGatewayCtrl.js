mainApp.controller("unbindGatewayCtrl", function ($scope, $resource) {


//    $scope.$location = $location;

    var lang_flag=getCookie('Language');

    var showNum = 9;//用于记录每次显示多少个网关

    var preCustomerIdArr = [];//用于记录网关列表展示时向前翻页
    var preGateway_30222Arr = [];//用于网关列表展示时向前翻页
    var preCustomerId;//用于网关列表展示时向前翻页
    var preGateway_30222;//用于网关列表展示时向前翻页
    var nextCustomerId;//用于网关列表展示时向后翻页
    var nextGateway_30222;//用于网关列表展示时向后翻页
    var pageNum = 1;//用于记录当前页号

    var allGateway_30222 = [];//用于获取当前页面的设备的状态信息

    var initUrl;
    var prePageUrl;
    var nextPageUrl;

    /*返回值为所有网关信息*/
//    initUrl = "/api/device/alldevices?limit=" + showNum;
//    prePageUrl = "/api/device/alldevices?limit=" + showNum + "&idOffset=" + nextCustomerId + "&textOffset=" + nextGateway_30222;


//    var obj = $resource("/api/device/alldevices?limit=1000");
//    $scope.deviceListAll = obj.query();

    /*返回值为限制个数的所有网关信息*/
//        $.ajax({
//            url: initUrl,
//            contentType: "application/json; charset=utf-8",
//            async: false,
//            type: "GET",
//            success: function (msg) {
//                console.log(msg);
//                if (msg.length != 0) {
//                    $scope.gatewayList = msg;
//                    var last = $scope.gatewayList.length - 1;
//                    console.log($scope.gatewayList);
//                    console.log($scope.gatewayList.length);
//
//                    for (var i = 0; i < $scope.gatewayList.length; i++) {
//                        allGateway_30222.push($scope.gatewayList[i].gateway_30222);
//                    }
//
//                    /*用于翻页*/
//                    nextGatewayCustomerId = $scope.gatewayList[last].customerid;
//                    nextGateway_30222 = $scope.gatewayList[last].gateway_30222;
//                    preCustomerIdArr.push($scope.gatewayList[last].customerid);
//                    preGateway_30222Arr.push($scope.gatewayList[last].gateway_30222);
//
//                    console.log(nextCustomerId);
//                    console.log(nextGateway_30222);
//                }
//            }
//        });
      /*查看下一页设备*/
//    $scope.nextGatewayInfo = function () {
//        console.log(nextCustomerId);
//        console.log(nextGateway_30222);
//        // if ($.cookie("userLevel") === "CUSTOMER_USER") {
//        //     prePageUrl = "/api/device/customerDevices/" + customerId + "?limit=" + showNum + "&idOffset=" + nextCustomerId + "&textOffset=" + nextGateway_30222;
//        // } else if ($.cookie("userLevel") === "TENANT_ADMIN") {
//        // }
//
//        nextPageUrl = "/api/device/alldevices?limit=" + showNum + "&idOffset=" + nextCustomerId + "&textOffset=" + nextGateway_30222;
//
//        if (nextCustomerId && nextGateway_30222) {
//            $.ajax({
//                url: nextPageUrl,
//                contentType: "application/json; charset=utf-8",
//                async: false,
//                type: "GET",
//                success: function (msg) {
//                    console.log(msg);
//
//                    if (msg.length == 0) {
//                        if(lang_flag==1){
//                            toastr.warning("当前已是最后一页！");
//                        }
//                        else{
//                            toastr.warning("Currently the last page！");
//                        }
//                    }
//                    else {
//                        pageNum++;
//                        $scope.gatewayList = msg;
//                        var last = $scope.gatewayList.length - 1;
//                        // console.log($scope.gatewayList);
//
//                        allDeviceId = [];
//                        for (var i = 0; i < $scope.gatewayList.length; i++) {
//                            allGateway_30222.push($scope.gatewayList[i].id);
                        }
//                        nextCustomerId = $scope.gatewayList[last].customerid;
//                        nextGateway_30222 = $scope.gatewayList[last].gateway_30222;
//                        preCustomerIdArr.push($scope.gatewayList[last].customerid);
//                        preGateway_30222Arr.push($scope.gatewayList[last].gateway_30222);
//                        // console.log(preCustomerIdArr);
//                    }
//
//                },
//                error: function (err) {
//                    if(lang_flag==1){
//                        toastr.warning("当前已是最后一页！");
//                    }
//                    else{
//                        toastr.warning("Currently the last page！");
//                    }
//                }
//            });
//        } else {
//            if(lang_flag==1){
//                toastr.warning("当前已是最后一页！");
//            }
//            else{
//                toastr.warning("Currently the last page！");
//            }
//        }
//
//    };
//
//    /*查看上一页设备*/
//    $scope.preGatewayInfo = function () {
//        var url;
//        if (pageNum == 1) {/*pageNum == 1的时候不发送ajax请求*/
//            if(lang_flag==1){
//                toastr.warning("当前已是第一页！");
//            }
//            else{
//                toastr.warning("Currently the first page！");
//            }
//        }
//        else {
//            if (pageNum == 2) {
//                // if ($.cookie("userLevel") === "CUSTOMER_USER") {
//                //     url = "/api/device/customerDevices/" + customerId + "?limit=" + showNum;
//                // } else if ($.cookie("userLevel") === "TENANT_ADMIN") {
//                    url = "/api/device/alldevices?limit=" + showNum;
//                // }
//
//            } else {
//                preCustomerId = preCustomerIdArr[pageNum - 3];
//                preGateway_30222 = preGateway_30222Arr[pageNum - 3];
//                // if ($.cookie("userLevel") === "CUSTOMER_USER") {
//                //     url = "/api/device/customerDevices/" + customerId + "?limit=" + showNum + "&idOffset=" + preCustomerId + "&textOffset=" + preGateway_30222;
//                // } else if ($.cookie("userLevel") === "TENANT_ADMIN") {
//                    url = "/api/device/alldevices?limit=" + showNum + "&idOffset=" + preCustomerId + "&textOffset=" + preGateway_30222;
//                // }
//                // console.log(pageNum);
//            }
//            $.ajax({
//                url: url,
//                contentType: "application/json; charset=utf-8",
//                async: false,
//                type: "GET",
//                success: function (msg) {
//                    pageNum--;
//                    $scope.gatewayList = msg;
//                    var last = $scope.gatewayList.length - 1;
//                    // console.log($scope.gatewayList);
//
//                    allDeviceId = [];
//                    for (var i = 0; i < $scope.gatewayList.length; i++) {
//                        allGateway_30222.push($scope.gatewayList[i].id);
//                    }
//
//                    nextCustomerId = $scope.gatewayList[last].customerid;
//                    nextGateway_30222 = $scope.gatewayList[last].gateway_30222;

//                }
//            });
//        }
//    };

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
     //每次显示数据数量发生变化都重新分页
    $scope.showNum = function () {
        $(".pagination li,#attrDisplay tr").remove();//每次清空属性展示列表和分页按钮
        var limit = Number($("#attrSelectInfo option:selected").text());
        //使用.text()取出的数据是字符型！！！！
        num = Math.ceil(attrDetailInfo.length / limit);
        size = limit;
        initUI(1, limit);
    };
    /*
    * 解绑网关
    * 接口需更改
    */
//    $scope.unbindGW = function () {
//        var unbindGWObj = $resource('/api/v1/abilityGroup?modelId=:id');
//        unbindGWObj.delete({id: modelId},{} , function (resp) {
//            //console.log(resp);
//            $("#unbindGW").modal("hide");
//             if(lang_flag==1){
//                    toastr.success("解绑网关成功！");
//                }
//                else{
//                    toastr.success("Successfully unbind the gateway！");
//                }
//                setTimeout(function () {
//                    window.location.reload();
//                }, 1000);
//        }, function (error) {
//            console.log("解绑网关失败！");
//            if(lang_flag==1){
//                toastr.error("解绑网关失败！");
//            }
//            else{
//                toastr.error("Failed to unbind the gateway！");
//            }
//        });
//    }
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