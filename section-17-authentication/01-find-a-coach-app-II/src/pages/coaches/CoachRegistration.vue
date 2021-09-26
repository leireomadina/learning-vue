<template>
  <section>
    <base-card>
      <h2>Register as a Coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
  components: {
    CoachForm
  },   
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // redirects the user to the main page after registering and prevents him/her from going back to the register page
      this.$router.replace('/coaches');
    }
  }
}
</script>