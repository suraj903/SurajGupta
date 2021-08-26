import './about.scss';

const About = () => {
    const bbd = () => {
        window.open('https://bbdsoftware.com/');
    }
    const vnsgu = () => {
        window.open('https://www.vnsgu.ac.in/');
    }

    return (
        <div className="about" id="about">

            <h1>  About </h1>

            <div className="description">
                <p>
                    i am a full stack Developer and i have worked on popular languages like angular reactjs springboot nodejs and
                    have 1 Year of experince of working on various modules of Telecom and Banking Industry.
                    i like to learn new things everyday.

                </p>

                <p>
                    i am open work for freelancing or any other work, willing to relocate if the offer is good.
                </p>

                <div className="languagesworkedon">
                    <h3> Languages Worked On: </h3>
                    <li>
                        Angular
                    </li>
                    <li>
                        React JS
                    </li>
                    <li>
                        Spring boot
                    </li>
                    <li>
                        Node JS
                    </li>
                </div>

                <div className="experience">
                    <h3> Working Experience : </h3>
                    <p> 1 Year </p>
                </div>

                <div className="exp1">
                    <h3> Current Company : </h3>
                    <p onClick={bbd}> BBD IND Pvt Ltd. </p>
                    <div className="fasss" onClick={bbd}>
                        <i class="fas fa-external-link-square-alt"></i>
                    </div>
                </div>

                <div className="exp1">
                    <h3> Role : </h3>
                    <p> Full Stack Developer </p>
                </div>

                <div className="qualification">
                    <h3>Qualification : </h3>
                    <div className="bachelor">
                        <p> BCA ( Bachelor in Computer Application ) 2015-2018 </p>
                        <p onClick={vnsgu}>
                            (VNSGU)
                            <i class="fas fa-external-link-square-alt"></i>
                        </p>
                    </div>
                    <div className="masters">
                        <p> MCA ( Masters in Computer Application ) 2019-2021 </p>
                        <p onClick={vnsgu}>
                            (VNSGU)
                            <i class="fas fa-external-link-square-alt"></i>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
