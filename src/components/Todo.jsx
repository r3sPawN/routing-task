import React, { Component } from "react";

function Todo(props) {
  return (
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
  );
}

export default Todo;
