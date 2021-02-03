import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Samuel"
          timeAgo="Today at 15.34 PM"
          avatar={faker.image.image()}
          comment="Nice blog"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Tom"
          timeAgo="Today at 5.34 AM"
          avatar={faker.image.image()}
          comment="good opinion"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="SamRajuel"
          timeAgo="Today at 13.34 PM"
          avatar={faker.image.image()}
          comment="where's the proof?"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
