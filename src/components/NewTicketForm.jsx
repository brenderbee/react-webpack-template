import React from 'react';
import { v4 } from 'uuid';
import Moment from 'moment';
import { connect } from 'react-redux';

function NewTicketForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return(
    <div>
      <style jsx>{`
      form {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 30%;
        margin: 10px auto;
      }
      input {
        margin-bottom: 10px;
        border-radius: 5px;
        height: 30px;
        background-color: black;
        opacity: 0.5;
        color: white;
      }
      textarea {
        height: 10vw;
        background-color: black;
        opacity: 0.5;
        color: white;
      }
      button {
        width: 50%;
        margin: 10px auto;
        background-color: #5788d1;
      }
      `}</style>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

export default connect()(NewTicketForm);
