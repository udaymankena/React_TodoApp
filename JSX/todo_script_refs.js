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
		alert('new todo' + editedVal + 'added');
		this.setState({editing:false});
	},
	todoDisplay: function(){
		return( // how awesome is this? I am creating html in a js func and rendering it in html again
				
				<li className="todo">
				 	<span onClick={this.edit}>
				 	{this.props.children}
				 	</span>
				 	<span onClick={this.remove}>
				 	<button className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right"/>
				 	</span>
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

ReactDOM.render(
	<div>
			<h1> React Todo App </h1>
			<div className = "form-inline">
				<div className="form-group">
					<input className="form-control" placeholder="Add Todo" />
					<button className="btn btn-default btn-sm">+</button>
				</div>

			</div>
	
			<Todo> Todo 1</Todo> 
			<Todo> Todo 2</Todo>
			<Todo> Todo 3</Todo> 

	</div> , document.getElementById('todo'));