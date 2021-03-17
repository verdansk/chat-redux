import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import getMessages from '../reducers/messagesReducer';
import Message from './message';

class MessageList extends React.Component {
  componenentDidMount() {
    this.props.getMessages();
  }
  render() {
    return (
      <div>
        {this.props.messages.map((message) => {
          return <Message message={message} key={message.created_at} />;
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getMessages }, dispatch);
};

const mapStateToProps = (state) => {
  return { messages: state.messages };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
