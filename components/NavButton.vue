<template>
  <NuxtLink :to="path"
    :class="{ 'bg-gray-300': isActive, 'text-gray-900': isActive, }"
    class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
    >{{ name }}
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: String,
    isActive: {
      type: Boolean,
      default: false,
    },
    path: {
      type: String,
      default: '/'
    }
  }
})
</script>
