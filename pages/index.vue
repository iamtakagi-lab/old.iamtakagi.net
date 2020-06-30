<template>
  <div>
    <vs-divider style="max-width: 768px;  margin: 0 auto; margin-top: 1em;">プロジェクト</vs-divider>

    <div class="flex">
      <nuxt-content :document="projects" style="margin-top: 1em;" />
    </div>

    <vs-divider style="max-width: 768px;  margin: 0 auto; margin-top: 1em;">投稿記事</vs-divider>

    <div class="articles">
      <div v-for="article in articles.slice(getStart, getCurrent)" :key="article.slug" style="margin-top: 1em">
        <nuxt-link :to="'/articles/'+ article.slug">{{ article.title }}</nuxt-link>
        - {{article.date}}
      </div>

      <div class="flex" style="margin-top: 2em;">
        <vs-pagination :total="Math.ceil(articles.length / this.parPage)" v-model="currentPage"></vs-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content("projects" || "index").fetch();

    const articles = await $content("articles" || "index").fetch();

    return { projects, articles };
  },
  data() {
    return {
      parPage: 3,
      currentPage: 1
    };
  },
  computed: {
    getCurrent: function() {
      return this.currentPage * this.parPage;
    },

    getStart: function() {
      let current = this.currentPage * this.parPage;
      return current - this.parPage;
    },

    getPrev: function() {
      return this.currentPage - 1;
    },

    getNext: function() {
      return this.currentPage + 1;
    },

    hasPrev: function() {
      return this.currentPage > 1;
    }
  },
  methods: {
    clickCallback(page) {
      this.currentPage = Number(page);
    }
  }
};
</script>

<style lang="sass">
</style>