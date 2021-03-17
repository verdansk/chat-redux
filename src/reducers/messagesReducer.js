const getMessage = "get-message";
export const getMessages = () => {
  const url = "https://wagon-chat.herokuapp.com/general/messages";
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      return {
        type: getMessage,
        payload: data
      };
    });
};

const setMessage = 'set-message';
export const setMessages = (message) => {
  return {
    type: setMessage,
    payload: message
  };
};

const initialMessagesState = [
  {
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  },
  {
    "author":"anonymous77",
    "content":"My name is anonymous77",
    "created_at":"2017-09-26T23:03:21.194Z"
  }
];
export const messagesReducer = (messagesState = initialMessagesState, action) => {
  switch (action.type) {
    case getMessage:
      return action.payload;
    case setMessage:
      return action.payload;
    default:
      return messagesState;
  }
};

export default messagesReducer;
