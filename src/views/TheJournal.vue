<script lang="ts">
import {defineComponent} from 'vue'
import TheSidebar from "@/components/TheSidebar.vue";
import JournalDaily from "@/components/JournalDaily.vue";
import AppModal from "@/components/AppModal.vue";

export default defineComponent({
  name: "TheJournal",
  components: {AppModal, JournalDaily, TheSidebar}
})
</script>

<template lang="pug">
main.flex-1.items-stretch.min-h-0.flex
  TheSidebar
  JournalDaily
  //AppModal(id="test-modal")
  //  template(#button)
  //    | test modal
  //  template(#header)
  //    | header
  //  template(#body)
  //    | body
  //  template(#footer)
  //    | footer
</template>

<style scoped>

</style>