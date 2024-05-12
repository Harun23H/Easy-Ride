import '../newletters/newletters.css'


const Newletters = () =>{
    return(
        <section id="newletters">
            <div className="newletters">
                <div className="lebel">
                    <span>subscribe to our</span>
                    <h2>newletters:</h2>
                </div>
                <div className="inputCont">
                <input type="email" name="newletters"  placeholder='email address' id="email" />
                <button>subscribe</button>
                </div>
            </div>

        </section>
    )
}

export default Newletters