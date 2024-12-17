<script lang="ts">
import {defineComponent} from 'vue'
import AppModal from "@/components/AppModal.vue";

export default defineComponent({
  name: "TestModal",
  components: {AppModal}
})
</script>

<template lang="pug">
AppModal(id="test-modal")
  template(#header)
    | header
  template(#body)
    | body
</template>

<style scoped>

</style>