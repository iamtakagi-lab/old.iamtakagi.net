<template>
 <div class="lg:sticky">

    <ul class="lg:pl-0 p-4 lg:py-8 lg:pr-8">
      <li v-for="item in items" :key="item.title" style="list-style: none">
        <NuxtLink
          :to="item.path"
          class="px-2 rounded font-medium py-1 block text-gray-600 dark:text-gray-500 hover:text-gray-800 dark-hover:text-gray-100"
          exact-active-class="text-blue-600 bg-blue-100 hover:text-blue-600 dark:text-blue-200 dark:bg-blue-900 dark-hover:text-blue-200"
        >{{ item.title }}</NuxtLink>
      </li> 
    </ul>

    <div class="inline-flex p-1">
      <p class="mr-1">テーマ切替:</p>
       <ColorSwitcher/>
    </div>

    <div>
        <ArticleRanking/>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    items: {
      type: Array,
      default: () => null
    }
  }
}
</script>
