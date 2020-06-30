<template>
  <div>
    <div class="flex">
     <h2 style="font-size: 28px">プロジェクト</h2>
    </div>

    <div class="flex">
      <nuxt-content :document="projects" style="margin-top: 1em;" />
    </div>

    <div class="flex" style="margin-top: 2em;">
       <h2 style="font-size: 28px">投稿記事</h2>
    </div>

    <div class="articles">
      <div v-for="article in articles.slice(getStart, getCurrent)" :key="article.slug" style="margin-top: 1em">
        <nuxt-link :to="'/articles/'+ article.slug">{{ article.title + ' - ' + $dayjs(article.date).format('YYYY/MM/DD') }}</nuxt-link>
      </div>

      <div style="margin-top: 2em;">
       <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded"
          v-show="hasPrev"
          @click="clickCallback(getPrev)"
        >前のページ</button>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded opacity-50 cursor-not-allowed"
          v-show="!hasPrev"
        >前のページ</button>

        <p
          style="display: inline-flex; margin-left: 5px; margin-right: 5px;"
        >{{currentPage}} / {{Math.ceil(articles.length / this.parPage)}}</p>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded"
          v-show="(this.currentPage < Math.ceil(articles.length / this.parPage))"
          @click="clickCallback(getNext)"
        >次のページ</button>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded opacity-50 cursor-not-allowed"
          v-show="!(this.currentPage < Math.ceil(articles.length / this.parPage))"
        >次のページ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content("projects" || "index").fetch();

    const articles = await $content("articles" || "index").sortBy('date', 'desc').fetch();

    return { projects, articles };
  },
  data() {
    return {
      parPage: 5,
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