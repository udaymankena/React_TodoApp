var Todo = React.createClass({

	edit: function(){
		alert('editing the todo')
	},

	remove: function(){
		alert('removing the todo')
	},

	render: function () {
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
	}
});

ReactDOM.render(
	<div>
			<h1> This is a todo </h1>
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