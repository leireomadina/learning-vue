<template>
<!-- this component is a wrapper that will hold html content outside of it -->
  <div>
    <header v-if="$slots.header">
      <!-- named slot -->
      <slot name="header">
        <!-- <h2>The Default</h2> -->
      </slot>
    </header>
    <!-- default slot -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$slots);
    console.log(this.$slots.header);
		// console.log(this.$slots.default);
  }
}
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>