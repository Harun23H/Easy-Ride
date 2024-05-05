import logo from '../../Assets/logo.png'
const Nav = () =>{
    return(
        <nav>
            <div className="nav">
                
            <div className="logo">
                <img src={logo} alt="logo" />
                <p>Easy Drop</p>
            </div>
            <label for="toggle">&#9776;</label>
            <input type="checkbox" id="toggle" />
            <div className="navRight">
            <div class="cancel">
                <label for="toggle">&#10005;</label>
                <input type="checkbox" />
              </div>
                <div className="navitems">
                    <ul>
                        <li>home</li>
                        <li>page</li>
                        <li>about</li>
                        <li>services</li>
                        <li>news</li>
                        <li>contact</li>
                    </ul>
                </div>
            </div>
            <button>whatsapps</button>
            </div>
        </nav>
    )
}

export default Nav