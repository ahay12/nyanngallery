<template>
  <nav
    class="sticky top-0 z-[999] w-full max-w-screen-xl px-4 py-2 mx-auto text-black bg-gray-200 border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4"
  >
    <ul
      class="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
      data-tabs="tabs"
      role="list"
    >
      <li @click="selectTab('casual')" class="z-30 flex-auto text-center">
        <a
          class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
          data-tab-target=""
          role="tab"
          aria-selected="true"
          aria-controls="app"
        >
          <span class="ml-1">Casual</span>
        </a>
      </li>
      <li @click="selectTab('cosplay')" class="z-30 flex-auto text-center">
        <a
          class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
          data-tab-target=""
          role="tab"
          aria-selected="false"
          aria-controls="message"
        >
          <span class="ml-1">Cosplay</span>
        </a>
      </li>
      <li @click="selectTab('nature')" class="z-30 flex-auto text-center">
        <a
          class="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-slate-700 bg-inherit"
          data-tab-target=""
          role="tab"
          aria-selected="false"
          aria-controls="settings"
        >
          <span class="ml-1">Nature</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    selectTab(tab) {
      this.$emit("tab-changed", tab);
    },
  },
};
</script>
