<template>
  <div class="collapsible">
    <button @click="isOpen = !isOpen">{{ title }}</button>
    <div v-show="isOpen" class="content">
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
