import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 6: 00 PM"
        text="Nice blog post!!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 3: 00"
        text="It is just awesome!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Karma"
        timeAgo="Today at 6: 00"
        text="Great Post!!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
