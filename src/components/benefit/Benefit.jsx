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
                            <p>fixed price</p>
                            <span>G</span>
                        </div>
                        <p>Fixed fare set in every taximeter as the main tariff</p>
                    </div>
                        <div className="infoWrapper">
                        <div className="BlineHeader">
                            <p>fixed price</p>
                            <span>G</span>
                        </div>
                        <p>Fixed fare set in every taximeter as the main tariff</p>
                    </div>
                        </div>
                    <div className="info01">
                        <img src={benefit_Img} alt="cab" />
                    </div>
                    <div className="info03">
                        <div className="infoWrapper3">
                        <div className="BlineHeader3">
                            <p>fixed price</p>
                            <span>G</span>
                        </div>
                        <p>Fixed fare set in every taximeter as the main tariff</p>
                        </div>
                        <div className="infoWrapper3">
                        <div className="BlineHeader3">
                            <p>fixed price</p>
                            <span>G</span>
                        </div>
                        <p>Fixed fare set in every taximeter as the main tariff</p>
                        </div>
                        <div className="infoWrapper3">
                        <div className="BlineHeader3">
                            <p>fixed price</p>
                            <span>G</span>
                        </div>
                        <p>Fixed fare set in every taximeter as the main tariff</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}