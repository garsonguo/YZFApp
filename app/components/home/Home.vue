<template>
    <div id="home" :class="$style.home">
        <div :class="$style.hKJ">
            <div :class="$style.hKJTop">
                <a :href="item.href" v-for="item in kjTop" :key="item.id">
                    <i :class="item.img"></i>
                    <p>{{item.name}}</p>
                </a>
            </div>
            <div :class="$style.hKJBottom">
                <a :href="item.href" v-for="item in kjBottom" :key="item.id">{{item.name}}</a>
            </div>
        </div>
        <div :class="$style.hNav">
            <div :class="$style.hNavRow">
                <a :href="item.href" :class="$style.item" v-for="item in hNavRow1" :key="item.id">{{item.name}}</a>
            </div>
            <div :class="$style.hNavRow">
                <a :href="item.href" :class="$style.item" v-for="item in hNavRow1" :key="item.id">{{item.name}}</a>
            </div>
            <div :class="$style.hNavRow">
                <a :href="item.href" :class="$style.item" v-for="item in hNavRow1" :key="item.id">{{item.name}}</a>
            </div>
        </div>
        <div :class="$style.hADS">
            <a href="Home" :class="$style.item">广告1</a>
            <a href="Home" :class="$style.item">广告2</a>
            <a href="Home" :class="$style.item">广告3</a>
            <a href="Home" :class="$style.item">广告4</a>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                kjTop:[{
                    id:'1',
                    name:'扫一扫',
                    href:'Home',
                    img:'fa fa-align-justify'
                },{
                    id:'2',
                    name:'收款码',
                    href:'Home',
                    img:'fa fa-th'
                },{
                    id:'3',
                    name:'附近',
                    href:'Home',
                    img:'fa fa-vcard'
                },{
                    id:'4',
                    name:'优惠',
                    href:'Home',
                    img:'fa fa-thumbs-o-up'
                }],
                kjBottom:[{
                    id:'1',
                    name:'银行卡',
                    href:'Home'
                },{
                    id:'2',
                    name:'支付设置',
                    href:'Home'
                },{
                    id:'3',
                    name:'我要加盟',
                    href:'Home'
                },{
                    id:'4',
                    name:'代金券',
                    href:'Home'
                }],
                hNavRow1:[{
                    id:'1',
                    name:'通信缴费',
                    href:'Home'
                },{
                    id:'2',
                    name:'天城理财',
                    href:'Home'
                },{
                    id:'3',
                    name:'转账',
                    href:'Home'
                },{
                    id:'4',
                    name:'生活费用',
                    href:'Home'
                },{
                    id:'5',
                    name:'吃喝玩乐',
                    href:'Home'
                }]
            }
        },
        computed: {
            
        }
    }
</script>

<style lang='scss' module>
.home{
    a{
        text-decoration: none;
    }
    .fa{
        margin: 5px;
    }
    padding:50px;
    .hKJ{
        background:linear-gradient(to right,red,lightcoral);
        border-radius: 20px;
        padding: 10px;
        a{
            color: #fff;
        }
        .hKJTop,
        .hKJBottom{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            height: 100px;
            text-align: center;
        }
    }
    .hNav{
        a{
            color: #333;
        }
        .hNavRow{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            height: 100px;
            line-height: 100px;
        }
    }
    .hADS{
        .item{
            display: block;
            height: 100px;
            line-height: 100px;
        }
    }
}
</style>