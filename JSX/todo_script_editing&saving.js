
// seperate the static content from the content which is dynamically rendered
var Todo = React.createClass({

	getInitialState: function(){
		return {editing:false}
	},

	edit: function(){
		alert('editing the todo');
		this.setState({editing:true});
	},

	remove: function(){
		this.props.onRemove(this.props.index);

	},
	save: function(){
		var editedVal = this.refs.newValue.value;
		//alert('new todo ' + editedVal + 'added');
		console.log(this);
		this.props.onChange(editedVal,this.props.index);
		this.setState({editing:false});
	},
	todoDisplay: function(){
		return( // how awesome is this? I am creating html in a js func and rendering it in html again
				
				<li className="todo">
				 	<span onClick={this.edit}>
				 	{this.props.children}
				 	</span>				 	
				 	<button onClick={this.remove} className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"/>				 	
				</li>
				
			);
	},

	todoForm: function(){ // this is an editable form
		return( // how awesome is this? I am creating html in a js func and rendering it in html again
				
				<li className="todo">
				 	<span>
				 	<input type="text" ref="newValue" placeholder="Edit Todo" defaultValue = {this.props.children}/>
				 	</span>
				 	<button onClick={this.save} className="btn btn-default btn-sm glyphicon glyphicon-saved remove pull-right"/>
				</li>
				
			);
	},



	render: function () {
		if (this.state.editing) {
			return this.todoForm();
		}else{
			return this.todoDisplay();
		}
	}
});

//create a new component called TodoList
var TodoList = React.createClass({

	getInitialState: function(){
		return{	
			todos: ['todo1', 'todo2', 'todo3']
		};
	},

	add: function(){
		var arr = this.state.todos;
		var newTodo = this.refs.newTodo.value;
		if(typeof newTodo !== "undefined")
			arr.push(newTodo);
		this.setState({todos: arr});
	},

	remove: function(i){
		var arr = this.state.todos;
		arr.splice(i,1); // 'i' is the index of the element to be removed
		this.setState({todos: arr});

	},

	update: function(newValue, i){
		var arr = this.state.todos; // current list of todos
		arr[i] = newValue;
		this.setState({todos: arr});
	},

	eachTodo: function(todo, i){
		return <Todo key={i} index={i} onChange={this.update}
						onRemove={this.remove} > 
					{todo}
				</Todo>
	},

	render: function(){
		return(
		<div>
			<h1> React Todo App </h1>
			<div className = "form-inline">
				<div className="form-group">
					<input ref="newTodo" className="form-control" placeholder="Add Todo" />
					<button onClick={this.add} className="btn btn-default btn-sm">+</button>
				</div>

			</div>
		<ul> 
			{this.state.todos.map(this.eachTodo)}
		</ul>

	</div> 
	);
	}
});

ReactDOM.render(<TodoList />
	, document.getElementById('todo'));