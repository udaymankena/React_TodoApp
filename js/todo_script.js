'use strict';

var Todo = React.createClass({
	displayName: 'Todo',


	getInitialState: function getInitialState() {
		return { editing: false };
	},

	edit: function edit() {
		alert('editing the todo');
		this.setState({ editing: true });
	},

	remove: function remove() {
		alert('removing the todo');
	},
	save: function save() {
		var editedVal = this.refs.newValue.value;
		alert('new todo' + editedVal + 'added');
		this.setState({ editing: false });
	},
	todoDisplay: function todoDisplay() {
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
	},

	todoForm: function todoForm() {
		// this is an editable form
		return (// how awesome is this? I am creating html in a js func and rendering it in html again

			React.createElement(
				'li',
				{ className: 'todo' },
				React.createElement(
					'span',
					null,
					React.createElement('input', { type: 'text', ref: 'newValue', placeholder: 'Edit Todo', defaultValue: this.props.children })
				),
				React.createElement('button', { onClick: this.save, className: 'btn btn-default btn-sm glyphicon glyphicon-saved remove pull-right' })
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

ReactDOM.render(React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		' React Todo App '
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