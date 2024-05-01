import React from 'react'

const VideoCard = ({info}) => {
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-80'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt={title} />
        <h3 className='font-semibold'>{title}</h3>
        <p>{channelTitle}</p>
        <p>{statistics.viewCount} views</p>
    </div>
  )
}

export default VideoCard