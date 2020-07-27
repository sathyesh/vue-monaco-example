<template>
  <div id="app">
    <HelloWorld  msg="Welcome to Monaco Example App"/>
    <MonacoEditor
      width="800"
      height="500"
      theme="vs-light"
      language="javascript"
      :options="options"
      @change="onChange"
      class="monaco-edit"
    ></MonacoEditor>
  </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    MonacoEditor,
  },
  data() {
    return {
      options: {
        // Monaco Editor Options
      },
    };
  },
  methods: {
    onChange(value) {
      console.log(value);
    },
  },
};
</script>

<style>

:root{
  --primary-text-color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--primary-text-color);
  margin-top: 60px;
}

h1{
  text-align: center;
}

.monaco-editor{
  text-align: left;
  border: 0.5px solid var(--primary-text-color);
}
</style>
