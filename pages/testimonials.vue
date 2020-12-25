<template>
  <div>
    <h2>Testimonials</h2>
    <ul class="container mx-auto">
      <li v-for="testimonial in testimonials.data" :key="testimonial.name"
        class="rounded-md border border-gray-400 p-5 mb-3 shadow-sm transition duration-500 ease-in-out transform hover:border-gray-100 hover:bg-gray-400 hover:shadow-lg hover:-translate-y-1 hover:scale-110"
      >
        <div class="flex items-center">
          <div class="flex-0 m-5">
            <img class="rounded-full h-24 w-24" :src="testimonial.photo" :alt="testimonial.name" />
            <p>
              <svg class="h-6 w-6 float-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <a :href="'https://twitter.com/' + testimonial.twitter">
                {{ testimonial.name }}
              </a>
            </p>
            <p>
              <svg class="h-6 w-6 float-left" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ testimonial.location }}
            </p>
          </div>
          <div class="flex-1 text-center">
            <p class="text-2xl italic">{{ testimonial.message }}</p>
          </div>
        </div>
      </li>
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
