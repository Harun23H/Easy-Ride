import cab from '../../Assets/taxiHeader.png'
function Header() {
  return (
    <section id="header_cont">
      <div className="header_cont">
        <div className="sideA">
            <h3>welcome to easy drop</h3>
            <h1>your journey your way!</h1>
            <p>
              Adipisicing elit. Error
              sapiente voluptas placeat? nesciunt quibusdam!
            </p>
          <button>book now</button>
        </div>
        <div className="sideB">
            <img src={cab} alt="car" />
        </div>
      </div>
    </section>
  );
}

export default Header;
