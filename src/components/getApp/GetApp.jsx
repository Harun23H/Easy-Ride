import mobile from '../../Assets/mobile.png'
import Dimage from '../../Assets/apple.png'
import Dimage2 from '../../Assets/google.png'
import Dimage3 from '../../Assets/window.png'
const GetApp = () => {
  return (
    <section id="getApp">
      <div className="getApp">
        <div className="sect01">
          <div className="div01">
            <small>book taxi from smartphone</small>
            <h1>get your app</h1>
          </div>
          <p>
            our app is easy to use and very user friendly. just choose your
            start and end location, select the car you like and in just a few minutes we'll be at your doorstep.
          </p>
          <div className="div02">
            <div className="line01">
                <span></span>
                <p>easy taxi booking</p>
            </div>
            <div className="line01">
                <span></span>
                <p>check the rate in real time</p>
            </div>
            <div className="line01">
                <span></span>
                <p>calculate the trip mileage</p>
            </div>
          </div>
        </div>
        <div className="sect02">
            <img src={mobile} alt="mobile" />
        </div>
      </div>

      <div className="download">
        <img src={Dimage} alt="ios" />
        <img src={Dimage2} alt="android" />
        <img src={Dimage3} alt="window" />
      </div>
    </section>
  );
};

export default GetApp;
