<template>
  <div>
    <h2>Testimonials</h2>
    <ul class="container mx-auto">
      <li v-for="testimonial in testimonials.data" :key="testimonial.name"
        class="rounded-md border border-gray-400 p-5 mb-3 shadow-sm transition duration-500 ease-in-out transform hover:border-gray-100 hover:bg-gray-400 hover:shadow-lg hover:-translate-y-1 hover:scale-110"
      >
        <Testimonial :data="testimonial" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content }) {
    const testimonials = await $content('testimonials').fetch()

    return {
      testimonials
    }
  }
})
</script>
