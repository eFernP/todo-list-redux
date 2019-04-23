import React from 'react';
import { connect } from 'react-redux';
import { addTodo, clearInput } from '../actions';
import AddTodoInput from '../components/AddTodoInput';

const mapStateToProps = state => ({
  textInputAdd: state.inputAdd
})

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onSubmit: () => {
//     console.log('Llega a map dispatch ', ownProps.textInputAdd)
//     dispatch(addTodo(ownProps.input))
//     dispatch(clearInput())
//   }
// })

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(AddTodoInput)