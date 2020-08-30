import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';

function Post({profilePic, image, username,timestamp}) {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic} className='post__avata'></Avatar>
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()</p>
                </div>
            </div>
        </div>
    )
}

export default Post
