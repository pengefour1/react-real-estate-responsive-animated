import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started Now</span>
                <span className='secondaryText'>Subscribe <br/> Find your residence soon</span>
                
                <button className='button'>
                    <a href='mailto:customer@gmail.com'>Get Started</a>

                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
