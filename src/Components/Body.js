import React from 'react'
import cover from '../tech.jpg'
import body from '../tech CoE (1).jpg'

function Body() {
  return (
    <>
    <img className='cover' src={cover}alt='cover'/>
    <div className='bodyContainer'>
      
      <div>
    <h3>WHO WE ARE</h3>
    <p>Rubixe<sup>TM</sup> is a global technology company specilizing in disruptive technologies - Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain, and Internet of Things(IoT).</p>
    <p>Rubixe<sup>TM</sup> is to enable businesses to leverage the full potential of disruptive technologies and stay competitive in the market, turning complex challenges into solutions, providing a strategic competitive advantage that are more efficient, effective and predictable</p> 
    </div>
    <div>
      <img className='office' src='https://img.etimg.com/thumb/width-640,height-480,imgsize-105102,resizemode-1,msid-93455952/industry/services/property-/-cstruction/office-space-absorption-across-indias-six-major-cities-stood-at-30-4-million-sqft-report/office-.jpg' alt='images'/>
    </div>
    </div>
    <div className='body2'>
      <div className='body3'>
    <h1>WHERE WE STARTED</h1>
    <p>We started in 2015, With a passionate team who want to bring game-changing solutions through disrupting technologies. We expertise in delivering enterprise-level solutions in the field of Artificial Intelligence(AI), Cyber Secrurity, Robotic Process Automation (RPA),Internet of Things(IoT), and BlockChain technology</p>
    </div>
    </div>
    <img className='bod' src={body}alt='cover'/>
    </>
  )
}

export default Body
