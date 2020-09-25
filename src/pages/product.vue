<template>
  <div class="product">
    <product-param :title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>
    <!-- <div class="container">
      <div class="content">
        <div class="item-bg">
          <h2>{{product.name}}</h2>
          <h3>{{product.subtitle}}</h3>
          <div class="price">
            <span>
              ￥
              <em>{{product.price}}</em>元
            </span>
          </div>
        </div>
        <dl v-html="product.detail">{{product.detail}}</dl>
      </div>
    </div> -->

  <div class="content">
    <div class="item-bg">
          <h2>{{product.name}}</h2>
          <h3>{{product.subtitle}}</h3>
          <div class="price">
            <span>
              ￥ {{product.price}} 元
            </span>
          </div>
        </div>
    <div class="container">
      <dl v-html="product.detail">{{product.detail}}</dl>
    </div>
  </div>

  </div>
</template>
<script>
import ProductParam from "./../components/ProductParam";
export default {
  name: "product",
  components: {
    ProductParam,
  },
  data() {
    return {
      showSlide: "", //控制动画效果
      product: {}, //商品信息
      swiperOption: {
        autoplay: true,
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then((res) => {
        this.product = res;
      });
    },
    buy() {
      let id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/base.scss";
.product {
  .content {
    dl {
        p {
          margin: 0 220px;
        }
      }
    .item-bg {
      background: url("/imgs/product/product-bg-2.jpg") no-repeat;
      background-size: 100% 100%;
      height: 718px;
      text-align: center;
      h2 {
        font-size: 80px;
        padding-top: 55px;
        letter-spacing: 20px;
        padding: 220px 0px 10px 0px;
      }
      h3 {
        font-size: 24px;
        letter-spacing: 10px;
        margin: 10px;
        padding: 10px;
      }
      p {
        margin-top: 21px;
        margin-bottom: 40px;
        a {
          font-size: 16px;
          color: #333333;
        }
        span {
          margin: 0 15px;
        }
      }
      .price {
        font-size: 30px;
        color: #333333;
        em {
          font-style: normal;
          font-size: 38px;
          padding-right: 10px; 
        }
      }
    }
  }
  button {
    margin-left: 10px;
  }
}
</style>