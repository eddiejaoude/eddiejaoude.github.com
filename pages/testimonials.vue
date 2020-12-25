<template>
  <div>
    <h2>Testimonials</h2>
    <ul>
      <li v-for="testimonial in testimonials.data" :key="testimonial.name">{{ testimonial.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const testimonials = await $content('testimonials').fetch()

    return {
      testimonials
    }
  }
}
</script>
