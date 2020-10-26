<!--  -->
<template>
  <div class="jishibox">
    <h2></h2>
    <div class='daojishi'>
      <span>{{dd}}天</span>
      <span>{{hh}}时</span>
      <span>{{mm}}分</span>
      <span>{{ss}}秒</span>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      dd: '00',
      hh: '00',
      mm: '00',
      ss: '00',
      timer: '',
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    timeFn() {
      var date = new Date()
      var nowTime = date.getTime()
      var endDate = new Date('2021-10-9 18:00:00')
      var endTime = endDate.getTime()

      var oTime = endTime - nowTime
      if (oTime > 0) {
        this.dd = Math.floor(oTime / 1000 / 60 / 60 / 24) //天
        this.hh = Math.floor((oTime / 1000 / 60 / 60) % 24) //时
        this.mm = Math.floor((oTime / 1000 / 60) % 60) //分
        this.ss = Math.floor((oTime / 1000) % 60)
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setInterval(this.timeFn, 1000)
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.timer)
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less">
.jishibox {
  height: 5rem;
  width: 100%;
  background: aquamarine;
  .daojishi {
    float: right;
    color: tomato;
    font-size: 24px;
    line-height: 5rem;
  }
}
</style>