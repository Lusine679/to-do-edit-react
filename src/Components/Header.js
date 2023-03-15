import React from "react";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<input value={this.props.toDoName} onChange={this.props.onToDoChange} />
				<button onClick={this.props.onAddBtnClick}>add</button>
			</>
		);
	}
}
