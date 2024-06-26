import "./header.css"
import { PiSignOutLight } from "react-icons/pi";
import { MdOutlineDateRange } from "react-icons/md";
import { FaCarRear } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";



function Header() {
  return (
    <header id="header_cont">
      <div className="header_cont">
        <div className="sideA">
          <div className="booking">
            <div className="headText">
              <h1>book taxi</h1>
            </div>
            <form action="book" id="form">
              <div className="formInfo">
                <div className="starting">
                  <label>
                    <span><PiSignOutLight /></span>
                  </label>
                  <input
                    type="text"
                    name="text"
                    placeholder="starting place"
                    id="startingP"
                  />
                </div>
                <div className="starting">
                  <label>
                    <span><PiSignOutLight /></span>
                  </label>
                  <input
                    type="text"
                    name="text"
                    placeholder="starting place"
                    id="startingP"
                  />
                </div>
                <div className="starting">
                  <label>
                    <span><MdOutlineDateRange /></span>
                  </label>
                  <input type="datetime-local" name="Date" id="Date-and-Time" />
                </div>
                <div className="starting">
                  <label>
                    <span><FaCarRear /></span>
                  </label>
                  <select name="select" id="select">
                    <option value="">Select Car Type</option>
                    <option value="">Classic</option>
                    <option value="">Econom</option>
                    <option value="">MiniVan</option>
                    <option value="">SUV</option>
                    <option value="">Wagon</option>
                    <option value="">Special Limousine</option>
                  </select>
                </div>
                <div className="starting">
                  <label>
                    <span><FaPhoneAlt /></span>
                  </label>
                  <input type="number" placeholder="your number" id="number" />
                </div>
                <button>book now!</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
