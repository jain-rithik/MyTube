import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    //early return
    if(!isMenuOpen) return null;
    
  return (
    <div className='p-5 shadow-lg w-48'>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
        </ul>
        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Movies</li>
            <li>Gaming</li>
            <li>Music</li>
        </ul>
        <h1 className='font-bold pt-5'>You</h1>
        <ul>
            <li>History</li>
            <li>Watch Later</li>
            <li>Liked Videos</li>
            <li>Playlists</li>
        </ul>
    </div>
  )
}

export default Sidebar