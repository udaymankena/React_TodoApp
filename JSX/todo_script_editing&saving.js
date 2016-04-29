
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
		alert('removing the todo')
	},
	save: function(){
		var editedVal = this.refs.newValue.value;
		alert('new todo ' + editedVal + 'added');
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

	update: function(newValue, i){
		var arr = this.state.todos; // current list of todos
		arr[i] = newValue;
		this.setState({todo: arr});
	},

	render: function(){
		return(
		<div>
			<h1> React Todo App </h1>
			<div className = "form-inline">
				<div className="form-group">
					<input className="form-control" placeholder="Add Todo" />
					<button className="btn btn-default btn-sm">+</button>
				</div>

			</div>
		<ul> 
			{this.state.todos.map(function(todo){
				return <Todo> {todo}</Todo>
			})}
		</ul>

	</div> 
	);
	}
});

ReactDOM.render(<TodoList />
	, document.getElementById('todo'));