<!--  -->
<template>
  <div class='categorycon'>
    <div class="categoryconad">
      <a href="">
        <img :src="ad">
      </a>
    </div>
    <div class="categorycon-con">
      <div v-for="lists in categoryconDatas"
           :key="lists.cat_id">
        <h3>-{{lists.cat_name}}-</h3>
        <ul>
          <li v-for="list in lists.child"
              :key="list.cat_id"><a href="">
              <router-link :to="'/listdetail?cat_id='+list.cat_id+'&title='+list.cat_name"><img :src="list.touch_icon" /></router-link>
            </a>
            <h4>{{list.cat_name}}</h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  components: {},
  data() {
    return {
      categoryconDatas: [],
      ad: '',
    }
  },
  computed: {},

  methods: {
    getcategoryconData(cid) {
      Axios.get(`/api/v4/catalog/list/${cid}`).then((res) => {
        if (res.data.status == 'success') {
          this.categoryconDatas = res.data.data
          var arr = this.$store.state.CategoryDatas.filter((item) => {
            return item.cat_id == cid
          })
          this.ad = arr[0].touch_catads
        }
      })
    },
  },
  watch: {
    $route(to) {
      console.log(to)
      let cid = to.params.cid
      this.getcategoryconData(cid)
      var arr = this.$store.state.CategoryDatas.filter((item) => {
        return item.cat_id == cid
      })
      this.ad = arr[0].touch_catads
    },
  },

  mounted() {
    this.getcategoryconData(858)
  },
}
</script>
<style lang="less">
.categorycon {
  height: 100%;
  overflow-y: scroll;
  .categoryconad {
    width: 100%;
    margin-top: 10px;
    img {
      width: 90%;
      margin-left: 5%;
    }
  }
  .categorycon-con {
    h3 {
      text-align: center;
      font-size: 2rem;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      text-align: center;
      li {
        width: 33.3%;
        height: 8.2rem;
        margin-bottom: 1rem;
        img {
          width: 5.2rem;
          height: 5.2rem;
        }
      }
    }
  }
}
</style>