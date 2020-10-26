<!--  -->
<template>
  <div class='Categorytab'>
    <div>
      <ul>
        <li v-for="list in this.$store.state.CategoryDatas"
            :key="list.cat_id">
          <router-link :to="'/category/'+list.cat_id">{{list.cat_name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      is_active: 0,
    }
  },
  methods: {
    getCategoryDatas() {
      Axios.get('/api/v4/catalog/list').then((res) => {
        if (res.data.status == 'success') {
          this.$store.dispatch('actgetCategoryDatas', res.data.data)
        }
      })
    },
    changeTab(index) {
      this.is_active = index
    },
  },
  mounted() {
    this.getCategoryDatas()
  },
}
</script>
<style lang="less">
.Categorytab {
  height: 100%;
  div {
    height: 100%;
    width: 8.4rem;
    overflow-y: scroll;
    background: seashell;
    ul {
      li {
        height: 3.8rem;
        font-size: 1.4rem;
        line-height: 3.8rem;
        text-align: center;
      }
      .router-link-active {
        display: block;
        background: #fff;
        color: red;
      }
    }
  }
}
</style>