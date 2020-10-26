<!--  -->
<template>
  <div class="categoryCat">
    <Categorytab />
    <Categorycont />

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Categorytab from './categorytab'
import Categorycont from './categorycont'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Categorytab,
    Categorycont,
  },
}
</script>
<style lang="less">
.categoryCat {
  padding: 4.4rem 0 4.9rem 0;
  width: 100%;
  //   height: 100%;
  height: calc(100%-9.3rem);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  overflow: hidden;
}
</style>