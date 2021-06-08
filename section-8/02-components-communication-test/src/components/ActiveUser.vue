<template>
  <section>
    <h2>Username: {{ username }} </h2>
    <h3>Age: {{ userage }} </h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true,
      default: 'John Doe'
    },
    userage: {
      type: Number,
      required: true,
      default: 0
    }
  }
}
</script>