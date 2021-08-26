<template>
  <!-- Header nav -->
  <article class="container mx-auto my-3 md:flex justify-between items-center">
    <!-- Left -->
    <section class="p-2 md:flex items-center">
      <a href="#" class="block mb-2 md:mr-6">
        <AtomLogo class="mx-auto"/>
      </a>
      <a href="#" class="nav-item active md:mb-0 md:mr-4">Cover page</a>
      <a href="#" class="nav-item md:mb-0 md:mr-4">Home</a>
      <a href="#" class="nav-item md:mb-0 md:mr-4">Series</a>
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
</template>

<script>
import AtomLogo from "@/components/Atoms/Logo";

export default {
  components: {
    AtomLogo
  }
}
</script>
