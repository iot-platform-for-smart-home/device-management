// 基于准备好的dom，初始化echarts实例
        var myChart1 = echarts.init(document.getElementById('TSensor'));
        var myChart2 = echarts.init(document.getElementById('HSensor'));
        var myChart3 = echarts.init(document.getElementById('deviceType'));
        var myChart4 = echarts.init(document.getElementById('lineChart'));
        // 指定图表的配置项和数据
        option1 = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '温度',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: '温度'}]
                }
            ]
        };
        option2 = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        restore: {},
                        saveAsImage: {}
                    }
                },
                series: [
                    {
                        name: '湿度',
                        type: 'gauge',
                        detail: {formatter:'{value}%'},
                        data: [{value: 50, name: '湿度'}]
                    }
                ]
            };
        option3 = {
            title : {
                text: '设备类型',
                subtext: '现有',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['开关','传感器','窗帘','插座','灯泡','其他类型']
            },
            series : [
                {
                    name: '设备类型',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:0, name:'开关'},
                        {value:0, name:'传感器'},
                        {value:0, name:'窗帘'},
                        {value:0, name:'插座'},
                        {value:0, name:'灯泡'},
                        {value:0, name:'其他类型'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        option4 = {
            title: {
                text: '折线图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['温度','湿度','pm2.5']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'温度',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'湿度',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'pm2.5',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410]
                }
            ]
        };
        setInterval(function () {
            option1.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            option2.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            // 使用刚指定的配置项和数据显示图表。
            myChart1.setOption(option1, true);
            myChart2.setOption(option2, true);
            myChart3.setOption(option3, true);
            myChart4.setOption(option4, true);
        },2000);