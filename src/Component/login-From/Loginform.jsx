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
  const [userValue,setUserValue] = useState({
    Name : "",
    password :""
  })
  const userNameHandle = (event)=>{
    setUserValue({
      Name : event.target.value,
      password : userValue.password
    })
  }
  const userPasswordHandle = (event)=>{
    setUserValue({
      Name : userValue.Name,
      password : event.target.value
    })
  }

  return (
    <div className='from-container' >
      <form action="" onSubmit={handleFrom} >
        <div>
          <label htmlFor="username">UserName : </label>
          <input onChange={userNameHandle} type="text" name="" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input className="password" 
          type= {togglePass? "password" : "text" } 
          onChange={userPasswordHandle}
          name="" id="password"/>
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
      username : {userValue.Name} <br/>
      userpassword : {userValue.password}
    </div>
  )
}

export default Loginform
