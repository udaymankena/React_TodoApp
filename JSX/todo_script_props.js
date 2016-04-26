var Todo = React.createClass({
	render: function () {
		return( // how awesome is this? I am creating html in a js func and rendering it in html again
			
			<ul> 
				<li className="todo"> {this.props.todo}</li>

			</ul>
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
	<Todo todo="Enjoy learning Reactttttt"/>
	<Todo todo="Todo2"/>
	<Todo todo="Todo3"/> </div> , document.getElementById('todo'));