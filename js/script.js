const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask);
      this.newTask = "";
    },
  },
  created() {
    axios.get("http://localhost/php-todo-list-json/api/").then((res) => {
      this.tasks = res.data;
    });
  },
});

app.mount("#root");
