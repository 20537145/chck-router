import React from 'react'
import breakingBad from '../breakingbad.mp4'
import darktr from '../Dark.mp4'
import Prisonbrtr from '../Prison Breakmp4.mp4'
import vikingstr from '../Vikings.mp4'

function Trailer() {
  return (
    <div>
        <div className='tranddesc'>
          <div>
        <h1>Dark</h1>
        <video src={darktr} controls width={'420px'} height={'370px'}></video>
        <p>'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
</p> 
          </div>
          <div>
        <h1>Breaking Bad</h1>
        <video src={breakingBad} controls width={'420px'} height={'370px'}></video>  
        <p>"A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",</p> 
          </div>
          <div>
            <h1>Prison Break</h1>
        <video src={Prisonbrtr} controls width={'420px'} height={'370px'}></video>  
        <p>
          "A structural engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence by breaking themselves out from the inside.",
         </p> 

          </div>
          <div>
            <h1>Vikings</h1>
        <video src={vikingstr} controls width={'420px'} height={'370px'}></video>  
        <p>'Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore--and raid--the distant shores across the ocean.',</p> 

          </div>
        </div>
    </div>
  )
}

export default Trailer