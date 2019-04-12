<template>
    <div>
        <div class="container">
            <div class="schart-box" ref="schart">
                <div class="content-title">统计信息</div>
                <schart class="schart" :style="'width:'+ schartwidth + 'px'" canvasId="bar" :data="data1" type="bar" :options="options1"></schart>
            </div>
            <div class="schart-box">
	            <div class="content-title">充值(分)</div>
	            <schart class="schart" canvasId="line" :data="data1" type="line" :options="options2"></schart>
            </div>
            <div class="schart-box">
	            <div class="content-title">充值(总)</div>
	            <schart class="schart" canvasId="pie" :data="data2" type="pie" :options="options3"></schart>
            </div>
            <div class="schart-box">
	            <div class="content-title">佣金</div>
	            <schart class="schart" canvasId="ring" :data="data2" type="ring" :options="options4"></schart>
            </div>
            <div class="schart-box">
	            <div class="content-title">出单量</div>
	            <schart class="schart" canvasId="ring2" :data="data2" type="ring" :options="options5"></schart>
            </div>
        </div>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    export default {
        name: 'substationReport',
        components: {
            Schart
        },
        data: () => ({
            data1:[
                {name:'2012',value:1141},
                {name:'2013',value:1499},
                {name:'2014',value:2260},
                {name:'2015',value:1170},
                {name:'2016',value:970},
                {name:'2017',value:1450}
            ],
            data2 : [
                {name:'短袖',value:1200},
                {name:'休闲裤',value:1222},
                {name:'连衣裙',value:1283},
                {name:'外套',value:1314},
                {name:'羽绒服',value:2314}
            ],
            options1: {
                title: '统计信息',
                autoWidth: true,   // 设置宽高自适应
                showValue: false,
//              bgColor: '#F9EFCC',
                fillColor: '#00887C',
                contentColor: 'rgba(46,199,201,0.3)',
                yEqual: 7
            },
            options2: {
                title: '充值(分)',
//              bgColor: '#D5E4EB',
                titleColor: '#00887C',
                fillColor: 'red',
                contentColor: 'rgba(46,199,201,0.3)'
            },
            options3: {
                title: '充值(总)',
//              bgColor: '#829dca',
                titleColor: '#ffffff',
                legendColor: '#ffffff',
                radius: 120
            },
            options4: {
                title: '佣金',
//              bgColor: '#829daa',
                titleColor: '#ffffff',
                legendColor: '#ffffff',
                radius: 120,
                innerRadius:80
            },
            options5: {
                title: '出单量',
//              bgColor: '#829daa',
                titleColor: '#ffffff',
                legendColor: '#ffffff',
                radius: 120,
                innerRadius:80
            },
            schartwidth: ''
        }),
        mounted() {
        	this.schartwidth = this.$refs.schart.offsetWidth;
        }
        
    }
</script>

<style scoped>
.schart-box{
    display: inline-block;
    margin: 20px;
    width: 100%;
}
    .schart{
        width: 1100px;
        height: 400px;
    }
    .content-title{
        clear: both;
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
    
</style>