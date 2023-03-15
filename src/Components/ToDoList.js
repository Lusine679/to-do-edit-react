import React from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends React.Component {
	constructor(props) {
		super(props);
	}

	btnEdit(indexD) {
		this.setState({
			todoList: this.state.todoList.map((item, index) => {
				if (indexD === index) {
					return {
						...item,
						editable: true,
					};
				}
				return item;
			}),
		});
	}

	render() {
		return (
			<>
				{this.props.toDoList.map((item, index) => {
					return (
						<ToDoItem key={item.id} toDo={item} changeitem={this.props.changeitem} saveItem={this.props.saveItem} onEditClick={this.props.onEditBtnClick} onDeleteClick={this.props.onDelBtnClick}/>
					);
				})}
			</>
		);
	}
}
