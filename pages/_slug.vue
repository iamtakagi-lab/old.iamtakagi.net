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
      bodyAttrs: {
        class: [
          ...this.bodyClass,
          "antialiased text-gray-800 leading-normal bg-white dark:bg-gray-900 dark:text-gray-100"
        ]
      },
      meta: [
        {
          hid: 'author',
          name: 'author',
          content: 'riptakagi'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.article.body.length > 300 ? this.article.body.substring(0, 300) + "..." : this.article.body
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>