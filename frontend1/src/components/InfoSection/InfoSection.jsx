import React from 'react'
import "./infoSection.scss"

const InfoSection = () => {
  return (
    <>
    <div className='wrapper'>
        <div className='card'>
        <i className="fa-regular fa-bell"></i>
            <h2>Modern Design</h2>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
        <div className='card'>
        <i className="fa-regular fa-heart"></i> 
            <h2>Build With Love</h2>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
        <div className='card'>
        <i className="fa-solid fa-bolt-lightning"></i>
            <h2>Fast Loading</h2>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
        </div>
        
    </div>
    </>
  )
}

export default InfoSection