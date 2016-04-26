'use strict';

var Todo = React.createClass({
	displayName: 'Todo',


	edit: function edit() {
		alert('editing the todo');
	},

	remove: function remove() {
		alert('removing the todo');
	},

	render: function render() {
		return (// how awesome is this? I am creating html in a js func and rendering it in html again

			React.createElement(
				'li',
				{ className: 'todo' },
				React.createElement(
					'span',
					{ onClick: this.edit },
					this.props.children
				),
				React.createElement(
					'span',
					{ onClick: this.remove },
					React.createElement('button', { className: 'btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right' })
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		' This is a todo '
	),
	React.createElement(
		'div',
		{ className: 'form-inline' },
		React.createElement(
			'div',
			{ className: 'form-group' },
			React.createElement('input', { className: 'form-control', placeholder: 'Add Todo' }),
			React.createElement(
				'button',
				{ className: 'btn btn-default btn-sm' },
				'+'
			)
		)
	),
	React.createElement(
		Todo,
		null,
		' Todo 1'
	),
	React.createElement(
		Todo,
		null,
		' Todo 2'
	),
	React.createElement(
		Todo,
		null,
		' Todo 3'
	)
), document.getElementById('todo'));