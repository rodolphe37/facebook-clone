import React from 'react';
import Story from '../story/Story';
import './storyReel.css'

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="http://lorempixel.com/output/nightlife-h-c-490-804-3.jpg"
        profileSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        title="John Smith"
      />
      <Story
        image="http://lorempixel.com/output/animals-h-c-490-804-8.jpg"
        profileSrc="https://images-na.ssl-images-amazon.com/images/M/MV5BNDgwNzA4NDYzM15BMl5BanBnXkFtZTgwNTQ4MTM2ODE@._V1_UX172_CR0,0,172,256_AL_.jpg"
        title="Pamela Rose"
      />
      <Story
        image="http://lorempixel.com/output/technics-h-c-490-804-1.jpg"
        profileSrc="https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
        title="Ludmila Velasquez"
      />
      <Story
        image="http://lorempixel.com/output/city-h-c-490-804-3.jpg"
        profileSrc="https://uifaces.co/our-content/donated/VAemDZAQ.jpg"
        title="Tim Oburn"
      />
      <Story
        image="http://lorempixel.com/output/technics-h-c-490-804-6.jpg"
        profileSrc="https://images-na.ssl-images-amazon.com/images/M/MV5BMjExOTY3NzExM15BMl5BanBnXkFtZTgwOTg1OTAzMTE@._V1_UX172_CR0,0,172,256_AL_.jpg"
        title="Randal nutton"
      />
    </div>
  )
}

export default StoryReel;
