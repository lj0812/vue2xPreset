<%_ if (!rootOptions.router) { _%>
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <%_ if (!rootOptions.bare) { _%>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <%_ } else { _%>
    <h1>Welcome to Your Vue.js App</h1>
    <%_ } _%>
  </div>
</template>
  <%_ if (!rootOptions.bare) { _%>

<script>
export default {
  name: 'app',
  components: {

  }
}
</script>
  <%_ } _%>
<%_ } else { _%>
<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<%_ } _%>

<style<%-
  rootOptions.cssPreprocessor
    ? ` lang="${
        rootOptions.cssPreprocessor.includes('sass')
          ? 'scss'
          : rootOptions.cssPreprocessor
      }"`
    : ``
%>>

</style>
