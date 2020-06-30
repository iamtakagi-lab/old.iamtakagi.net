<template>
  <div style="margin-top: 1em;">

    <div class="flex">
        <vs-breadcrumb style="margin: 0 auto" :items="[
        {
          title: 'Home',
          url: '/'
        },
        {
          title: this.article.title + ' (' + article.date + ')',
          url: 'articles/' + this.article.slug,
          active: true
        }
      ]" separator="chevron_right"></vs-breadcrumb>
    </div>
    
    

    <div class="flex">
      <nuxt-content :document="article" style="margin-top: 1em;" />
    </div>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug || "index").fetch();
    return { article };
  }
};
</script>