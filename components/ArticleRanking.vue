<template>
    <div class="lg:pl-0 p-2">
      <div class="text-xl">月間ランキング</div>

      <div
        v-for="(r, i) in ranking"
        :key="i"
        class="mt-4 font-midium text-gray-600 dark:text-gray-500 hover:text-gray-800 dark-hover:text-gray-100"
      >
        <nuxt-link
          :to="r.article.slug"
        >{{ i+1 + '位: ' + r.article.title + ' - ' + $dayjs(r.article.date).format('YYYY/MM/DD')}}</nuxt-link>
      </div>
    </div>
</template>
 
<script>
export default {
  data() {
    return {
      ranking: []
    };
  },
  async fetch() {
    const res = await this.$axios.$get("/.netlify/functions/article-ranking");

    const rows = res.reports[0].data.rows;

    const articles = await this.$content("articles" || "index")
      .sortBy("date", "desc")
      .fetch();

    const ranking = [];

    for (var i = 0; i < rows.length; i++) {
      const item = rows[i];
      const slug = item.dimensions[0].split("/")[1];

      if (slug != "" && slug != null && slug != undefined) {
        const pv = Number(item.metrics[0].values);

        this.ranking.push({
          pv: pv,
          article: articles.find(v => v.slug === slug)
        });
      }
    }
  }
};
</script>