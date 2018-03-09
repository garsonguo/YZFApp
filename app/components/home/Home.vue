<template>
    <div id="home" class="home">
        <div class="h-kj">
            <div class="h-kj-top">
                <a href="Home" class="item">扫一扫</a>
                <a href="Home" class="item">收款码</a>
                <a href="Home" class="item">附近</a>
                <a href="Home" class="item">优惠</a>
            </div>
            <div class="h-kj-bottom">
                <a href="Home" class="item">银行卡</a>
                <a href="Home" class="item">支付设置</a>
                <a href="Home" class="item">我要加盟</a>
                <a href="Home" class="item">代金券</a>
            </div>
        </div>
        <div class="h-nav">
            <div class="h-nav-row">
                <a href="Home" class="item">通信缴费</a>
                <a href="Home" class="item">天城理财</a>
                <a href="Home" class="item">转账</a>
                <a href="Home" class="item">生活费用</a>
                <a href="Home" class="item">吃喝玩乐</a>
            </div>
            <div class="h-nav-row">
                <a href="Home" class="item">通信缴费</a>
                <a href="Home" class="item">天城理财</a>
                <a href="Home" class="item">转账</a>
                <a href="Home" class="item">生活费用</a>
                <a href="Home" class="item">吃喝玩乐</a>
            </div>
            <div class="h-nav-row">
                <a href="Home" class="item">通信缴费</a>
                <a href="Home" class="item">天城理财</a>
                <a href="Home" class="item">转账</a>
                <a href="Home" class="item">生活费用</a>
                <a href="Home" class="item">吃喝玩乐</a>
            </div>
        </div>
        <div class="h-ads">
            <a href="Home" class="item">广告1</a>
            <a href="Home" class="item">广告2</a>
            <a href="Home" class="item">广告3</a>
            <a href="Home" class="item">广告4</a>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='scss'>
.home{
    padding: 0 10px 10px 50px;
    .h-kj{
        .h-kj-top,
        .h-kj-bottom{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            height: 100px;
            line-height: 100px;
        }
    }
    .h-nav{
        .h-nav-row{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            height: 100px;
            line-height: 100px;
        }
    }
    .h-ads{
        .item{
            display: block;
            height: 100px;
            line-height: 100px;
        }
    }
}
</style>