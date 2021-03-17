import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Message = () => {
  return (
    <div>
      <p>{this.props.message.name}</p>
      <p>{this.props.message.created_at}</p>
      <p>{this.props.message.content}</p>
    </div>
    );
  }

const mapStateToProps = (state) => {
  return { messages: state.messages };
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);
