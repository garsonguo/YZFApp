<template>
    <div id="app">
        <router-view/>
        <div :class="$style.footer">
            <div :class="$style.footerNav">
                <router-link to='Home'>应用</router-link>
                <router-link to='Home'>财富</router-link>
                <router-link to='Home'>发现</router-link>
                <router-link to='Home'>账户</router-link>
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
    height: 50px;
    line-height: 50px;
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