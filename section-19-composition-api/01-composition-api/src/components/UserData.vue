<template>
  <div>
    <h2>{{ userName }}</h2>
    <h2>{{ userAge }}</h2>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue';

export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const uName = computed(function() {
      return props.firstName + ' ' + props.lastName;
    });

    console.log(context);
    // context.emit('save-data', 1); // this.$emit('save-data', 1)
    
    //all available life hooks with the Composition API:
    onBeforeMount(function() {
      console.log('onBeforeMount');
    });
    onMounted(function() {
      console.log('onMounted');
    });
    onBeforeUpdate(function() {
      console.log('onBeforeUpdate');
    });
    onUpdated(function() {
      console.log('onUpdated');
    });
    onBeforeUnmount(function() {
      console.log('onBeforeUnmount');
    });
    onUnmounted(function() {
      console.log('onUnmounted');
    });

    const userAge = inject('userAge');

    return {
      userName: uName,
      userAge
    };
  }
  // computed: {
  //   userName() {
  //     return this.firstName + ' ' + this.lastName;
  //   }
  // }
};
</script>
