<template>
    <Layout>
        <router-view />
    </Layout>
</template>

<script>
import Layout from '../layouts/Main.vue'

export default {
  name: 'Home',
  components: {
    Layout
  }
}
</script>
