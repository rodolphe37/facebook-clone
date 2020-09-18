import React from 'react';
import MessageSender from '../messageSender/MessageSender';
import Post from '../post/Post';
import StoryReel from '../storyReel/StoryReel';
import './feed.css';

function Feed() {
  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />
      <Post
        profilePic="https://avatars3.githubusercontent.com/u/50537655?s=460&u=d37301e7f3d4a819b2be2da2460a1fba3b3d8d7a&v=4"
        message='Wow this works!!!'
        timestamp='This is a timestamp'
        username='rodolphe37'
        image="http://lorempixel.com/output/technics-q-c-640-480-2.jpg"
      />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
