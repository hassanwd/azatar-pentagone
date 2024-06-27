import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className='main_honeycomb'>
      <div className='line st_line1'>
        <div className='st st_1' style={{background: "#4700D7"}}>
          <span>IT <br /> Management</span>
          <div className='st_counting'>0</div>
        </div>
        <div className='st st_2' style={{background: "#4700D7"}}>
          <span>IT <br /> Management</span>
          <div className='st_counting'>0</div>
        </div>
        <div className='st st_3' style={{background: "#FC2B5F"}}>
          <span>IT <br /> Testing</span>
          <div className='st_counting'>13</div>
        </div>
        <div className='st st_4' style={{background: "#FC2B5F"}}>
          <span>IT <br /> Testing</span>
          <div className='st_counting'>13</div>
        </div>
        <div className='st st_5' style={{background: "#FC2B5F"}}>
          <span>IT <br /> Testing</span>
          <div className='st_counting'>13</div>
        </div>
      </div>

      <div className='line st_line2'>
        <div className='st st_6' style={{background: "#FC2B5F"}}>
          <span>Sales <br /> Manager</span>
          <div className='st_counting'>17</div>
        </div>
        <div className='st st_7' style={{background: "#FC2B5F"}}>
          <span>Sales <br /> Manager</span>
          <div className='st_counting'>17</div>
        </div>
        <div className='st st_8' style={{background: "#4700D7"}}>
          <span>QA <br /> Engineer</span>
          <div className='st_counting'>0</div>
        </div>
        <div className='st st_9' style={{background: "#FC2B5F"}}>
          <span>IT <br /> Coordination</span>
          <div className='st_counting'>5</div>
        </div>
      </div>

      <div className='line st_line3'>
        <div className='st st_10' style={{background: "#4700D7"}}>
          <span>Programming</span>
          <div className='st_counting'>0</div>
        </div>
        <div className='st st_11' style={{background: "#FC2B5F"}}>
          <span>UI/UX <br /> Design</span>
          <div className='st_counting'>32</div>
        </div>
        <div className='st st_12' style={{background: "#FC2B5F"}}>
          <span>UI/UX <br /> Design</span>
          <div className='st_counting'>32</div>
        </div>
      </div>
    </div>
  )
}

export default App