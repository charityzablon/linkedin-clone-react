import React from 'react'
import  "./Feed.css"
import CreateIcon from '@material-ui/icons/Create'

function Feed() {
  return (
    <div className='feed'>
      <div className='feed__inputContainer'></div>
        <div className="feed__input">
        < CreateIcon />
        <form > 
          <input type="text"> </input>
          <button type="submit">
            send
          </button>
        </form>
        </div> 


    </div>
  ) 
}

export default Feed;