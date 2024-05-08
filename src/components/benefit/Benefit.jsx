import benefit_Img from '../../Assets/yellow_cab.png'
export const Benefit = () =>{
    return(
        <section id="benefit">
            <div className="benefit">
                <small>our main</small>
                <h1>benefits</h1>
                <div className="benefitCont">
                    <div className="info01">
                        <div className="infoWrapper">
                        <div className="BlineHeader">
                            <p>fixed price</p>
                            <span>G</span>
                        </div>
                        <p>Fixed fare set in every taximeter as the main tariff</p>
                    </div>
                        <div className="infoWrapper">
                        <div className="BlineHeader">
                            <p>No Fee & Tips</p>
                            <span>G</span>
                        </div>
                        <p>We guarantee fixed price and you should not pay tips</p>
                    </div>
                        <div className="infoWrapper">
                        <div className="BlineHeader">
                            <p>Luxury cars</p>
                            <span>G</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                        </div>
                    <div className="info01">
                        <img src={benefit_Img} alt="cab" />
                    </div>
                    <div className="info03">
                        <div className="infoWrapper3">
                        <div className="BlineHeader3">
                            <p>fFull Satisfaction</p>
                            <span>G</span>
                        </div>
                        <p>Have lots of standing customers and high ratings</p>
                        </div>
                        <div className="infoWrapper3">
                        <div className="BlineHeader3">
                            <p>Nationwide Ride</p>
                            <span>G</span>
                        </div>
                        <p>Our application is the easiest way to book a taxi</p>
                        </div>
                        <div className="infoWrapper3">
                        <div className="BlineHeader3">
                            <p>No-smoking & clean</p>
                            <span>G</span>
                        </div>
                        <p>Stet clita kasd gubergren, no sea takimata sanctus est</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}