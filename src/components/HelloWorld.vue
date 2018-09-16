<template >
  <div>
    <el-button type="primary" @click="clickFn">跳转</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "wang",
      lastName: "fei",
      count: 0,
      show: true
    };
  },
  computed: {},
  //监听
  watch: {},
  methods: {
    clickFn: function() {
      this.$router.push({ path: "/loginCenter" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
