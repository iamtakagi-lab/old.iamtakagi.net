<template>
  <div class="pt-16">
    <Navbar />

    <main class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-wrap relative">
        <aside
          class="h-screen w-full lg:w-1/5 fixed lg:sticky top-0 left-0 bottom-0 pt-16 lg:-mt-16 lg:block bg-white dark:bg-gray-900 lg:bg-transparent z-30 lg:border-r dark:border-gray-800"
          :class="{ 'block': menu, 'hidden': !menu }"
        >
          <div class="mb-4 lg:hidden m-5">
            <SearchInput />
          </div>

          <AsideNav :items="items" />
        </aside>
        
          <transition name="fade">

            <Nuxt class="w-full" :class="getWidth()" />

          </transition>
       
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", path: "/" },
        { title: "Me", path: "/me" },
      ]
    };
  },
  computed: {
    bodyClass() {
      return this.$store.state.menu.open
        ? ["h-screen lg:h-auto overflow-y-hidden lg:overflow-y-auto"]
        : [];
    },
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
    getWidth: function() {
      return this.$route.path === "/" ? "lg:w-3/5" : "lg:w-4/5";
    }
  },
  head () {
    return {
      bodyAttrs: {
        class: [...this.bodyClass, 'antialiased text-gray-800 leading-normal bg-white dark:bg-gray-900 dark:text-gray-100']
      }
    }
   }
};
</script>

<style lang="postcss">
.dark-mode {
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  span,
  svg {
    color: lightgray;
  }
}

.fade-enter-active,
.fade-leave-active {
  will-change: opacity;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
