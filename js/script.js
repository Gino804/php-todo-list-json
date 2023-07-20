const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      axios
        .post(
          "http://localhost/php-todo-list-json/api/",
          {
            task: this.newTask,
          },
          config
        )
        .then((res) => {
          this.tasks.push(res.data);
          this.newTask = "";
        });
    },
  },
  created() {
    axios.get("http://localhost/php-todo-list-json/api/").then((res) => {
      this.tasks = res.data;
    });
  },
});

app.mount("#root");
