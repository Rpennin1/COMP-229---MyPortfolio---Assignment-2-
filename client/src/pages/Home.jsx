import PageContainer from "../components/PageContainer";
import { Link } from "react-router-dom";

// my home page with my welcome and mission statements for viewers to see

export default function Home() {
    return (
        <PageContainer>
        <main>
            <section className="home-section">

{/* my home and landing page welcome  */}

                <h1> Welcome to My Portfolio.</h1>

                <p>
                    Hi, I'm Rebecca — a Software Engineering student building my skills one project at a time.

                      Here you'll find a collection of my projects, education, technical skills, and the experiences I've gained while studying and developing my skills in technology.
                
                </p>

{/* my mission statement */}

                <h2> My Mission </h2>

                <p> 
                    My goal is to continue growing as a software developer by combining creativity, problem-solving, and technology. I want to build applications and digital experiences that are useful, accessible, and enjoyable to use while continuing to learn and challenge myself along the way.

                </p>
                <Link to="/about" className="button">
                  Learn More About Me.
                </Link>     
            </section>
        </main>  
        </PageContainer>      
     );
}
