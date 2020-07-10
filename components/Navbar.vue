<template>
  <nav
    class="fixed top-0 z-40 w-full border-b dark:border-gray-800 bg-white dark:bg-gray-900"
    @click="scrollToTop"
  >
    <div class="container mx-auto px-4 lg:px-8 flex-1">
      <div class="flex items-center justify-between h-16">
        <div class="w-1/6" @click.stop="noop">
          <NuxtLink
            to="/"
            class="text-xl font-bold tracking-tight flex items-center flex-shrink-0"
            style="width: 104px;"
            aria-label="Nuxt Content Logo"
          >たかぎめも</NuxtLink>
        </div>

        <div class="hidden flex-1 lg:flex justify-center ml-4 mr-2 lg:mx-8 w-4/6">
          <SearchInput />
        </div>

        <div class="flex items-center justify-end w-1/6">
          <button
            class="lg:hidden p-2 rounded-md hover:text-blue-500 focus:outline-none focus:outline-none -mr-2"
            aria-label="Hamburger Menu"
            @click.stop="menu = !menu"
          >
            <IconX v-if="menu" class="w-6 h-6" />
            <IconMenu v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    menu: {
      get() {
        return this.$store.state.menu.open;
      },
      set(val) {
        this.$store.commit("menu/toggle", val);
      }
    }
  },
  methods: {
    scrollToTop() {
      if (window.innerWidth >= 1280) {
        return;
      }
      window.scrollTo(0, 0);
    },
    noop() {}
  }
};
</script>