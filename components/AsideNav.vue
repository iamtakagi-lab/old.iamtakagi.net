<template>
 <div class="lg:sticky">

    <ul class="lg:pl-0 p-4 lg:py-8 lg:pr-8">
      <li v-for="item in items" :key="item.title" style="list-style: none">
        <NuxtLink
          :to="item.path"
          class="px-2 rounded font-medium py-1 block text-gray-600 dark:text-gray-500 hover:text-gray-800 dark-hover:text-gray-100"
          exact-active-class="text-green-600 bg-green-100 hover:text-green-600 dark:text-green-200 dark:bg-green-900 dark-hover:text-green-200"
        >{{ item.title }}</NuxtLink>
      </li> 
    </ul>

    <div class="inline-flex p-2">
      <p class="mr-1">テーマ切替:</p>
       <ColorSwitcher/>
    </div>

    <ul class="lg:pl-0 p-4 lg:py-8 lg:pr-8">
      <li class="list-none inline-flex">
        <a href='https://github.com/riptakagi'
        target="_blank"
                rel="noopener noreferrer"
                title="Github"
                name="Github"
          class="px-2 rounded font-medium py-1 block text-gray-600 dark:text-gray-500 hover:text-gray-800 dark-hover:text-gray-100 hover:text-green-500 mr-2">
         <icon-github class="w-6 h-6" /></a>
          <a href='https://twitter.com/riptakagi'
          target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                name="Twitter"
         class="px-2 rounded font-medium py-1 block text-gray-600 dark:text-gray-500 hover:text-gray-800 dark-hover:text-gray-100 hover:text-green-500 mr-2">
         <icon-twitter class="w-6 h-6" /></a>
      </li>
    </ul>

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