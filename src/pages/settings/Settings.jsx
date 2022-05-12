import "./settings.css"
import SideBar from "../../components/sidebar/SideBar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form  className="settingsForm">
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img 
                  className="settingsPPImg"
                  src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="" />

                  <label htmlFor="fileInput">
                     <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    
                  </label>
                  <input type="file" id="fileInput" style={{display:"none"}} />
              </div>

              <label>Username</label>
              <input 
                placeholder="Binh Nguyen"
                type="text" 
              />
              <label>Email</label>
              <input 
                placeholder="manhbinh99@gmail.com"
                type="email" 
              />
              <label>Password</label>
              <input 
                placeholder="*******"
                type="password" 
              />

              <button className="settingsSubmit">Update</button>
            </form>
        </div>



        <SideBar/>
      
    </div>
  )
}
