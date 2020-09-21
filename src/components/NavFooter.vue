<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/footer-logo.png" alt="">
            <p>纳米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://github.com/zephyrlind" target="_blank">关于我们</a><span>|</span>
            <a href="javascript:;">帮助中心</a><span>|</span>
            <a href="javascript:;">售后服务</a><span>|</span>
            <a href="javascript:;">关于货源</a><span>|</span>
        </div>
        <div class="copyright">Copyright ©2020 <span class="domain">nmshop.com</span> All Rights Reserved.</div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/config.scss';
.footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: #333;
    font-size: 16px;
    text-align: center;
    color: #999;
    .footer-logo {
        margin-top: 46px;
        margin-bottom: 31px;
        img {
            width: 53px;
            margin-bottom:13px;
        }
    }
    .footer-link {
        a {
            color: #999;
            display: inline-block;
        }
        span {
            margin: 0 10px;
        }
        margin-bottom: 13px;
    }
    .copyright {
        .domain {
            color: $colorA;
        }
    }
}
</style>