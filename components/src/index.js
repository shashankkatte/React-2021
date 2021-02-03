import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Samuel" timeAgo="Today at 15.34 PM" avatar = {faker.image.image()} comment="Nice blog" />
      <CommentDetail author="Tom" timeAgo="Today at 5.34 AM" avatar = {faker.image.image()} comment="good opinion"/>
      <CommentDetail author="SamRajuel" timeAgo="Today at 13.34 PM" avatar = {faker.image.image()} comment="where's the proof?" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
