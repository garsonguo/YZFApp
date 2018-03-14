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
                <a :href="item.href" v-for="item in kjBottom" :key="item.id">
                    <p>{{item.name}}</p>
                </a>
            </div>
        </div>
        <div :class="$style.hNav">
            <div :class="$style.hNavRow">
                <a :href="item.href" :class="$style.item" v-for="item in hNavRow1" :key="item.id">
                    <i :class="item.img"></i>
                    <p>{{item.name}}</p>
                </a>
            </div>
            <div :class="$style.hNavRow">
                <a :href="item.href" :class="$style.item" v-for="item in hNavRow1" :key="item.id">
                    <i :class="item.img"></i>
                    <p>{{item.name}}</p>
                </a>
            </div>
            <div :class="$style.hNavRow">
                <a :href="item.href" :class="$style.item" v-for="item in hNavRow1" :key="item.id">
                    <i :class="item.img"></i>
                    <p>{{item.name}}</p>
                </a>
            </div>
        </div>
        <div :class="$style.hADS">
            <a :href="item.href" :class="$style.item" v-for="item in ads" :key="item.id">
                <img :src="item.src" :alt="item.name">
            </a>
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
                    img:'fa fa-align-justify fa-2x'
                },{
                    id:'2',
                    name:'收款码',
                    href:'Home',
                    img:'fa fa-th fa-2x'
                },{
                    id:'3',
                    name:'附近',
                    href:'Home',
                    img:'fa fa-vcard fa-2x'
                },{
                    id:'4',
                    name:'优惠',
                    href:'Home',
                    img:'fa fa-thumbs-o-up fa-2x'
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
                    href:'Home',
                    img:'fa fa-thumbs-o-up fa-2x'
                },{
                    id:'2',
                    name:'天城理财',
                    href:'Home',
                    img:'fa fa-thumbs-o-up fa-2x'
                },{
                    id:'3',
                    name:'转账',
                    href:'Home',
                    img:'fa fa-thumbs-o-up fa-2x'
                },{
                    id:'4',
                    name:'生活费用',
                    href:'Home',
                    img:'fa fa-thumbs-o-up fa-2x'
                },{
                    id:'5',
                    name:'吃喝玩乐',
                    href:'Home',
                    img:'fa fa-thumbs-o-up fa-2x'
                }],
                ads:[{
                    id:'1',
                    name:'广告1',
                    href:'Home',
                    src:'/app/assets/img/ad1.jpg'
                },{
                    id:'2',
                    name:'广告1',
                    href:'Home',
                    src:'/app/assets/img/ad2.jpg'
                },{
                    id:'3',
                    name:'广告1',
                    href:'Home',
                    src:'/app/assets/img/ad3.jpg'
                },{
                    id:'4',
                    name:'广告1',
                    href:'Home',
                    src:'/app/assets/img/ad1.jpg'
                }]
            }
        },
        computed: {
            
        }
    }
</script>

<style lang='scss' module>
.home{
    background-color: #fff;
    a{
        text-decoration: none;
    }
    .fa{
        margin: 5px;
    }
    padding:50px 50px 120px 50px;
    .hKJ{
        background:linear-gradient(to right,red,lightcoral);
        border-radius: 20px;
        padding: 10px;
        a{
            color: #fff;
            flex-basis: 200px;
        }
        .hKJTop,
        .hKJBottom{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            padding: 10px 0;
            p{
                margin: 20px;
            }
        }
    }
    .hNav{
        a{
            color: #333;
            flex-basis: 300px;
        }
        .hNavRow{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            padding: 50px 0;
            text-align: center;
            p{
                margin: 20px 0;
            }
        }
    }
    .hADS{
        .item{
            display: block;
            height: 200px;
            margin: 20px 0;
            img{
                width: 100%;
                height: 200px;
            }
        }
    }
}
</style>