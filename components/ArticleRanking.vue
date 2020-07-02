<template>
  <div class="lg:pl-0 p-2">
    <div class="text-xl">閲覧ランキング</div>
    <nuxt-link
      v-if="ranking"
      :v-for="article in ranking"
      :key="article"
      :to="article.slug"
    >{{ article.title + ' - ' + $dayjs(article.date).format('YYYY/MM/DD') }}</nuxt-link>
  </div>
</template>
 
<script>
export default {
  async asyncData({ $content }) {
    const res = await this.$axios.$get("/.netlify/functions/article-ranking");

    const ranking = []

    const rows = res.reports[0].data.rows;

    const articles = await $content("articles" || "index")
      .sortBy("date", "desc")
      .fetch();

    for (var i = 0; i < rows.length; i++) {
      const item = rows[i];
      const slug = item.dimensions.toString().split("/")[2];
      const pv = Number(item.metrics[0].values);
      ranking.push({
        slug: slug,
        title: articles.find(v => v.slug === slug).title,
        pv: pv
      });
    }

    return {
       ranking
    }
  }
};
</script>