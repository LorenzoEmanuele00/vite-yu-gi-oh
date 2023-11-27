<script>
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
export default {
  data() {
    return {
    }
  },
  components: {
    AppHeader,
    AppContent,
  }
}
</script>

<template>
  <AppHeader />
  <AppContent />
</template>

<style lang="scss">
img {
  max-width: 100%;
}
</style>
