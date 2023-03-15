import React from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toDoName: "",
			editedName: "",
			todoList: [
				{
					name: "Kirgiz",
					id: Math.random(),
					editable: false,
				},
				{
					name: "Margar",
					id: Math.random(),
					editable: false,
				},
			],
			editable: false,
		};
	}
	onToDoChange = (e) => {
		this.setState({
			toDoName: e.target.value,
		});
	};

	btnClicked = () => {
		this.setState({
			todoList: [...this.state.todoList, { name: this.state.toDoName, id: Math.random(), editable : false }],
			toDoName: "",
		});
	};

	btnDel = (id) => {
		this.setState({
			todoList: this.state.todoList.filter((item) => id != item.id),
		});
	}

	btnEdit = (todo) => {
		this.setState({
			todoList: [...this.state.todoList, 
			{
				name: todo.name,
				id: Math.random(),
				editable: true,
			}]
		});
		
	}
	
	saveItem = (todo) => {
		this.state.todoList.map((item) => {
			if(todo.id == item.id){
				this.setState({
					todoList: [...this.state.todoList, 
					{ name: this.state.editedName, id: todo.id, editable : false }],
					editedName: "",
				});
			}
		});
		
		
	}

	changeitem = (e) => {
		this.setState({
			editedName: e.target.value,
		});
	}

	render() {
		return (
			<div>
				<Header
					toDoName={this.state.toDoName}
					onToDoChange={this.onToDoChange}
					onAddBtnClick={this.btnClicked}
				/>
				<ToDoList toDoList={this.state.todoList} changeitem={this.changeitem} saveItem={this.saveItem} onEditBtnClick={this.btnEdit} onDelBtnClick={this.btnDel} />
			</div>
		);
	}
}
