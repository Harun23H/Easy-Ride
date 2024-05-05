import cab from "../../Assets/taxiHeader.png";
import background from "../../Assets/bgvide.mp4";

function Header() {
  return (
    <section id="header_cont">
      <div className="header_cont">
        <div className="sideA">
          <h3>welcome to easy drop</h3>
          <h1>your journey your way!</h1>
          <p>
            Adipisicing elit. Error sapiente voluptas placeat? nesciunt
            quibusdam!
          </p>
          <button>book now</button>
        </div>
        <div className="sideB">
          <img src={cab} alt="car" />
        </div>
      </div>
      <div className="headCont02">
        <video autoPlay muted loop id="background">
          <source src={background} type="video/mp4" />
        </video>
        <div className="content">
          <div className="contentInfo">
            <h3>welcome to easy drop</h3>
            <h1>your journey your way!</h1>
            <p>Adipisicing elit. Error sapiente voluptas placeat? nesciunt</p>
            <button>book now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
