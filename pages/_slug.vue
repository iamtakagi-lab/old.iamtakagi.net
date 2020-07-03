<template>
  <div class="flex flex-wrap-reverse">
    <div
      :class="{ 'lg:border-r': article.toc && article.toc.length }"
      class="w-full lg:w-3/4 py-4 lg:pt-8 lg:pb-4 dark:border-gray-800"
    >
      <article class="lg:px-8">
        <h1
          class="text-xl mb-8"
        >{{this.article.title + ' (' + $dayjs(article.date).format('YYYY/MM/DD') + ')' }}</h1>
        <nuxt-content :document="article" />
      </article>
    </div>

    <ArticleToc v-if="article.toc && article.toc.length" :toc="article.toc" />
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug || "index").fetch();
    return { article };
  },
  head() {
    return {
      title: this.article.title
    };
  }
};
</script>

<style lang="scss" scoped>
</style>