import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>
            <Post
            profilePic='https://www.facebook.com/photo/?fbid=1649489501737555&set=pob.100000295643745'
            message='Wow it really works!'
            timestamp='This is a timestamp'
            username='kranks40'
            image='https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-pure-color-watercolor-graffiti-gradient-background-board-design-board-design-image_66713.jpg'
            />
            <Post
             profilePic='https://scontent.fgnd1-1.fna.fbcdn.net/v/t31.0-8/920962_597903726887799_2014978186_o.jpg?_nc_cat=106&_nc_sid=19026a&_nc_ohc=eV5AfO72jJIAX-ww8ny&_nc_ht=scontent.fgnd1-1.fna&oh=927557801eb0677b5eff37db94b0b667&oe=5F6F6C21'
             message='Wow it really works!'
             timestamp='This is a timestamp'
             username='Carrema'
             image='https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            />
            <Post
             profilePic='https://scontent.fgnd1-1.fna.fbcdn.net/v/t1.0-9/23132038_10214581524394072_6238295006508071286_n.jpg?_nc_cat=101&_nc_sid=8bfeb9&_nc_ohc=XBPUF2UDQLkAX-V1lNp&_nc_ht=scontent.fgnd1-1.fna&oh=30cdafe5ad4122f40aa4768ff9cd33fa&oe=5F725962'
             message='Wow it really works!'
             timestamp='This is a timestamp'
             username='Mellia'
             image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPXL1uGFM9rf56rhj4Ff7_47Aa5Ux88qgrs97R6rZ2TA&usqp=CAU&ec=45695923'
            />
        </div>
    )
}

export default Feed
