import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
       <div className="ui container comments">
           <CommentDetail author="Samuel"/>
           <CommentDetail author="Tom"/>
           <CommentDetail author="SamRajuel"/>
       </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
