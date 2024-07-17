import React from 'react'
import './leftbar.scss'
//import User from '../../assest/woman.png';
import Friend from '../../assest/friend.png';
import Group from '../../assest/people.png';
import Shop from '../../assest/shop.png';
import Watch from '../../assest/video.png';
import Clock from '../../assest/clock.png';
import Event from '../../assest/event.png';
import Game from '../../assest/game-console.png';
import Gallery from '../../assest/gallery.png';
import Video from '../../assest/video-chat.png';
import Mss from '../../assest/chat.png';
import Fund from '../../assest/fund.png';
import Tut from '../../assest/video-tutorials.png';
import Courses from '../../assest/online-course.png';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
function LeftBar() {
    const { currentUser } = useContext(AuthContext);
  return (
    <div className='leftbar'>
        <div className='container'>
            <div className='menu'>
                <div className='userpf'>
                    <img className='userid' src={currentUser.profilePic} alt=""></img>
                    <span>{currentUser.name}</span>
                </div>
                <div className='userpf'>
                    <img src={Friend} alt=""></img>
                    <span>Friends</span>
                </div>
                <div className='userpf'>
                    <img src={Group} alt=""></img>
                    <span>Groups</span>
                </div>
                <div className='userpf'>
                    <img src={Shop} alt=""></img>
                    <span>Market place</span>
                </div>
                <div className='userpf'>
                    <img src={Watch} alt=""></img>
                    <span>Watch</span>
                </div>
                <div className='userpf'>
                    <img src={Clock} alt=""></img>
                    <span>Memories</span>
                </div>
            </div>
            <hr></hr>
            <div className='menu'>
            <h1>Your shortcuts</h1>
                <div className='userpf'>
                    <img src={Event} alt=""></img>
                    <span>Events</span>
                </div>
                <div className='userpf'>
                    <img src={Game} alt=""></img>
                    <span>Gaming</span>
                </div>
                <div className='userpf'>
                    <img src={Gallery} alt=""></img>
                    <span>Gallery</span>
                </div>
                <div className='userpf'>
                    <img src={Video} alt=""></img>
                    <span>Videos</span>
                </div>
                <div className='userpf'>
                    <img src={Mss} alt=""></img>
                    <span>Messages</span>
                </div>
            </div>
            <hr></hr>
            <div className='menu'>
                <h1>Others</h1>
                <div className='userpf'>
                    <img src={Fund} alt=""></img>
                    <span>Fundaries</span>
                </div>
                <div className='userpf'>
                    <img src={Tut} alt=""></img>
                    <span>Tutorials</span>
                </div>
                <div className='userpf'>
                    <img src={Courses} alt=""></img>
                    <span>Courses</span>
                </div>
                <div className='userpf'>
                    <img src={Fund} alt=""></img>
                    <span>Fundaries</span>
                </div>
                <div className='userpf'>
                    <img src={Tut} alt=""></img>
                    <span>Tutorials</span>
                </div>
                <div className='userpf'>
                    <img src={Courses} alt=""></img>
                    <span>Courses</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftBar