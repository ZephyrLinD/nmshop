<template>
<transition name="silde">
    <div class="modal" v-show="showModal">
        <div class="mask"></div>
        <div class="modal-dialog">
            <div class="modal-header">
                <span>{{title}}</span>
                <a href="javascript:;" class="icon-close" v-on:click="$emit(cancel)"></a>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit(submit)">{{sureText}}</a>
                <a href="javascript:;" class="btn" v-if="btnType==2" >{{cancelText}}</a>
    
                <div class="btn-group" v-if="btnType==3">
                    <a href="javascript:;" class="btn" v-on:click="$emit(submit)">{{sureText}}</a>
                    <a href="javascript:;" class="btn" v-on:click="$emit(cancel)">{{cancelText}}</a>
                </div>
                
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'modal',
    props: {
        // 弹框类型：小small、中middle、大large、表单form
        modalType: {
            type:String,
            default:'form'
        },
        // 弹框标题
        title: String,
        // 按钮：1确定 2取消 3确定取消
        btnType: String,
        sureText: {
            type: String,
            default: '确定'
        },
        showModal: Boolean
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/modal.scss';
</style>