import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div >
           <img className='imgg mx-2' src={props.image}/>
          {props.text}
        </div>
    </div>
  )
}

export default Card ;