 import pointer from '../../Assets/sectionTwoImage.png'
 import car from '../../Assets/luxuryblueCar.png'
 import car2 from '../../Assets/blueCar.png'
 import car3 from '../../Assets/redCar.png'
 import car4 from '../../Assets/luxuryblueCar.png'
 import car5 from '../../Assets/blueCar.png'
 import car6 from '../../Assets/luxuryblueCar.png'
 export function SectionTwo(){
    return(
        <section id="sectionTwo">
            <div className="sectionTwo">
                <div className="vehicleTT">
                    <img src={pointer} alt="pointer" />
                    <h1>vehicle</h1>
                    <h4>types</h4>
                </div>
                <div className="vehicleCont">
                    <div className="card">
                        <img src={car} alt="car" />
                        <span>Classic</span>
                    </div>
                    <div className="card">
                        <img src={car2} alt="car" />
                        <span>Classic</span>
                    </div>
                    <div className="card">
                        <img src={car3} alt="car" />
                        <span>Classic</span>
                    </div>
                    <div className="card">
                        <img src={car4} alt="car" />
                        <span>Classic</span>
                    </div>
                    <div className="card">
                        <img src={car5} alt="car" />
                        <span>Classic</span>
                    </div>
                    <div className="card">
                        <img src={car6} alt="car" />
                        <span>Classic</span>
                    </div>
                </div>
            </div>

        </section>
    )
}
