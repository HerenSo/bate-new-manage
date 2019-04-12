<template>
    <div class="">
        <div class="container">
            <el-tabs v-model="message">
                <el-tab-pane :label="`公告`" name="first">
                	<el-row>
                		<el-col :span="8">
                			<el-form ref="form" :model="form" label-width="80px">
			                    <el-form-item label="内容">
			                        <el-input v-model="form.name"></el-input>
			                    </el-form-item>
			                    <el-form-item label="是否开启">
			                        <el-switch
									  v-model="form.enabled">
									</el-switch>
			                    </el-form-item>
			                </el-form>
		                    <div class="handle-row">
		                        <el-button type="primary">立即提交</el-button>
		                        <el-button>同步到分站</el-button>
		                    </div>
                		</el-col>
                	</el-row>
                </el-tab-pane>
                <el-tab-pane :label="`底单申请说明`" name="second">
                    <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
                    <div class="handle-row">
                        <el-button type="primary">立即提交</el-button>
		                <el-button>同步到分站</el-button>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
        name: 'tabs',
        data() {
            return {
                message: 'first',
                showHeader: false,
                form:{},
                content: '',
                editorOption: {
                    placeholder: 'Hello World'
                },
                unread: [{
                    date: '2018-04-19 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
                },{
                    date: '2018-04-19 21:00:00',
                    title: '今晚12点整发大红包，先到先得',
                }],
                read: [{
                    date: '2018-04-19 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                }],
                recycle: [{
                    date: '2018-04-19 20:00:00',
                    title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
                }]
            }
        },
        components: {
            quillEditor
        },
        methods: {
            handleRead(index) {
                const item = this.unread.splice(index, 1);
                console.log(item);
                this.read = item.concat(this.read);
            },
            handleDel(index) {
                const item = this.read.splice(index, 1);
                this.recycle = item.concat(this.recycle);
            },
            handleRestore(index) {
                const item = this.recycle.splice(index, 1);
                this.read = item.concat(this.read);
            }
        },
        computed: {
            unreadNum(){
                return this.unread.length;
            }
        }
    }

</script>

<style>
.message-title{
    cursor: pointer;
}
.handle-row{
    margin-top: 30px;
}
.el-tab-pane{
	padding: 20px 0;
}
</style>

