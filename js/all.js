var wrap = new Vue({
    el: '#wrap',
    data: {
        todos: [],
        newTodo: ''
    },
    methods: {
        addTodo: function (todo) {
            this.todos.push({ content: todo, completed: false, show: true })
        },
        removeTodo: function (todo) {
            this.todos.splice(this.todos.indexOf(todo), 1)
        },
        finishTodoAll: function () {
            let todosLen = this.todos.length;
            for (let i = 0; i < todosLen; i++) {
                this.todos[i].completed = true;
            }
        },
        cancelTodoAll: function () {
            let todosLen = this.todos.length;
            for (let i = 0; i < todosLen; i++) {
                this.todos[i].completed = false;
            }
        },
        showTodoAll: function () {
            document.querySelectorAll('#todoList>li').forEach(function (event) {
                event.style.display = '';
            });
        },
        showFinishTodoAll: function () {
            document.querySelectorAll('#todoList>li').forEach(function (event) {
                event.style.display = 'none';
            });
            document.querySelectorAll('.active').forEach(function (event) {
                event.style.display = '';
            });
        },
        hideTodoAll: function () {
            document.querySelectorAll('#todoList>li').forEach(function (event) {
                event.style.display = '';
            });
            document.querySelectorAll('.active').forEach(function (event) {
                event.style.display = 'none';
            });
        },
        finishTodo: function (todo) {
            todo.show = false;
            todo.completed = true;
        },
        TodoDelectAll: function () {
            if (confirm('你確定要執行這個動作?')) {
                let todosLen = this.todos.length;
                this.todos.splice(0, todosLen)
            }
        }
    }
});