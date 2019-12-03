import React from 'react';
import ReactDOM from 'react-dom';


let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{props.text}</div>;
const MessageButton = (props) => <button onClick={handleClick}>Norm</button>;
const MessageField = (props) => {
   return props.messages.map(message => <MessageComponent text={ message } />);
};

ReactDOM.render(
   <div>
      <MessageField messages={ messages } />
      <MessageButton/>
   </div>,
   document.getElementById('root'),
);
const handleClick = () => {
   
   messages.push('Norm');
   ReactDOM.render();
   };
   