<template>
  <div class="flex flex-wrap-reverse">
   
     <div :class="{ 'lg:border-r': doc.toc && doc.toc.length }"
      class="w-full lg:w-3/4 py-4 lg:pt-8 lg:pb-4 dark:border-gray-800">
       
       <article class="lg:px-8">
        <h2
          style="font-size: 20px" class="mb-3"
        >{{this.doc.title + ' (' + $dayjs(doc.date).format('YYYY/MM/DD') + ')' }}</h2>
        <nuxt-content :document="doc" />
       </article>
    </div>

   <ArticleToc v-if="doc.toc && doc.toc.length" :toc="doc.toc" />
   
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content("articles", params.slug || "index").fetch();
    return { doc };
  },
   head () {
    return {
      title: this.doc.title,
    }
   }
}
</script>

<style lang="scss" scoped>

</style>