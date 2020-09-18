import React from 'react';
import './widgets.css'

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        title='facebook frame'
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Famanohilot%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=186337162730559"
        width="340"
        height="100%"
        style={{
          border: "none",
          overflow: "hidden"
        }} scrolling="no"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media" />
    </div>
  )
}

export default Widgets
