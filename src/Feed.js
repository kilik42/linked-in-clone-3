import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { doc, setDoc, addDoc } from "firebase/firestore";
import { updateDoc, serverTimestamp } from "firebase/firestore";
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import { onSnapshot } from "firebase/firestore";
function Feed() {
  const [posts, setPosts] = useState([]);
  // const [input, setInput] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  // refactoring for new firebase v. 10
  const userPosts = collection(db, 'posts');

  useEffect(() => {
  //   const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
  //     const postsData = snapshot.docs.map(doc => ({
  //         id: doc.id,
  //         data: doc.data(),
  //     }));
  //     setPosts(postsData);
  // });
  const getUserPosts = async () => {
  try{
    const querySnapshot = await getDocs(userPosts);
    const postsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data(),
  }));
  setPosts(postsData);
  console.log(posts);
} catch (e) {
  console.error("Error fetching posts: ", e);
}
 
  };

   getUserPosts();
  }, []);
  
  const sendPost = async e => {
    e.preventDefault();
    
    // refactoring for new firebase v. 10
    // Adding a new post to the 'posts' collection
  try {
    await addDoc(collection(db, 'posts'), {
      name: name,
      description: description,
      message: message,
      photoUrl: photoUrl,
      timestamp: serverTimestamp()
    });
    setMessage("");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
  
}

  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
           <CreateIcon/>
            <form >
           
                
                <input 
                value={message}
                onChange = {e => setMessage(e.target.value)}
                type="text"/>
                <button
                onClick={sendPost}
                
                type="submit">Send</button>
            </form>
        </div>

        <div className="feed__inputOptions">
            <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
            <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
            <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
            <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
        </div>
      </div>

      {/* posts */}

      {/* {posts.map(({id, data:{name, description, message, photoUrl}}) => {
        <Post
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
        />
      }) } */}
      {/* posts */}
    {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
      <Post
        key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
      />
    ))}
      {/* <Post name='paul muhaddib' description='This is a test' message='Wow this worked' /> */}
        
    </div>
  )
}

export default Feed
