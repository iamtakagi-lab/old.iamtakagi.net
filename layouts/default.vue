<template>
  <div>
    <div style="margin-top: 1em; text-align: center;">
      <h1 style="margin-bottom: .5em; cursor: pointer; font-size: 28px" @click="$router.push('/')">たかぎめも</h1>

      <!--span>
          <a href="twitter.com/riptakagi">ついったー</a>
          /
        <a href="twitter.com/riptakagi">ぎっとはぶ</a>
      </span-->
    </div>

    <transition name="fade">
      <nuxt style="margin: 1em" />
    </transition>
  </div>
</template>

<script>
</script>

<style lang="scss">
* {
  font-family: "Noto Sans JP", sans-serif;
}

.flex {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;

  max-width: 768px;
  margin: 0 auto;
}

.articles {
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  flex-direction: column;

  max-width: 768px;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  will-change: opacity;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>