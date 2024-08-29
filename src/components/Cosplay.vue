<template>
  <div class="sm:container">
    <div
      class="grid md:grid-cols-4 sm:grid-cols-2 gap-4 justify-items-center"
      v-if="images.length"
    >
      <div v-for="(image, index) in images" :key="index">
        <img
          class="md:h-[491px] h-[387px] sm:max-w-[90%] rounded-lg object-cover object-center"
          :src="image.secure_url"
          :alt="image.public_id"
        />
      </div>
    </div>
    <div v-else>
      <Loading />
    </div>
  </div>
</template>

<script>
import getImages from "../composable/getImages"; // Adjust the path as necessary
import Loading from "./Loading.vue";

export default {
  components: {
    Loading,
  },
  data() {
    return {
      images: [], // Array to hold fetched images
    };
  },
  async created() {
    // Fetch images from the backend when the component is created
    this.images = await getImages("cosplay"); // Replace with your folder name
  },
};
</script>
