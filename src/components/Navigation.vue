<template>
  <div id="home">
    <nav
      class="flex items-center justify-between flex-wrap bg-black p-6"
      style="position: relative;"
    >
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-semibold text-xl tracking-tight text-green">Umbra</span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>Preview
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>
        <div>
          <a
            href="#home"
            class="block mt-4 lg:inline-block lg:mt-0 text-green hover:text-white mr-4"
          >Home</a>
          <a
            href="#howworks"
            class="block mt-4 lg:inline-block lg:mt-0 text-green hover:text-white mr-4"
          >How it works..?</a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-green hover:text-white mr-4"
          >Profit</a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-green hover:text-white mr-4"
          >Distribution</a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-green hover:text-white mr-4"
          >Defi</a>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >Login</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
