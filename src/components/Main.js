import React from "react"

export default function Main() {
  return(
    <div className="MainContent">
      <img src="https://github.com/AbdellahSlimani.png" alt="abdellah slimani in black and white and a solid yellow background" width={317}/>
      <h1>Abdellah Slimani</h1>
      <h3>Frontend Developer</h3>
      <h4>AbdellahSlimani.com</h4>
      <div className="btns">
        <button className="email"><ion-icon name="mail-outline"></ion-icon>Email</button>
        <button className="linkedin"><ion-icon name="logo-linkedin"></ion-icon>LinkedIn</button>
      </div>
      <div className="abAndInt">
        <div className="about">
          <h1>About</h1>
          <p> I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div className="interests">
          <h1>Interests</h1>
          <p> Food expert. languages Learner. Reader. Internet fanatic. Web development. Entrepreneur. Travel geek.  ninja. Coffee fanatic. </p>
        </div>
      </div>
    </div>

  )
}