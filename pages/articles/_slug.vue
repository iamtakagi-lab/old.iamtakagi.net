<template>
  <div style="margin-top: 1em;">

    <div class="flex">
      <h2 style="font-size: 20px">{{this.article.title + ' (' + $dayjs(article.date).format('YYYY/MM/DD') + ')' }}</h2>
    </div>

    <article class="flex">
      <nuxt-content :document="article" style="margin-top: 1em;" />
    </article>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug || "index").fetch();
    return { article };
  },
};
</script>

<style lang="scss" scoped>
</style>