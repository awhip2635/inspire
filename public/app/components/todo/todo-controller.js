function TodoController() {
	var todoService = new TodoService
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService();

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw);
	}

	function draw(todos) {
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		var template = "<ul>";
		for (var i = 0; i < todos.length; i++) {
			todo = todos[i]
			var checked

			// 				template += `<div><label class="custom-control custom-checkbox">
			//   <input type="checkbox" class="custom-control-input">
			//   <span class="custom-control-indicator"></span>
			//   <span class="custom-control-description">Check this custom checkbox</span>
			// </label><input type=“checkbox” name=“taskCheck” checked=“checked” value=“Task” onchange=“app.controllers.todoController.toggleTodoStatus(‘${todo._id}‘)“>${todo.note}: Completed? ${todo.completed}</input> </div>
			//             <button type=“button” onclick=“app.controllers.todoController.removeTodo(‘${todo._id}‘)“>Delete</button>`
			template += `
				${todo.note}
				<label class="custom-control custom-checkbox">
  					<input type="checkbox" class="custom-control-input" checked="checked"  onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')">
  						<span class="custom-control-indicator"></span>
  							<span class="custom-control-description"></span>
				</label>
					<button class="delete-button" type="button" onclick="app.controllers.todoController.removeTodo('${todo._id}')">Delete</button><br>
				`

		}
		//DONT FORGET TO LOOP
		template += "</ul>"
		document.getElementById("todo").innerHTML = template;
	}

	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		console.log(e.target.todo.value);
		var form = e.target.todo.value
		var todo = {
			note: form
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos);
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos);
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		console.log('yoooo');
		todoService.removeTodo(todoId, getTodos);
		
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	getTodos();
}
