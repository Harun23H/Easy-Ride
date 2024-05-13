import "./adverts.css";
import AdsImg from "../../Assets/ads car.png";
import { BsCarFront } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

const Adverts = () => {
  return (
    <section id="adverts">
      <div className="adverts">
        <div className="advertDetails">
          <div className="headA">
            <span>our taxi</span>
            <h1>advert</h1>
          </div>
          <p>
            Grab people’s attention with awesome advertising campaigns on our
            taxi cars. Reach thousands of people with your creative ad.
          </p>
          <div className="list">
            <div className="advert01">
              <span>
                <BsCarFront />
              </span>
              <p>Choose a taxi model</p>
            </div>
            <div className="advert01">
              <span>
                <FaMoneyBillAlt />
              </span>
              <p>Choose advertising position</p>
            </div>
            <div className="advert01">
              <span>
                <IoMdTime />
              </span>
              <p>Select time period</p>
            </div>
          </div>
          <button>advertising department</button>
        </div>
        <div className="advertImg">
          <img src={AdsImg} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Adverts;
