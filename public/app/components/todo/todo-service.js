function TodoService() {
	// A local copy of your todos
	var todoList = [];

	function logError(err) {
		console.error("UMM SOMETHING BROKE: ", err);
	}

	this.getTodos = function (draw) {
		console.log("yo");
		// You probably don't need to change anything in this function.....
		$.get("/api/todos")
			.then((todos) => {
				todoList = todos // <-- WHY IS THIS IMPORTANT????
				draw(todoList) // <-- WHERE DOES THIS DRAW FUNCTION COME FROM???
			})
			.catch(logError)
	}

	this.addTodo = function (todo, getTodos) {
		// WHAT IS THIS FOR???
		$.post("/api/todos", todo)
			.then(getTodos) // <-- DO NOT CHANGE THIS IT WORKS BUT DO YOU KNOW WHY?
			.catch(logError);
	}

	this.toggleTodoStatus = function (todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		var todo = {};
		//STEP 1: Find the todo by its id **HINT** todoList
		var todoFinder = todoList.find(todo => todo._id == todoId)
		$.get("/api/todos").then((todo) => {
			todoList = todo
			draw(todoList)

		})

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: "PUT",
			contentType: "application/json",
			url: "/api/todos/" + todoId,
			data: todo
		})
			.then((message) => {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				getTodos() // <-- LEAVE ME ALONE I WORK LIKE THIS
			})
			.fail(logError) // BECAUSE AJAX IS A UNIQUE SNOWFLAKE AND HAS TO BE DIFFERENT YOU CANT USE .catch
	}

	this.removeTodo = function (todoId, getTodos) {
		console.log(todoId);
		$.ajax({
			contentType: "application/json",
			method: "DELETE",
			url: "/api/todos/" + todoId
		})
			.then(getTodos)
			.fail(logError)
	}



	// I KNOW LOTS OF CODE RIGHT

}
