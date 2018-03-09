<template>
    <div id="app">
        <router-view/>
        <div :class="$style.footer">
            <div :class="$style.footerNav">
                <router-link to='Home'>
                    <i class="fa fa-home"></i>
                    <p>应用</p>
                </router-link>
                <router-link to='Money'>
                    <i class="fa fa-gg"></i>
                    <p>财富</p>
                </router-link>
                <router-link to='Discover'>
                    <i class="fa fa-chain-broken"></i>
                    <p>发现</p>
                </router-link>
                <router-link to='Account'>
                    <i class="fa fa-user"></i>
                    <p>账户</p>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'app'
    }
</script>

<style lang="scss" module>
@import './assets/css/reset.scss';
.footer{
    position: fixed;
    bottom: 0;
    z-index:10;
    left: 0;
    right: 0;
    height: 100px;
    text-align: center;
    .footerNav{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        a{
            color: red;
        }
    }
}

</style>