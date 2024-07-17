import React from 'react'
import "./post.scss"
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from '@mui/material';

function Post({post}) {
    const liked =true;
  return (
    <div className='post'>
        <div className='container'>
        <div className='user'>
            <div className='userInfo'>
                <img src={post.profilePic} alt=""/>
                <div className='details'>
                    <Link to={`/profile/${post.userId}`} style={{textDecoration:"none", color:"inherit", cursor:"pointer",fontWeight:"500"}}>
                        <span>{post.name}</span>
                    </Link>
                    <span className='date'>1 min ago</span>
                </div>
            </div>
            <MoreHorizOutlinedIcon className='icon'/>
           
        </div>
        <div className='content'>
            <p>{post.desc}</p>
            <img src= {post.img} alt=""/>
        </div>
        <div className='info'>
            <div className='item'>
                {liked ?<FavoriteOutlinedIcon/> :<FavoriteBorderOutlinedIcon/>}
                12 Likes
            </div>
            <div className='item'>
                <SmsOutlinedIcon/>
                12 Comments
            </div>
            <div className='item'>
                <ShareOutlinedIcon/>
                Share
            </div>
        </div>
        </div>
    </div>
  )
}

export default Post