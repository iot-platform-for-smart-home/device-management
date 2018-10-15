mainApp.controller("abilityCtrl", function ($scope, $resource) {
    var modelId;
    var abilityId = [];
    $scope.result = new Array();

    $(".abilityChart").hide();

    var lang_flag=getCookie('Language');
    /*权限管理*/
    // if($.cookie("userLevel") === "CUSTOMER_USER"){
    //     $scope.flag=true;
    //
    // }

    /*权限管理
  var module = angular.module('mainApp', [])
        .directive('onFinish', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    if (scope.$last === true) {
                        $timeout(function () {
                            scope.$emit('ngRepeatFinished');
                        });
                    }
                }
            }});
    $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        //这里写获取dom的操作，
        $(".userDelete").removeAttr("data-target");
        $(".userDelete").css({cursor:"text",color:"#333"});
        $(".userDelete").removeClass("highlight");
    });
*/


    /*能力组信息获取与展示*/
    var abilityGroup = $resource('/api/v1/abilityGroup');
    $scope.abilityGroups = abilityGroup.query();
    //console.log($scope.abilityGroups);

    /*鼠标移入动画效果*/
    $scope.fadeSiblings = function () {
        $(".abilityBackgroundstyle").mouseover(function () {
            $(this).siblings().stop().fadeTo(300, 0.3);
            $(this).css("border-color","#38883C");
        });
    };
    /*鼠标移出动画效果*/
    $scope.reSiblings = function () {
        $(".abilityBackgroundstyle").mouseout(function () {
            $(this).siblings().stop().fadeTo(300, 1);
            $(this).css("border-color","#C0C0C0");
        });
    };


    /*右侧信息显示*/
    $scope.show = function(items){
        $scope.result = [];//初始化数组；
        /*除点击元素外其他元素均无特殊样式*/
        // $scope.abilityGroups.forEach(function (item) {
        //     if(items != item) item.style = {}
        // });
        /*给点击元素加上特定样式*/
        // items.style = {"border": "2px solid #468847"};

        $("#addService").hide();
        $(".abilityIcon").hide();

        $(".abilityChart").show();

        modelId = items.model.modelId;
        var abilitiesObj = $resource("/api/v1/ability/:modelId");
        $scope.abilitiesInfo = abilitiesObj.query({modelId:modelId})
            .$promise.then(function (value) {
                //console.log(value);
                for(var i=0;i<value.length;i++) {
                    abilityId[i] = value[i].abilityId;
                    var jsonData = JSON.parse(value[i].abilityDes);
                    //console.log(jsonData);
                    jsonData.abilityId = value[i].abilityId;
                    $scope.result.push(jsonData);//获取到的result是一个数组，有abilityId
                }
            });
    };

    $("#backToService").click(function () {
        $(".abilityChart").hide();

        $("#addService").show();
        $(".abilityIcon").show();
    });


    /*创建能力组*/
    $scope.addAM = function(){
        $scope.manufacturerName = $("#manufacturerName").val();
        $scope.deviceType = $("#deviceType").val();
        $scope.model = $("#model").val();
        console.log($scope.manufacturerName);
        if($scope.manufacturerName!="" && $scope.manufacturerName!=null &&
            $scope.deviceType!="" && $scope.deviceType!=null &&
            $scope.model!="" && $scope.model!=null) {
            $scope.createAbilityInfo = '{"manufacturerName":'+'"'+$scope.manufacturerName+'"'+',"deviceType":'+'"'+$scope.deviceType+'"'+',"model":'+'"'+$scope.model+'"'+'}';
            console.log($scope.createAbilityInfo);
            var createAbilityGroupObj =  $resource("/api/v1/abilityGroup");
            $scope.abilityInformation = createAbilityGroupObj.save({},$scope.createAbilityInfo,function (resp) {
                if(lang_flag==1){
                    toastr.success("新增设备成功！");
                }
                else{
                    toastr.success("Successfully added the device！");
                }
                setTimeout(function () {
                    window.location.reload();
                },500);
            },function (error) {
                if(lang_flag==1){
                    toastr.error("新增设备失败！");
                }
                else{
                    toastr.error("Failed to add the device！");
                }
            });
        }
        else {
            if($scope.manufacturerName=="" || $scope.manufacturerName==null){
                // alert("厂商不能为空！");
                $("#manufacturerName").addClass("input-err");
                $('#manufacturerName').on('focus', function () {
                    $(this).removeClass('input-err');
                });
            }
            if($scope.deviceType=="" || $scope.deviceType==null){
                // alert("设备类型不能为空！");
                $("#deviceType").addClass("input-err");
                $('#deviceType').on('focus', function () {
                    $(this).removeClass('input-err');
                });
            }
            if($scope.model==""|| $scope.model==null){
                // alert("设备型号不能为空！");
                $("#model").addClass("input-err");
                $('#model').on('focus', function () {
                    $(this).removeClass('input-err');
                });
            }
        }
    };


    /*创建能力*/
    var params = [];
    $scope.addAbility = function(){
        $scope.serviceName = $("#serviceName").val();
        $scope.serviceDescription = $("#serviceDescription").val();
        $scope.serviceType = $("#serviceType").val();
        $scope.protocol = $("#protocol").val();
        $scope.url = $("#url").val();
        $scope.requireResponse = $("#requireResponse").val();
        if($scope.requireResponse=="true"){
            $scope.requireResponse = true;
        }else{
            $scope.requireResponse = false;
        }
        $scope.methodName = $("#methodName").val();

        for (var i = 0; i < $scope.fchat.replies.length; i++) {
            params.push({key:$scope.fchat.replies[i].key,
                "type":new Number($scope.fchat.replies[i].type),
                "value":$scope.fchat.replies[i].value});
        }
        console.log(params);
        if(($scope.serviceName != "" || $scope.serviceName != null)
            && ($scope.serviceDescription != "" || $scope.serviceDescription != null)
            && ($scope.methodName != "" || $scope.methodName != null)
            && params[0].key != ""
            && params[0].type != ""
            && params[0].value != "") {
            console.log("params:"+params[0].key);
            $scope.createAbilityGroup = {
                modelId: modelId,
                abilityDes: {
                    serviceName: $scope.serviceName,
                    serviceDescription: $scope.serviceDescription,
                    serviceType: $scope.serviceType,
                    protocol: $scope.protocol,
                    url: $scope.url,
                    requireResponse: $scope.requireResponse,
                    serviceBody: {
                        methodName: $scope.methodName,
                        params: params
                    }
                }
            };
            //将json对象转换成json字符串
            $scope.createAbility = JSON.stringify(
                {
                    modelId: modelId,
                    abilityDes: {
                        serviceName: $scope.serviceName,
                        serviceDescription: $scope.serviceDescription,
                        serviceType: $scope.serviceType,
                        protocol: $scope.protocol,
                        url: $scope.url,
                        requireResponse: $scope.requireResponse,
                        serviceBody: {
                            methodName: $scope.methodName,
                            params: params
                        }
                    }
                }
            );
            console.log($scope.createAbility);
            var createAbilityObj =  $resource("/api/v1/ability");
            $scope.ability = createAbilityObj.save({},$scope.createAbility,function (resp) {
                if(lang_flag==1){
                    toastr.success("新增成功！");
                }
                else{
                    toastr.success("Successfully added！");
                }
                //console.log($scope.ability);
                setTimeout(function () {
                    $("#createSM").modal("hide");
                    location.reload();
                },500);
            },function (error) {
                if(lang_flag==1){
                    toastr.error("新增失败！");
                }
                else{
                    toastr.error("Failed to add！");
                }
            });
        }
        else {
            if($scope.serviceName=="" || $scope.serviceName==null){
                // alert("服务名称不能为空！");
                $("#serviceName").addClass("input-err");
                $('#serviceName').on('focus', function () {
                    $(this).removeClass('input-err');
                });
            }
            if($scope.serviceDescription=="" || $scope.serviceDescription==null){
                // alert("服务描述不能为空！");
                $("#serviceDescription").addClass("input-err");
                $('#serviceDescription').on('focus', function () {
                    $(this).removeClass('input-err');
                });
            }
            if($scope.methodName=="" || $scope.methodName==null){
                // alert("方法名不能为空！");
                $("#methodName").addClass("input-err");
                $('#methodName').on('focus', function () {
                    $(this).removeClass('input-err');
                });
            }
            if(params[0].key=="" || params[0].type=="" || params[0].value=="") {
                // alert("参数必须全部填写！");
                document.getElementById("paramWarning").style.display="inline";
                $('.parameterKey').on('focus', function () {
                    document.getElementById("paramWarning").style.display="none";
                });
                $('.parameterType').on('focus', function () {
                    document.getElementById("paramWarning").style.display="none";
                });
                $('.parameterValue').on('focus', function () {
                    document.getElementById("paramWarning").style.display="none";
                });
            }
        }
    };


    /*+加号增加的代码*/
    $scope.fchat = new Object();
    $scope.fchat.replies = [{key: "",type:1,value: ""}];
    // 初始化时由于只有1条参数，所以不允许删除
    $scope.fchat.canDescReply = false;
    // 增加参数
    $scope.fchat.incrReply = function($index) {
        $scope.fchat.replies.splice($index + 1, 0,
            {key: "",type:1,value: ""}); // 用时间戳作为每个item的key
        // 增加新的参数后允许删除
        $scope.fchat.canDescReply = true;
        // console.log("增加一行");
        console.log($scope.fchat.replies);
    }
    // 减少参数
    $scope.fchat.decrReply = function($index) {
        // 如果参数大于1，删除被点击回复
        if ($scope.fchat.replies.length > 1) {
            $scope.fchat.replies.splice($index, 1);
        }
        // 如果参数为1，不允许删除
        if ($scope.fchat.replies.length == 1) {
            $scope.fchat.canDescReply = false;
        }
    }


    /*删除能力组*/
    $scope.delAG = function () {
        var delAGObj = $resource('/api/v1/abilityGroup?modelId=:id');
        delAGObj.delete({id: modelId},{} , function (resp) {
            //console.log(resp);
            $("#deleteSM").modal("hide");
            location.reload();
        }, function (resp) {
            console.log("删除失败");
            if(lang_flag==1){
                alert("删除失败！")
            }
            else{
                alert("Failed to delete！")
            }
        });
    }


    /*删除能力*/
    $scope.deleteAA = function(data){

        var result;

        if(lang_flag==1){
            result = confirm("确定删除此能力？");
        }
        else{
            result = confirm("Are you sure to delete the ability?");
        }

        if(result){
            var deleteAA = $resource('/api/v1/ability/:id');
            deleteAA.delete({id:data.abilityId},{},function(){
                if(lang_flag==1){
                    toastr.success("删除成功！");
                }
                else{
                    toastr.success("Successfully deleted！");
                }
                setTimeout(function () {
                    window.location.reload();
                },1000);
            },function () {
                if(lang_flag==1){
                    alert("删除失败！");
                }
                else{
                    alert("Failed to delete！");
                }
            });
        }else {
            if(lang_flag==1){
                alert("不删除?");
            }
            else{
                alert("Do not delete?");
            }
        }
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
