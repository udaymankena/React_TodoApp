"use strict";

// seperate the static content from the content which is dynamically rendered
var Todo = React.createClass({
	displayName: "Todo",


	getInitialState: function getInitialState() {
		return { editing: false };
	},

	edit: function edit() {
		alert('editing the todo');
		this.setState({ editing: true });
	},

	remove: function remove() {
		this.props.onRemove(this.props.index);
	},
	save: function save() {
		var editedVal = this.refs.newValue.value;
		//alert('new todo ' + editedVal + 'added');
		console.log(this);
		this.props.onChange(editedVal, this.props.index);
		this.setState({ editing: false });
	},
	todoDisplay: function todoDisplay() {
		return (// how awesome is this? I am creating html in a js func and rendering it in html again

			React.createElement(
				"li",
				{ className: "todo" },
				React.createElement(
					"span",
					{ onClick: this.edit },
					this.props.children
				),
				React.createElement("button", { onClick: this.remove, className: "btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right" })
			)
		);
	},

	todoForm: function todoForm() {
		// this is an editable form
		return (// how awesome is this? I am creating html in a js func and rendering it in html again

			React.createElement(
				"li",
				{ className: "todo" },
				React.createElement(
					"span",
					null,
					React.createElement("input", { type: "text", ref: "newValue", placeholder: "Edit Todo", defaultValue: this.props.children })
				),
				React.createElement("button", { onClick: this.save, className: "btn btn-default btn-sm glyphicon glyphicon-saved remove pull-right" })
			)
		);
	},

	render: function render() {
		if (this.state.editing) {
			return this.todoForm();
		} else {
			return this.todoDisplay();
		}
	}
});

//create a new component called TodoList
var TodoList = React.createClass({
	displayName: "TodoList",


	getInitialState: function getInitialState() {
		return {
			todos: ['todo1', 'todo2', 'todo3'],
			text: "",
			placeholder: "Add Todo",
			input_style: "form-control"
		};
	},

	add: function add() {
		var arr = this.state.todos;
		var newTodo = this.refs.newTodo.value;
		if (newTodo) {
			arr.push(newTodo);
			this.setState({ todos: arr, text: null, placeholder: "Add a Todo", input_style: "form-control" });
		} else {
			this.setState({ placeholder: "Please add a Todo", input_style: "form-control red" });
		}
	},

	onChange: function onChange(e) {
		this.setState({ text: e.target.value });
	},

	remove: function remove(i) {
		var arr = this.state.todos;
		arr.splice(i, 1); // 'i' is the index of the element to be removed
		this.setState({ todos: arr });
	},

	update: function update(newValue, i) {
		var arr = this.state.todos; // current list of todos
		arr[i] = newValue;
		this.setState({ todos: arr });
	},

	eachTodo: function eachTodo(todo, i) {
		return React.createElement(
			Todo,
			{ key: i, index: i, onChange: this.update,
				onRemove: this.remove },
			todo
		);
	},

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				" React Todo App "
			),
			React.createElement(
				"div",
				{ className: "form-inline" },
				React.createElement(
					"div",
					{ className: "form-group" },
					React.createElement("input", { ref: "newTodo", className: this.state.input_style, placeholder: this.state.placeholder,
						value: this.state.text, onChange: this.onChange }),
					React.createElement(
						"button",
						{ onClick: this.add, className: "btn btn-default btn-sm" },
						"+"
					)
				)
			),
			React.createElement(
				"ul",
				null,
				this.state.todos.map(this.eachTodo)
			)
		);
	}
});

ReactDOM.render(React.createElement(TodoList, null), document.getElementById('todo'));