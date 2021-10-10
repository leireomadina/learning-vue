<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goal.isGoalVisible">{{ goal.text }}</h3>
  <!-- <h3 v-if="isGoalVisible">{{ goal }}</h3> -->
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';

export default {
  setup() {
    // config 1: refs
    /*
    const goal = ref('Learn Vue');
    let isGoalVisible = ref(true);
    function toggleGoal() {
      isGoalVisible.value = !isGoalVisible.value;
    }

    return {
      goal, isGoalVisible, toggleGoal
    };
    */

    // config 2: reactive object
    const goal = reactive({
      text: 'Lear Vue',
      isGoalVisible: true
    });

    function toggleGoal() {
      goal.isGoalVisible = !goal.isGoalVisible;
    }

    return {
      goal,
      toggleGoal
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
.active {
  display: none;
}
</style>
