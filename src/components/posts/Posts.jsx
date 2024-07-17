import Post from '../post/post'
import React from 'react'
import "./posts.scss"
function Posts() {
    const posts = [
        {
            id:1,
            name:"John Doe",
            userId:1,
            profilePic:"https://mommateen.com/wp-content/uploads/2022/07/Teenage-Profile-Picture.jpg",
            desc:"CGFVBHNJKLJKHJGFCVU vybunionunya cvybui",
            img:"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
        },
        {
            id:2,
            name:"John Doe",
            userId:2,
            profilePic:"https://mommateen.com/wp-content/uploads/2022/07/Teenage-Profile-Picture.jpg",
            desc:"My name is Himanshi Arora",
        },
        {
            id:3,
            name:"John Doe",
            userId:1,
            profilePic:"https://mommateen.com/wp-content/uploads/2022/07/Teenage-Profile-Picture.jpg",
            desc:"CGFVBHNJKLJKHJGFCVU vybunionunya cvybui",
            img:"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
        },
        {
            id:4,
            name:"John Doe",
            userId:2,
            profilePic:"https://mommateen.com/wp-content/uploads/2022/07/Teenage-Profile-Picture.jpg",
            desc:"My name is Himanshi Arora",
        },
    ]
  return (
    <div className='posts'>
        {posts.map(post=>(
           <Post post={post} key={post.id}/>
        ))}
    </div>
  )
}

export default Posts