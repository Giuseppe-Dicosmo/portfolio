<template>
  <div id="app">
    <b-container fluid="xs">
      <b-navbar>
        <b-navbar-nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </b-navbar-nav>
      </b-navbar>
      <router-view />
    </b-container>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
