import { Link } from "react-router-dom";
import "./topbar.css"

export default function Topbar() {

  const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
           <i className="topIcon fa-brands fa-facebook-square"></i>
           <i className="topIcon fa-brands fa-twitter-square"></i>
           <i className="topIcon fa-brands fa-instagram-square"></i>
           <i className="topIcon fa-brands fa-pinterest-square"></i>
        </div>
        <div className="topCenter">

                <ul  className="topList">
                    <li className="topListItem">
                      <Link to="/" className="link" >HOME</Link>
                    </li>
                    <li className="topListItem">
                      <Link to="/" className="link" >ABOUT</Link>
                    </li>
                    <li className="topListItem">
                      <Link to="/" className="link" >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                      <Link to="/write" className="link" >WRITE</Link>
                    </li>
                    <li className="topListItem">
                      {user && "LOGOUT"}
                    </li>
                </ul>
            
           
        </div>
        <div className="topRight">
          {
            user ? (
              <img 
              className="topImg"
              src="https://thegioidienanh.vn/stores/news_dataimages/anhvu/032020/06/14/5657_02.jpg"
              alt="ảnh đại diện" 
          /> 
            ) : (
              <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">LOGIN</Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">REGISTER</Link>
                </li>
                
                
              </ul>
            )
          }
           
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
