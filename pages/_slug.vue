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
      title: this.article.title,
      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://riptakagi.me'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@riptakagi'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@riptakagi'
      },
      {
        hid: 'note:card',
        property: 'note:card',
        content: 'summary_large_image'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'たかぎのブログ'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'たかぎのブログ'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://i.imgur.com/vUy5pMl.png'
      },
    ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>