import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';
import chatMessages from '../data/messages.json';
import ChatList from './ChatList.js';
import TimeStamp from './TimeStamp.js';

const ChatEntry = (props) => {
  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp
          timestamp = {props.timeStamp}/>
          </p>
        <button className="like" onClick={() => {props.changeLiked(props.id);}}>🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  changeLiked: PropTypes.func.isRequired,
};

export default ChatEntry;
