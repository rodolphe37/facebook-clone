import React from 'react';
import MessageSender from '../messageSender/MessageSender';
import StoryReel from '../storyReel/StoryReel';
import './feed.css';

function Feed() {
  return (
    <div className="feed">
      {/* StoryReel */}
      <StoryReel />
      {/* MessageSender */}
      <MessageSender />
    </div>
  )
}

export default Feed
