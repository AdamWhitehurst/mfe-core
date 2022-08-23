<template>
  <div id="sidebar"></div>
  <Other></Other>
</template>

<script>
import { Sidebar, intoVue3 } from "@vasion/sidebar";
export default {
  name: "App",
  components: {
    Other: intoVue3(Sidebar, "sidebar"),
  },
};
</script>

<style></style>
