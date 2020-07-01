<template>
  <div class="flex">
    <div class="w-full lg:w-3/4 py-4 lg:pt-4 lg:pb-4 dark:border-gray-800">
      <div class="lg:px-8">
        <div
          v-for="article in articles.slice(getStart, getCurrent)"
          :key="article.slug"
          style="margin-top: 1em"
        >
          <nuxt-link :to="article.slug">
            <p>{{ article.title + ' - ' + $dayjs(article.date).format('YYYY/MM/DD') }}</p>
          </nuxt-link>
        </div>

        <div class="mt-5">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 border border-green-700 rounded"
            v-show="hasPrev"
            @click="clickCallback(getPrev)"
          >前のページ</button>

          <button
            class="bg-gray-500 text-white font-bold py-1 px-1 border border-gray-700 rounded opacity-50 cursor-not-allowed"
            v-show="!hasPrev"
          >前のページ</button>

          <p
            style="display: inline-flex; margin-left: 5px; margin-right: 5px;"
          >{{currentPage}} / {{Math.ceil(articles.length / this.parPage)}}</p>

          <button
            class="bg-green-500 text-white hover:bg-green-700 font-bold py-1 px-1 border border-green-700 rounded"
            v-show="(this.currentPage < Math.ceil(articles.length / this.parPage))"
            @click="clickCallback(getNext)"
          >次のページ</button>

          <button
            class="bg-gray-500 text-white font-bold py-1 px-1 border border-gray-700 rounded opacity-50 cursor-not-allowed"
            v-show="!(this.currentPage < Math.ceil(articles.length / this.parPage))"
          >次のページ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content("articles" || "index")
      .sortBy("date", "desc")
      .fetch();

    return { articles };
  },
  data() {
    return {
      parPage: 20,
      currentPage: 1
    };
  },
  head() {
    return {
      title: 'ホーム'
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