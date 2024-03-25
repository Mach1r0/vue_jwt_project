<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <router-link to="/" class="navbar-brand">Home</router-link>

    <div>
      <ul class="navbar-nav mr-auto">
        <li v-if="!auth" class="nav-item active">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>

        <li v-if="!auth" class="nav-item active">
          <router-link to="/register" class="nav-link">Register</router-link>
        </li>

        <li v-if="auth" class="nav-item active">
          <a @click.prevent="logout" class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: "AppNav",
  setup() {
    const store = useStore();

    const auth = computed(() => store.state.authenticated);

    const logout = async () => {
      await fetch('http://127.0.0.1:8000/api/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      store.dispatch('setAuth', false); // Assuming you have an action to update authentication status
    };

    return {
      auth,
      logout
    };
  }
};
</script>

<style scoped>

</style>
