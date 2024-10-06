import React from 'react'

const Feed = () => {
  return (
    <div className="feed">
        <StoryReel />
        <MessageSender />
        {/* {
            posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))      
        } */}
    </div> 
  )
}

export default Feed