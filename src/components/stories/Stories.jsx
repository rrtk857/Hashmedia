import React, { useContext } from 'react'
import "./stories.scss"
import { AuthContext } from '../../context/authContext';

export const Stories = () => {
    const {currentUser} = useContext(AuthContext);
    const stories = [
        {
            id:1,
            name: "John Doe",
            img:"https://th.bing.com/th/id/OIG.FZdX6eTulmSw9Surwy4V"
        },
        {
            id:2,
            name: "John Doe",
            img:"https://th.bing.com/th/id/OIG.FZdX6eTulmSw9Surwy4V"
        },
        {
            id:3,
            name: "John Doe",
            img:"https://th.bing.com/th/id/OIG.FZdX6eTulmSw9Surwy4V"
        },
        {
            id:4,
            name: "John Doe",
            img:"https://th.bing.com/th/id/OIG.FZdX6eTulmSw9Surwy4V"
        }
    ];
  return (
    
    <div className="stories">
        <div className='story'>
                <img src={currentUser.profilePic} alt=""/>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story=>(
            <div className='story' key={story.id}>
                <img src={story.img} alt=""/>
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}
export default Stories