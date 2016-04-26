var HelloWorld = React.createClass({
	displayName: "HelloWorld",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h1",
				null,
				"Hello World!"
			)
		);
	}
});

ReactDOM.render(React.createElement(HelloWorld, null), document.body); //document.body is the mounting area