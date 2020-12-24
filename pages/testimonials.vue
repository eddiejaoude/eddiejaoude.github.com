<template>
  <div>
    <h2>Testimonials</h2>
    <ul>
      <li v-for="testimonial in testimonials" v-bind:key="testimonial.name">{{ testimonial.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    testimonials: [{ name: 'aaaaaa' }]
  })
}
</script>
