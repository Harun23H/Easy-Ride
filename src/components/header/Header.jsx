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
                    <span>G</span>
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
                    <span>G</span>
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
                    <span>G</span>
                  </label>
                  <input type="datetime-local" name="Date" id="Date-and-Time" />
                </div>
                <div className="starting">
                  <label>
                    <span>G</span>
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
                    <span>G</span>
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
