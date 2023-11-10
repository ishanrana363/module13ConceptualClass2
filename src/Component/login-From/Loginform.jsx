import "./loginForm.css"
const Loginform = () => {
  return (
    <div className="from-container" >
      <form >
        {/* User name input */}
        <div>
            <span>Username : </span>
            <input type="text" />
        </div>
        {/* User password input */}
        <div>
            <span>Password : </span>
            <input  type="password" name="" id="password" />
        </div>
      </form>
    </div>
  )
}

export default Loginform
