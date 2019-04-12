<!-- 区域编辑  -->
<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>区域管理</el-breadcrumb-item>
                <el-breadcrumb-item>区域编辑</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="城市级联">
                    	<v-distpicker :province="select.province" :city="select.city" @province="onChangeProvince" @city="onChangeCity" hide-area></v-distpicker>
                    	<el-input class="handle-input-md" v-model="select.area" size="large" placeholder="请输入区域名称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">保存</el-button>
                        <el-button @click="cancel">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script>
    import bus from '../../common/bus';
    import VDistpicker from 'v-distpicker'
    export default {
        name: 'areaEdit',
        components: { VDistpicker },
        data: function(){
            return {
            	form:{},
                select: { province: '广东省', city: '广州市', area: '海珠区' },
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            },
            cancel() {
            	bus.$emit('close_current_tags',"area");
            },
            onChangeProvince(a){
                console.log(a)                
            },
            onChangeCity(a){
                console.log(a)                
            },
            onChangeArea(a){
                console.log(a)    
            }   
        }
    }
</script>
<style>
    .divwrap{
        height: 400px;
        overflow-y: auto;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }
    .distpicker-address-wrapper{
        color: #999;
        display: inline-block;
        margin-right: 5px;
    }
    .distpicker-address-wrapper select {
	  /*background-color: #f5f7fa;*/
	  border-color: #DCDFE6;
	  /*color: #c0c4cc;*/
	  cursor: not-allowed;
	  min-width: 120px;
	}
    .divwrap>>>.address-header{
        position: fixed;
        bottom: 400px;
        width: 100%;
        background: #000;
        color:#fff;
    }
    .divwrap>>>.address-header ul li{
        flex-grow: 1;
        text-align: center;
    }
    .divwrap>>>.address-header .active{
        color: #fff;
        border-bottom:#666 solid 8px
    }
    .divwrap>>>.address-container .active{
        color: #000;
    }

</style>