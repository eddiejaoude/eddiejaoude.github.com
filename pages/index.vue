<template>
  <div>
    <h2 class="title">Eddie Jaoude</h2>
    <h3>Testimonials</h3>
    <ul class="container mx-auto">
      <li v-for="testimonial in featuredTestimonials" :key="testimonial.name"
        class="rounded-md border border-gray-400 p-5 mb-3 shadow-sm transition duration-500 ease-in-out transform hover:border-gray-100 hover:bg-gray-400 hover:shadow-lg hover:-translate-y-1 hover:scale-110"
      >
        <Testimonial :data="testimonial" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ITestimonial } from '../components/Testimonial.vue'

export default Vue.extend({
  data() {
    return {
      testimonials: { data: [] }
    }
  },
  async asyncData ({ $content }) {
    const testimonials = await $content('testimonials').fetch()

    return {
      testimonials
    }
  },
  computed: {
    featuredTestimonials(): ITestimonial[] {
      return this.testimonials.data.filter((testimonial: ITestimonial) => testimonial.featured)
    }
  }
})
</script>

<style>

</style>
