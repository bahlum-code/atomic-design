<template>
  <div>
    <!-- Header nav -->
    <article class="container my-3 md:flex justify-between items-center">
      <!-- Left -->
      <section class="p-2 md:flex items-center">
        <a href="#" class="block mb-2 md:mr-6">
          <AtomLogo class="mx-auto"/>
        </a>
        <a href="#" class="nav-item active md:mb-0 md:mr-4">Cover page</a>
        <a href="#" class="nav-item md:mb-0 md:mr-4">Home</a>
        <a href="#" 
        @click.prevent="onOpenVideo"
        class="nav-item md:mb-0 md:mr-4">Series</a>
        <a href="#" class="nav-item md:mb-0">Community</a>
      </section>
      <!-- /.Left -->
      <!-- Right -->
      <section class="text-center">
        <a href="#" class="mr-3 bg-blue-900 text-white px-3 py-2 rounded">Profile</a>
        <a href="#" class="bg-gray-200 px-3 py-2 rounded">Logout</a>
      </section>
      <!-- /.Right -->
    </article>
    <!-- /.Header nav -->
    <!-- Testimonials -->
    <!-- /.Testimonials -->
    <FsLightbox
      ref="fsLightboxRef"
      :toggler="toggler"
      :on-open="onOpenFsLightbox"
      :on-show="onShow"
      :on-init="onInit"
      :sources="[
        'https://www.youtube.com/watch?v=qZKEbfHY_t0&t=12s'
      ]"
    />
  </div>
</template>

<script setup>
import FsLightbox from 'fslightbox-vue/v3'
import AtomLogo from "@/components/Atoms/Logo";

import { ref } from 'vue'

const fsLightboxRef = ref('')
const toggler = ref(false)

const onOpenVideo = () => {
  console.log('New: toggler', toggler.value)
  toggler.value = !toggler.value
  console.log('New: toggler', toggler.value)
  console.log('fsLightboxRef', fsLightboxRef.value)
}

const onOpenFsLightbox = () => {
  console.log('onOpenFsLightbox')
}
const onShow = () => {
  console.log('onShow')
}
const onInit = () => {
  console.log('onInit')
}
</script>
