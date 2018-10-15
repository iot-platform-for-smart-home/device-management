mainApp.controller("customerCtrl",["$scope","$resource","$location",function ($scope,$resource,$location) {
    $scope.$location = $location;

    var currentPage=1;//用于记录当前页号
    var customersLimit = 9;//用于记录当前展示客户个数
    var totalPages;
    var lang_flag=getCookie('Language');

    $("#customerChart").hide();

    $scope.customerLimit = function () {
        if($("#customerNum").val() === ""){
            setTimeout(function () {
                /*customersLimit = 9;
                var customerCurrentObj = $resource("/api/account/customers?limit=:customersLimit&page=:page");
                $scope.customersInfo = customerCurrentObj.query({customersLimit:customersLimit,page:(currentPage-1)});//所有客户组信息
                console.log($scope.customersInfo);

                //获取分页总数
                $.ajax({
                    url:"api/account/customersPage?limit="+customersLimit,
                    type:"GET",
                    dataType:"text",
                    async:false,
                    success:function (msg) {
                        totalPages = Number(msg);
                        console.log(totalPages);
                    }
                });



                //分页
                Page({
                    num:totalPages,					//页码数
                    startnum:1,				//指定页码
                    elem:$('#customerPage'),		//指定的元素
                    callback:function(n){	//回调函数
                        console.log(n);//当前页号
                        currentPage = Number(n);
                        var customerObj = $resource("/api/account/customers?limit=:customersLimit&page=:page");
                        $scope.customersInfo = customerObj.query({customersLimit:customersLimit,page:(currentPage-1)});//所有客户组信息
                        console.log($scope.customersInfo);
                    }
                });*/
                window.location.reload();
            },1000);

        }else{
            setTimeout(function () {
                customersLimit = $("#customerNum").val();
                console.log(customersLimit);
                var customerCurrentObj = $resource("/api/account/customers?limit=:customersLimit&page=0");
                $scope.customersInfo = customerCurrentObj.query({customersLimit:customersLimit});//第一页所有客户组信息
                console.log($scope.customersInfo);

                //获取分页总数
                $.ajax({
                    url:"api/account/customersPage?limit="+customersLimit,
                    type:"GET",
                    dataType:"text",
                    async:false,
                    success:function (msg) {
                        totalPages = Number(msg);
                        console.log(totalPages);
                    }
                });


                //分页
                Page({
                    num:totalPages,					//页码数
                    startnum:1,				//指定页码
                    elem:$('#customerPage'),		//指定的元素
                    callback:function(n){	//回调函数
                        console.log(n);//当前页号
                        currentPage = Number(n);
                        var customerObj = $resource("/api/account/customers?limit=:customersLimit&page=:page");
                        $scope.customersInfo = customerObj.query({customersLimit:customersLimit,page:(currentPage-1)});//所有客户组信息
                        console.log($scope.customersInfo);
                    }
                });
            },1000);
        }
    };

    //获取所有客户组
    var customerObj = $resource("/api/account/customers?limit=9&page=:page");
    $scope.customersInfo = customerObj.query({page:(currentPage-1)});//所有客户组信息
    console.log($scope.customersInfo);

    /*鼠标移入动画效果*/
    $scope.fadeSiblings = function () {
        $(".chooseBtn").mouseover(function () {
            $(this).siblings().stop().fadeTo(300, 0.3);
            $(this).css("border-color","#38883C");
        });
    };
    $scope.reSiblings = function () {
        $(".chooseBtn").mouseout(function () {
            $(this).siblings().stop().fadeTo(300, 1);
            $(this).css("border-color","#C0C0C0");
        });
    };

    //选中客户组信息展示
    $scope.showCustomer = function (data) {
        var offset = $('#customerChart').offset().top-215;
        console.log(offset);
        $('html, body').animate({scrollTop:offset}, 1000);
        // $scope.customersInfo.forEach(function (items) {
        //     if(data != items) items.style = {}
        // });
        /*给点击元素加上特定样式*/
        // data.style = {"border": "2px solid #468847"};

        $("#addCustomer").hide();
        $("#limitRow").hide();
        $("#customerIcon").hide();
        $("#customerPage").hide();

        $("#customerChart").show();

        console.log(data);
        $scope.customerInfo = data;
        $scope.tenantId = data.tenant_id;
        $scope.title = data.title;
        $scope.customerId = data.id;
        $scope.additionalInfo = data.additional_info;
        $scope.address = data.address;
        $scope.email = data.email;
        $scope.phone = data.phone;
        // document.cookie="customerId="+$scope.customerId;
        $.cookie("customerId",$scope.customerId);
    };

    $("#backToCustomer").click(function () {
        $("#customerChart").hide();
        $("#addCustomer").show();
        $("#limitRow").show();
        $("#customerIcon").show();
        $("#customerPage").show();
    });

    //获取分页总数
    $.ajax({
        url:"api/account/customersPage?limit="+customersLimit,
        type:"GET",
        dataType:"text",
        async:false,
        success:function (msg) {
            totalPages = Number(msg);
            console.log(totalPages);
        }
    });



    //分页
    Page({
        num:totalPages,					//页码数
        startnum:1,				//指定页码
        elem:$('#customerPage'),		//指定的元素
        callback:function(n){	//回调函数
            console.log(n);//当前页号
            currentPage = Number(n);
            var customerObj = $resource("/api/account/customers?limit=:customersLimit&page=:page");
            $scope.customersInfo = customerObj.query({customersLimit:customersLimit,page:(currentPage-1)});//所有客户组信息
            console.log($scope.customersInfo);
        }
    });



    //删除客户组
    $scope.deleteCustomer = function () {
        // console.log($scope.customerInfo);
        var deleteObj = $resource("/api/account/customer?customerId=:customerId");
        deleteObj.delete({customerId:$scope.customerInfo.id},{},function (resp) {
            if(lang_flag==1){
                toastr.success("删除客户组成功！");
            }
            else{
                toastr.success("Successfully deleted th customer group！");
            }
            setTimeout(function () {
                window.location.reload();
            },1000);
        },function (err) {
            if(lang_flag==1){
                toastr.error("删除客户组失败！");
            }
            else{
                toastr.error("Failed to delete the customer group！");
            }
        });
    };

    //新增客户组
    $("#addCustomer").click(function () {
        $("#customerName").removeClass("input-err");
        $("#createCustomer input").each(function () {
            $(this).val("");
        });
        document.getElementById("emailCheck").style.display="none";
    });
    $scope.createCustomer = function () {
        $("#modalConfirmCreateCustomer").attr("data-dismiss","modal");
        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if($("#customerName").val()){
            var title = $("#customerName").val();
            var phone = $("#customerPhone").val();
            var email = $("#customerEmail").val();
            var address = $("#customerAddress").val();
            var additional_info =$("#customerAddInfo").val();
            var createCustomerInfo = '{"title":'+'"'+title+'"'+',"phone":'+'"'+phone+'"'+',"email":'+'"'+email+'"'+',"address":'+'"'+address+'"'+',"additional_info":'+'"'+additional_info+'"'+'}';
            console.log(createCustomerInfo);
            if(email != "" && email != null) {
                if(reg.test(email)) {
                    $.ajax({
                        url:"/api/account/customer",
                        data:createCustomerInfo,
                        type:"POST",
                        contentType: "application/json; charset=utf-8",//post请求必须
                        success:function (resp) {
                            if(lang_flag==1){
                                toastr.success("创建客户组成功！");
                            }
                            else{
                                toastr.success("Successfully created the customer group!");
                            }
                            setTimeout(function () {
                                window.location.reload();
                            },1000);
                        },
                        error:function (err) {
                            if(lang_flag==1){
                                toastr.error("创建客户组失败！");
                            }
                            else{
                                toastr.error("Failed to create the customer group！");
                            }
                        }
                    });
                }
                else {
                    $("#modalConfirmCreateCustomer").removeAttr("data-dismiss");
                    document.getElementById("emailCheck").style.display="inline";
                    $('#customerEmail').on('focus', function() {
                        document.getElementById("emailCheck").style.display="none";
                    });
                }
            }
            else {
                $.ajax({
                    url:"/api/account/customer",
                    data:createCustomerInfo,
                    type:"POST",
                    contentType: "application/json; charset=utf-8",//post请求必须
                    success:function (resp) {
                        if(lang_flag==1){
                            toastr.success("创建客户组成功！");
                        }
                        else{
                            toastr.success("Successfully created the customer group!");
                        }
                        setTimeout(function () {
                            window.location.reload();
                        },1000);
                    },
                    error:function (err) {
                        if(lang_flag==1){
                            toastr.error("创建客户组失败！");
                        }
                        else{
                            toastr.error("Failed to create the customer group！");
                        }
                    }
                });
            }

        }else{
            /*增加提示效果*/
            $("#customerName").addClass("input-err");
            $("#modalConfirmCreateCustomer").removeAttr("data-dismiss");
            $('#customerName').on('focus', function() {
                $(this).removeClass('input-err');
            });
        }
    };

    //显示现有信息
    $scope.setCustomerInfo = function () {
        $("#refreshCustomerPhone").val($scope.customerInfo.phone);
        $("#refreshCustomerEmail").val($scope.customerInfo.email);
        $("#refreshCustomerAddress").val($scope.customerInfo.address);
        $("#refreshCustomerAddInfo").val($scope.customerInfo.additional_info);
        console.log($scope.customerInfo.phone);
    };

    //修改客户组信息
    $scope.refreshCustomer = function () {

        var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        var phone = $("#refreshCustomerPhone").val();
        var email = $("#refreshCustomerEmail").val();
        var address = $("#refreshCustomerAddress").val();
        var additional_info =$("#refreshCustomerAddInfo").val();
        var refreshCustomerInfo = '{"id":'+'"'+$scope.customerId+'"'+',"title":'+'"'+$scope.title+'"'+',"phone":'+'"'+phone+'"'+',"email":'+'"'+email+'"'+',"address":'+'"'+address+'"'+',"additional_info":'+'"'+additional_info+'"'+'}';
        console.log(refreshCustomerInfo);
        if(email != "" && email != null) {
            if(reg.test(email)) {
                $.ajax({
                    url:"/api/account/customer",
                    data:refreshCustomerInfo,
                    type:"PUT",
                    contentType: "application/json; charset=utf-8",//post请求必须
                    success:function (resp) {
                        if(lang_flag==1){
                            toastr.success("修改客户组信息成功！");
                        }
                        else{
                            toastr.success("Successfully modified the information of the customer group！");
                        }
                        setTimeout(function () {
                            window.location.reload();
                        },1000);
                    },
                    error:function () {
                        if(lang_flag==1){
                            toastr.error("修改客户组信息失败！");
                        }
                        else{
                            toastr.error("Failed to modify the information of the customer group！");
                        }
                    }
                });
            }
            else {
                $("#modalConfirmRefresheCustomer").removeAttr("data-dismiss");
                document.getElementById("emailModifyCheck").style.display="inline";
                $('#refreshCustomerEmail').on('focus', function() {
                    document.getElementById("emailModifyCheck").style.display="none";
                });
            }
        }
        else {
            $.ajax({
                url:"/api/account/customer",
                data:refreshCustomerInfo,
                type:"PUT",
                contentType: "application/json; charset=utf-8",//post请求必须
                success:function (resp) {
                    if(lang_flag==1){
                        toastr.success("修改客户组信息成功！");
                    }
                    else{
                        toastr.success("Successfully modified the information of the customer group！");
                    }
                    setTimeout(function () {
                        window.location.reload();
                    },1000);
                },
                error:function () {
                    if(lang_flag==1){
                        toastr.error("修改客户组信息失败！");
                    }
                    else{
                        toastr.error("Failed to modify the information of the customer group！");
                    }
                }
            });
        }
    };

    //展示客户组下所有设备
    $scope.showDeviceList = function () {
      var deviceListObj = $resource("/api/device/customerDevices/:customerId?limit=1000");
      $scope.deviceListInfo = deviceListObj.query({customerId:$scope.customerId});
      console.log($scope.deviceListInfo);
    };
    //清空客户组所有设备
    $scope.deleteCustomerDevice = function () {
        var emptyObj = $resource("/api/device/unassign/customerDevices/:customerId");
        var emptyInfo = emptyObj.delete({customerId:$scope.customerId},{},function (resp) {
            if(lang_flag==1){
                toastr.success("已清空当前客户组所有设备！");
            }
            else{
                toastr.success("All devices in the current customer group have been cleared！");
            }
            setTimeout(function () {
                window.location.reload();
            },1000);
        },function (err) {
            if(lang_flag==1){
                toastr.error("清空当前客户组所有设备失败！");
            }
            else{
                toastr.error("Failed to clear all devices in the current customer group！");
            }
        });
    };
    

    //样式
    $(".highlight").mouseover(function () {
        $(this).css("color","#33883c");
    });
    $(".highlight").mouseout(function () {
        $(this).css("color","#38883c");
    });
}]);

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