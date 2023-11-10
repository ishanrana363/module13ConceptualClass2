import { useState } from "react"
import "./loginForm.css"
import { FaToggleOn } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const Loginform = () => {
  const [togglePass,setTogglePss] = useState(true)
  const passwordVisibility = () =>{
    setTogglePss(!togglePass)
  }
  const handleFrom = (e) =>{
    e.preventDefault()
  }
  return (
    <div className='from-container' >
      <form action="" onSubmit={handleFrom} >
        <div>
          <label htmlFor="username">UserName : </label>
          <input type="text" name="" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input className="password" 
          type= {togglePass? "password" : "text" } name="" id="password"/>
          <button className="pssvisibility" onClick={passwordVisibility} >
            {
              togglePass ? <FaToggleOn/> : <FaTimes/>
            }
          </button>
        </div>
        <div className="btn" >
          <button  type='submit' >Login</button>
        </div>
      </form>
    </div>
  )
}

export default Loginform
