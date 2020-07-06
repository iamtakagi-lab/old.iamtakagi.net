<template>
   <footer class="h-24 w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900">
    <div class="h-full w-full container mx-auto px-4 lg:px-8 flex items-center justify-between">
      <div class="flex items-center">
        <a class="mr-2 text-sm leading-none" href="https://riptakagi.me" target="_blank" rel="noopener">
        &copy; {{ new Date().getFullYear() }} たかぎめも
        </a>
      </div>

      <div class="flex items-center">
        <nuxt-link to="/7" class="mr-2 text-sm leading-none">
        プライバシーポリシー
        </nuxt-link>
      </div>
    </div>
  </footer>
</template>
