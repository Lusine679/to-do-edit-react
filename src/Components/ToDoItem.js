const ToDoItem = (props) => {
	const { toDo, onDeleteClick, onEditClick, saveItem, changeitem} = props;
	return (
		<div>
			{toDo.editable == true ? (
				<input defaultValue={toDo.name}  onChange={changeitem} />
			) : (
				<div>{toDo.name}</div>
			)}
   
			<button onClick={() => {onDeleteClick(toDo.id)}}>Del</button>
			{toDo.editable == false ? (
				<button onClick={() => {onEditClick(toDo)}}>Edit</button>
			) : (
				<button onClick={() => {saveItem(toDo)}}>Save</button>
			)}
			
			{/* <button onClick={this.btnEdit.bind(this, ind)}>
				{toDo.editable ? "Save" : "Edit"}
			</button> */}

		</div>
	)
}

export default ToDoItem;