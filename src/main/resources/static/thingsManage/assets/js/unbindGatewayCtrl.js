mainApp.controller("unbindGatewayCtrl", function ($scope, $resource) {


//    $scope.$location = $location;

    var lang_flag=getCookie('Language');

    var showNum = 9;//用于记录每次显示多少个网关

    var preCustomerIdArr = [];//用于记录网关列表展示时向前翻页
    var preGateway_nameArr = [];//用于网关列表展示时向前翻页
    var preCustomerId;//用于网关列表展示时向前翻页
    var preGateway_name;//用于网关列表展示时向前翻页
    var nextCustomerId;//用于网关列表展示时向后翻页
    var nextGateway_name;//用于网关列表展示时向后翻页
    var pageNum = 1;//用于记录当前页号

    var allGateway_name = [];//用于获取当前页面的设备的状态信息

    var initUrl;
    var prePageUrl;
    var nextPageUrl;

//    /*返回值为所有网关信息*/
    initUrl = "/api/device/assignGateways?limit=" + showNum;
    prePageUrl = "/api/device/assignGateways?limit=" + showNum + "&idOffset=" + nextCustomerId + "&textOffset=" + nextGateway_name;


    var obj = $resource("/api/device/assignGateways?limit=1000");
    $scope.deviceListAll = obj.query();

    /*返回值为限制个数的所有网关信息*/
        $.ajax({
            url: initUrl,
            contentType: "application/json; charset=utf-8",
            async: false,
            type: "GET",
            success: function (msg) {
                console.log(msg);
                if (msg.length != 0) {
                    $scope.gatewayList = msg;
                    var last = $scope.gatewayList.length - 1;
                    console.log($scope.gatewayList);
                    console.log($scope.gatewayList.length);
                    allGateway_name = [];

                    for (var i = 0; i < $scope.gatewayList.length; i++) {
                        allGateway_name.push($scope.gatewayList[i].name);
                    }

                    /*用于翻页*/
                    nextCustomerId = $scope.gatewayList[last].customerId;
                    nextGateway_name = $scope.gatewayList[last].name;
                    preCustomerIdArr.push($scope.gatewayList[last].customerId);
                    preGateway_nameArr.push($scope.gatewayList[last].name);

                    console.log(nextCustomerId);
                    console.log(nextGateway_name);
                }
            }
        });
      /*查看下一页设备*/
    $scope.nextGatewayInfo = function () {
        console.log(nextCustomerId);
        console.log(nextGateway_name);

        nextPageUrl = "/api/device/assignGateways?limit=" + showNum + "&idOffset=" + nextCustomerId + "&textOffset=" + nextGateway_name;

        if (nextCustomerId && nextGateway_name) {
            $.ajax({
                url: nextPageUrl,
                contentType: "application/json; charset=utf-8",
                async: false,
                type: "GET",
                success: function (msg) {
                    console.log(msg);

                    if (msg.length == 0) {
                        if(lang_flag==1){
                            toastr.warning("当前已是最后一页！");
                        }
                        else{
                            toastr.warning("Currently the last page！");
                        }
                    }
                    else {
                        pageNum++;
                        $scope.gatewayList = msg;
                        var last = $scope.gatewayList.length - 1;
                        // console.log($scope.deviceList);

                        allGateway_name = [];
                        for (var i = 0; i < $scope.gatewayList.length; i++) {
                            allGateway_name.push($scope.gatewayList[i].name);
                        }

                        /*用于翻页*/
                        nextCustomerId = $scope.gatewayList[last].customerId;
                        nextGateway_name = $scope.gatewayList[last].name;
                        preCustomerIdArr.push($scope.gatewayList[last].customerId);
                        preGateway_nameArr.push($scope.gatewayList[last].name);

                        console.log(nextCustomerId);
                        console.log(nextGateway_name);
                    }

                },
                error: function (err) {
                    if(lang_flag==1){
                        toastr.warning("当前已是最后一页！");
                    }
                    else{
                        toastr.warning("Currently the last page！");
                    }
                }
            });
        } else {
            if(lang_flag==1){
                toastr.warning("当前已是最后一页！");
            }
            else{
                toastr.warning("Currently the last page！");
            }
        }

    };

    /*查看上一页设备*/
    $scope.preGatewayInfo = function () {
        var url;
        if (pageNum == 1) {/*pageNum == 1的时候不发送ajax请求*/
            if(lang_flag==1){
                toastr.warning("当前已是第一页！");
            }
            else{
               toastr.warning("Currently the first page！");
            }
        }
        else {
            if (pageNum == 2) {
                // if ($.cookie("userLevel") === "CUSTOMER_USER") {
                //     url = "/api/device/customerDevices/" + customerId + "?limit=" + showNum;
                // } else if ($.cookie("userLevel") === "TENANT_ADMIN") {
                    url = "/api/device/assignGateways?limit=" + showNum;
                // }

            } else {
                preCustomerId = preCustomerIdArr[pageNum - 3];
                preGateway_name = preGateway_nameArr[pageNum - 3];
                // if ($.cookie("userLevel") === "CUSTOMER_USER") {
                //     url = "/api/device/customerDevices/" + customerId + "?limit=" + showNum + "&idOffset=" + preCustomerId + "&textOffset=" + preGateway_name;
                // } else if ($.cookie("userLevel") === "TENANT_ADMIN") {
                    url = "/api/device/assignGateways?limit=" + showNum + "&idOffset=" + preCustomerId + "&textOffset=" + preGateway_name;
                // }
                // console.log(pageNum);
            }
            $.ajax({
                url: url,
                contentType: "application/json; charset=utf-8",
                async: false,
                type: "GET",
                success: function (msg) {
                    pageNum--;
                    $scope.gatewayList = msg;
                    var last = $scope.gatewayList.length - 1;
                    // console.log($scope.gatewayList);

                    allGateway_name = [];
                    for (var i = 0; i < $scope.gatewayList.length; i++) {
                        allGateway_name.push($scope.gatewayList[i].name);
                  }
                    /*用于翻页*/
                    nextCustomerId = $scope.gatewayList[last].customerId;
                    nextGateway_name = $scope.gatewayList[last].name;

                    console.log(nextCustomerId);
                    console.log(nextGateway_name);

              }
           });
        }
    };

    /*鼠标移入动画效果*/
    $scope.fadeSiblings = function () {
        $(".chooseBtn").mouseover(function () {
            $(this).siblings().stop().fadeTo(300, 0.3);
            $(this).css("border-color","#38883C");
        });
    };
    /*选择每页显示多少设备*/
        $scope.GatewayListNumChoose = function () {
            if ($("#GatewayListNum").val() === "") {
                showNum = 9;
            } else {
                showNum = $("#GatewayListNum").val();
                preCustomerIdArr = [];
                preGateway_nameArr = [];
                pageNum = 1;
            }

            initUrl = "/api/device/assignGateways?limit=" + showNum;

            $("#GatewayListNum").keypress(function () {
                $.ajax({
                    url: initUrl,
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    type: "GET",
                    success: function (msg) {

                        preCustomerIdArr = [];
                        preGateway_nameArr = [];
                        pageNum = 1;
                        $scope.gatewayList = msg;
                        var last = $scope.gatewayList.length - 1;
                        console.log($scope.gatewayList);
                        console.log($scope.gatewayList.length);

                        allGateway_name = [];
                        for (var i = 0; i < $scope.gatewayList.length; i++) {
                            allGateway_name.push($scope.gatewayList[i].name);
                        }
                        /*用于翻页*/
                        nextCustomerId = $scope.gatewayList[last].customerId;
                        nextGateway_name = $scope.gatewayList[last].name;
                        preCustomerIdArr.push($scope.gatewayList[last].customerId);
                        preGateway_nameArr.push($scope.gatewayList[last].name);

                        console.log(nextCustomerId);
                        console.log(nextGateway_name);
                    }
                });
            });

        };

        /*搜索设备*/
        $scope.ifSearch = false; //判断是否出于搜索状态

        $scope.searchGateway = function () {
            var textSearch = $("#searchGatewayText").val();
            var url;
            console.log(textSearch);

                console.log("租户权限");
                url="/api/device/tenant/searchCount?textSearch=" + textSearch;

            if(textSearch == "") {
                if(lang_flag==1){
                    toastr.warning("请输入设备名称！");
                }
                else{
                    toastr.warning("Please input the device name！");
                }
            }
            else{
                $.ajax({
                    url: url,
                    contentType: "application/json; charset=utf-8",
                    async: false,
                    type: "GET",
                    success: function (msg) {
                        console.log(msg)
                        if (msg > 0) {
                            $scope.ifSearch = true;
                            $scope.searchCount = msg;
                        } else {
                            $scope.ifSearch = false;
                        }
                    }
                });

                //get搜索结果
                var searchDeviceObj = $resource("/api/device/alldevices?limit=20&textSearch=" + textSearch);
                $scope.searchGatewayInfo = searchDeviceObj.query();
                console.log($scope.searchGatewayInfo);
                console.log($scope.searchGatewayInfo.length);

                $scope.searchGatewayInfo.$promise.then(function (value) {
                    if (value == false) {
                        if (lang_flag == 1) {
                            toastr.warning("网关名称输入有误，无此网关！");
                        }
                        else {
                            toastr.warning("The gateway name was entered incorrectly, no such gateway！");
                        }
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000);
                    }
                    else {
                        $scope.gatewayList = $scope.searchGatewayInfo;

                       allGateway_name = [];
                       for (var i = 0; i < $scope.gatewayList.length; i++) {
                           allGateway_name.push($scope.gatewayList[i].name);
                       }
                        $("#searchGatewayText").on("focus", function () {
                            $(this).val("");
                        });
                    }
                });
            }
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
    $scope.unbindGW = function () {/*/api/v1/abilityGroup?modelId=:id*/
        var unbindGWObj = $resource('/api/v1/deviceaccess/unassign/customer/{modelId=:id}');
        unbindGWObj.delete({id: modelId},{} , function (resp) {
            //console.log(resp);
            $("#unbindGW").modal("hide");
             if(lang_flag==1){
                    toastr.success("解绑网关成功！");
                }
                else{
                    toastr.success("Successfully unbind the gateway！");
                }
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
        }, function (error) {
            console.log("解绑网关失败！");
            if(lang_flag==1){
                toastr.error("解绑网关失败！");
            }
            else{
                toastr.error("Failed to unbind the gateway！");
            }
        });
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