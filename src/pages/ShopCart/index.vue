<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(cartItem,index) in cartInfoList" :key="cartItem.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="cartItem.isChecked==1"@click="updateChecked(cartItem, $event)">
          </li>
          <li class="cart-list-con2">
            <img :src="cartItem.imgUrl">
            <div class="item-msg">{{ cartItem.skuName }}</div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">语音升级款</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ cartItem.skuPrice }}.00</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="handleSum('sub',-1,cartItem)">-</a>
            <input autocomplete="off" type="text" :value="cartItem.skuNum" minnum="1" class="itxt"
                   @change="handleSum('change',$event.target.value * 1,cartItem)">
            <a href="javascript:void(0)" class="plus" @click="handleSum('add',-1,cartItem)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cartItem.skuNum * cartItem.skuPrice }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet" @click="deleteCartShop(cartItem)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="isCheckedAll&&cartInfoList.length>0"@click="updateAllCartChecked($event)">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="#none"@click="deleteAllCheckedCart">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>0</span>件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a class="sum-btn"target="_blank"@click="toTrade">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import throttle from 'lodash/throttle'
export default {
  name: 'ShopCart',
  mounted() {
    this.getData();
  },
  computed: {
    ...mapGetters(['cartList']),
    cartInfoList() {
      return this.cartList.cartInfoList || [];
    },
    //  购物车总价
    totalPrice() {
      let sum = 0;
      this.cartInfoList.forEach((item) => {
        sum += item.skuNum * item.skuPrice;
      });
      return sum;
    },
    //  处理全选
    isCheckedAll() {
      return this.cartInfoList.every((item) => {
        return item.isChecked == 1;
      })
    }
  },
  methods: {
    getData() {
      this.$store.dispatch('getCartList');
    },
    //  处理购物车单个商品数量改变
    handleSum:throttle(async function(type, sum, cart){
      let disNum = sum;
      switch (type) {
        case 'add':
          disNum = 1;
          break;
        case 'sub':
          disNum = cart.skuNum > 1 ? -1 : 0;
          break;
        case 'change':
          //处理输入的非法值
          disNum = (isNaN(disNum) || disNum < 1) ? 0 : parseInt(disNum) - cart.skuNum;
      }
      try {
        await this.$store.dispatch('updateShopCart', {
          skuId: cart.skuId,
          skuNum: disNum
        });
        this.getData();
      } catch (err) {
        console.log(err)
      }

    },500),
    //  单个商品删除操作
    async deleteCartShop(cart) {
      try {
        await this.$store.dispatch('deleteCartListBySkuId', cart.skuId);
        this.getData();
        console.log('是多少')
      } catch (err) {
        alert('删除失败：', err)
      }
    },
    //修改某个产品的勾选状态
    async updateChecked(cart, event) {
      //带给服务器的参数isChecked，不是布尔值，应该是0|1
      try {
        //如果修改数据成功，再次获取服务器数据（购物车）
        let isChecked = event.target.checked ? "1" : "0";
        await this.$store.dispatch("updateCheckedById", {
          skuId: cart.skuId,
          isChecked,
        });
        this.getData();
      } catch (error) {
        //如果失败提示
        alert(error.message);
      }
    },
  //  删除选中的商品
    deleteAllCheckedCart(){
      try{
        this.$store.dispatch('deleteAllCheckedCart');
        this.getData();
      }catch (err){
        alert('部分删除失败'+err)
      }

    },
   // 更新选中状态
   async updateAllCartChecked(event){
      try{
        let isChecked=event.target.checked?'1':'0';
        await this.$store.dispatch('updateAllCartIsChecked',isChecked);
        this.getData();
      }catch (err){
        alert(err)
      }

    },
    //跳转结算页面
    toTrade(){
      this.$router.push({
        name:'trade'
      })
    }

  }


}
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;

      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 4.1667%;
        }

        .cart-list-con2 {
          width: 25%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12.5%;

        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>