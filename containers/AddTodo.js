import React from "react";
import { connect } from "react-redux";
import { addTodo, clearInput } from "../actions";
import AddTodoInput from "../components/AddTodoInput";
import AddTodoInputState from "../components/AddTodoInputState";

const mapStateToProps = state => ({
  textInputAdd: state.inputAdd
});

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(addTodo(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodoInputState);

//Para componente sin estado

// const mapStateToProps = state => ({
//   textInputAdd: state.inputAdd
// })

// export default connect(
//   mapStateToProps
// )(AddTodoInput)
