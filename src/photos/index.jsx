import React from 'react'
import {Avatar, Title} from '../ui'
const Photo = ({photos}) => {
  return photos.map(item => {
    const {title, thumbnailUrl} = item
    return (
      <>
        <Avatar
          src={thumbnailUrl}
          style={{width: '100px', height: '100px'}}
          alt="alternative"
        />
        <Title text={title} />
      </>
    )
  })
}
export default Photo
