<template>
  <Menu @tab-changed="handleTabChange" />
  <div class="pt-16">
    <component :is="currentTabComponent" />
  </div>
</template>
<script>
import Casual from "../components/Casual.vue";
import Cosplay from "../components/Cosplay.vue";
import Menu from "../components/Menu.vue";

export default {
  name: "HomeView",
  components: {
    Casual,
    Cosplay,
    Menu,
  },

  data() {
    return {
      currentTab: "casual", // Default tab
    };
  },
  computed: {
    currentTabComponent() {
      switch (this.currentTab) {
        case "casual":
          return Casual;
        case "cosplay":
          return Cosplay;
        default:
          return null;
      }
    },
  },
  methods: {
    handleTabChange(tab) {
      this.currentTab = tab;
    },
  },
};
</script>
