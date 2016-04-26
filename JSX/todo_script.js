var Todo = React.createClass({
	render: function () {
		return( // how awesome is this? I am creating html in a js func and rendering it in html again
			<div>
			<h1> This is a todo </h1>
			<div className = "form-inline">
				<div className="form-group">
					<input className="form-control" placeholder="Add Todo" />
					<button className="btn btn-default btn-sm">+</button>
				</div>

			</div>
			<ul> 
				<li className="todo"> Finish the intro tut on React</li>
				<li className="todo"> Get into inner details </li>

			</ul>
			</div>
			);
	}
});

ReactDOM.render(<Todo />, document.getElementById('todo'));