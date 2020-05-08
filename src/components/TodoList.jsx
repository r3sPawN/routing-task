import React from "react";
import "./TodoList.css";

export class TodoList extends React.Component {
  state = {
    tasks: [
      { id: 1, name: "Clean", editable: false },
      { id: 2, name: "CleanNEr", editable: false },
    ],
  };

  handleEdit = (id) => {
    const { tasks } = this.state;
    const task = tasks.find((task) => task.id === id);
    const otherTasks = tasks.map((task) =>
      task.id === id ? { ...task, editable: !task.editable } : task
    );
    this.setState({ tasks: otherTasks });
  };

  handleAddTask = () => {
    const { tasks } = this.state;
    const taskCount = tasks.length;
    tasks.push({ id: taskCount + 1, name: "", editable: true });
    this.setState({ tasks: tasks });
  };

  handleDelete = (id) => {
    const { tasks } = this.state;
    const newList = tasks.filter((element) => element.id !== id);
    this.setState({ tasks: newList });
  };

  handleOnChange = (event, id) => {
    const { tasks } = this.state;
    const task = tasks.find((task) => task.id === id);
    const otherTasks = tasks.map((task) =>
      task.id === id ? { ...task, name: event.target.value } : task
    );
    this.setState({ tasks: otherTasks });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div className="tasks-list">
        {tasks.map((props) => (
          <div key={props.id} className="task">
            <input
              type="text"
              value={props.name}
              disabled={!props.editable}
              onChange={(event) => this.handleOnChange(event, props.id)}
            ></input>
            <span onClick={() => this.handleDelete(props.id)}>delete</span>
            <span onClick={() => this.handleEdit(props.id)}>edit</span>
          </div>
        ))}
        <span className="add-button" onClick={this.handleAddTask}>
          Add new
        </span>
      </div>
    );
  }
}
