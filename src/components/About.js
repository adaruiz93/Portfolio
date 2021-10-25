import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

function About() {
  return (
    <div id="about" className="profile-div">
      <img src="./images/profile.jpg" className="profile"/>
      <p className="about-me">I'm Ada, a former Medical Assistant that now loves to code and create things. My favorite hobbies include reading, learning new languages,  napping with my cats, and learning to code.</p>
    </div>
  )
}

export default About
