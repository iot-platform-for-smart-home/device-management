mainApp.controller("homePageCtrl",["$scope","$resource",function ($scope,$resource) {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    var chartText;
    var chartLabel;

    if(lang_flag==1){
        document.getElementById("homeDeviceNumber").innerText="设备数量";
        document.getElementById("pluginNumber").innerText="插件数量";
        document.getElementById("ruleNumber").innerText="规则数量";
        // document.getElementById("broadcast").innerText="广播事件";
        // document.getElementById("broadcastEvent").innerText="暂无广播事件";
        chartText="设备上下线情况";
        chartLabel=['上线', '故障', '下线'];
    }
    else{
        document.getElementById("homeDeviceNumber").innerText="Number of Devices";
        document.getElementById("pluginNumber").innerText="Number of Plugins";
        document.getElementById("ruleNumber").innerText="Number of Rules";
        chartText="Situation of Devices";
        chartLabel=['online', 'breakdown', 'offline'];
        // document.getElementById("broadcast").innerText="Broadcast Event";
        // document.getElementById("broadcastEvent").innerText="No broadcast event.";
    }

    $scope.showBroadcast=false

    //获取当前tenantId
    var tenantid=$.session.get("tenantId");

    // //获取设备个数
    // console.log($.cookie());
    // if($.cookie("userLevel") === "CUSTOMER_USER"){
    //     console.log("客户权限")
    //     var getDevice = $resource('/api/device/customer/devicesCount');
    // }else {
    //     console.log("租户权限")
    //     var getDevice = $resource('/api/device/tenant/devicesCount');
    // }
    // $scope.Devices_Number=getDevice.get()
    //     .$promise.then(function (resp) {
    //         console.log("resp")
    //         console.log(resp)
    //         $scope.Devices_Number=resp
    //     });
    // console.log("设备个数："+$scope.Devices_Number);

    //获取设备个数
    getDeviceCount()

    function getDeviceCount() {
        // if($.cookie("userLevel") === "CUSTOMER_USER"){
        //     console.log("客户权限")
        //     var url = '/api/device/customer/devicesCount';
        // }else {
            console.log("租户权限")
            var url = '/api/device/tenant/devicesCount';
        // }
        $.ajax({
            url: url,
            contentType: "application/json; charset=utf-8",
            async: false,
            type: "GET",
            success: function (msg) {
                $scope.Devices_Number = msg;
            }
        });
    }

    //获取设备上下线状态
    //var customerId = $.session.get("tenantId");
    // if ($.cookie("userLevel") === "CUSTOMER_USER") {
    //     var Device = $resource("/api/device/customerDevices/" + customerId + "?limit=1000");
    // } else if ($.cookie("userLevel") === "TENANT_ADMIN") {
    //     var Device = $resource("/api/device/alldevices?limit=1000");
    // }
    var Device = $resource("/api/device/alldevices?limit=1000");

    //debug
    console.log(Device);
    // end

    $scope.Devices = Device.query(function () {
        var DeviceName=getDevicesName()

        var DeviceState=$resource("/api/device/status");
        var DeviceStates=DeviceState.save({deviceId:DeviceName})
            .$promise.then(function (resp) {
                console.log(resp);
                var data=resp;
                var key='6d090f10-6e1c-11e8-8dc5-59c2cc02320f'
                console.log(data[key])
               showDeviceState(resp,DeviceName);
            })

    });

    var pluginGroup = $resource('/api/rule/allPlugins');
    $scope.pluginGroups = pluginGroup.query(function () {
        $scope.Plugin_Number=$scope.pluginGroups.length;
        console.log("插件个数："+$scope.Plugin_Number);
    });

    var RULE = $resource('/api/rule/ruleByTenant');
    $scope.Rules=RULE.query(function () {
        $scope.Rule_Number=$scope.Rules.length;
        console.log("规则个数："+$scope.Rule_Number);
        showRuleDounut();
    })

    function showRuleDounut() {
        var  _active =0
        var  _suspend =0
        var  _error = 0

        $scope.Rules.forEach(function (item) {
            if (item.rule.state == "ACTIVE") {
                _active++;
            }
            else if (item.rule.state == "SUSPEND") {
                _suspend++;
            } else {
                _error++;
            }
        });
        console.log(_active, _suspend, _error);

        //charts.js-甜甜圈
        // ctx = document.getElementById("myChart1").getContext("2d");
        // var myDoughnutChart1 = new Chart(ctx, {
        //     type: 'doughnut',
        //     data: {
        //         datasets: [{
        //             data: [_active, _error, _suspend],
        //             backgroundColor: [
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255,99,132,1)',
        //                 'rgba(255, 206, 86, 1)'
        //             ],
        //             borderWidth: 1
        //
        //         }],
        //         labels: [
        //             '运行中',
        //             '故障',
        //             '已停止'
        //         ]
        //     },
        //     options: {
        //         title: {
        //             display: true,
        //             text: '规则运行情况',
        //             fontSize: 25,
        //             fontFamily: "Microsoft YaHei",
        //             fontStyle: 'normal',
        //             fontColor: '#448864'
        //         },
        //         legend: {
        //             position: 'bottom',
        //             labels:{
        //                 boxWidth:20
        //             }
        //         }
        //     }
        // });
    }
    function getDevicesName() {
        var _DeviceName=[];
        $scope.Devices.forEach(function (item) {
            _DeviceName.push(item.id);
        })
        return _DeviceName

    }
    function showDeviceState(data,DeviceName) {
        var _online=0
        var _offline=0
        var _error=0
        var devicekey

        for(var i=0;i<$scope.Devices.length;i++){
            devicekey=DeviceName[i]
            if (data[devicekey] === "offline") {
                _offline++;
            }else if(data[devicekey] === "online"){
                _online++;
            }else{
                _error++;
            }
        }
        console.log(_offline,_online,_error);

        //饼状图
        ctx = document.getElementById("myChart2").getContext("2d");
        var myDoughnutChart1 = new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [_online, _error, _offline],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1

                }],
                labels: chartLabel
            },
            options: {
                title: {
                    display: true,
                    text: chartText,
                    fontSize: 25,
                    fontFamily: "Microsoft YaHei",
                    fontStyle: 'normal',
                    fontColor: '#448864'
                },
                legend: {
                    position: 'bottom',
                    labels:{
                        boxWidth:20
                    }
                }
            }
        });

    }


    /**广播事件**/

    /**socket连接**/
    // var stompClient = null;
    //
    // console.log("begin!") ;

    // 开启socket连接
    // function connect() {
    //
    //
    //     var socket = new SockJS('http://10.108.218.64:30080/api/v1/updatemessageplugin');
    //     stompClient = Stomp.over(socket);
    //
    //     var data=[]
    //
    //     stompClient.connect(
    //         {}
    //         , function () {
    //             console.log("Connected!") ;
    //             console.log("begin to send") ;
    //             stompClient.send("/plugins/updateMessage/fromModule", {},JSON.stringify({'tenantId': tenantid})) ;
    //
    //             var res = stompClient.subscribe("/plugins/updateMessage/response/fromModule/"+tenantid, function(frame){
    //                 var body=JSON.parse(frame.body)
    //                 //根据body的数据类型做相应处理
    //                 if(isArray(body)){
    //                     console.log("初始20条")
    //                     data=body
    //                 }else{
    //                     console.log("新消息")
    //                     data.splice(0,0,body)
    //                     data.pop()
    //                 }
    //                 data.forEach(function (item) {
    //                     item.date=formatDate(new Date(item.ts))
    //                 })
    //                 if(data === undefined || data.length == 0){
    //                     $scope.showBroadcast=false
    //                 }else {
    //                     console.log("判断有数据，显示广播内容")
    //                     $scope.showBroadcast=true
    //                 }
    //
    //                 $scope.BroadcastNews=data
    //
    //                 $scope.$apply()
    //                 console.log($scope.BroadcastNews)
    //             }) ;
    //             console.log(res) ;
    //         });
    // }

    // 断开socket连接
    // function disconnect() {
    //     if (stompClient != null) {
    //         stompClient.disconnect();
    //     }
    //     setConnected(falses);
    //     console.log("Disconnect")
    // }

    /*    // 向‘/app/change-notice’服务端发送消息
     function sendName() {
     var value = "hello tjlcast.";
     alert("send" + value) ;
     stompClient.send("/app/change-notice", {}, value);
     }

     function subscribe_app() {
     stompClient.subscribe("/app/app_subscribe", function(frame){
     alert(frame) ;
     })
     }*/

    // connect() ;

    //时间格式化
    // function formatDate(now) {
    //     //var year=now.getFullYear();
    //     var month=now.getMonth()+1;
    //     var date=now.getDate();
    //     var hour=now.getHours();
    //     var minute=now.getMinutes();
    //     if(minute<10){
    //         minute="0"+minute
    //     }
    //     if(hour<10){
    //         hour="0"+hour
    //     }
    //     //var second=now.getSeconds();
    //     return month+"-"+date+" "+hour+":"+minute;
    // }

    //判断接受消息的数据类型
    // function isArray(value){
    //     if (typeof Array.isArray === "function") {
    //         return Array.isArray(value);
    //     }else{
    //         return Object.prototype.toString.call(value) === "[object Array]";
    //     }
    // }
    /**广播事件END**/

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
}]);