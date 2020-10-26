<!--  -->
<template>
  <div class='category-header'>
    <header>
      <a href="javascript:;"
         class="iconfont icon-jiantou3"
         onclick="window.history.back()">
      </a>
      <form action="">
        <input type="search"
               placeholder="请输入关键字" />
        <i class="iconfont icon-sousuo2"></i>
      </form>
    </header>
  </div>
</template>
<style lang="less">
.category-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: #eee;
  border-bottom: 1px solid #ccc;
  header {
    display: flex;
    form {
      width: 80%;
      position: relative;
      input {
        height: 3rem;
        border: 1px solid #efeffe;
        width: 100%;
        border-radius: 1.5rem;
        margin-top: 0.7rem;
        text-indent: 10px;
      }
      i {
        position: absolute;
        right: 0;
        width: 4.4rem;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        color: #ccc;
      }
    }
    a {
      display: block;
      width: 15%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
    }
  }
}
</style>