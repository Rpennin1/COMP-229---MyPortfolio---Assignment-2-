import PageContainer from "../components/PageContainer";

// My about me page with my legal name, a bit about me and view my resume

export default function About() {
    return (
        <PageContainer>

            {/* my about me with some simple info reguarding myself */}
            <div className="about-content">
                <div className="profile-image"> <img src="/profile.jpg" alt="Photo of Rebecca Pennington" width="500px" height="300px" /> </div>
                   <div className="about-text">
             <h1>About Me</h1>
             <p><span className="legal-name-label">Legal Name: </span> Rebecca Pennington</p>
             <p>Hi, I’m Rebecca Pennington, a technology student at Centennial College working toward completing the Software Engineering Technician program. I’m developing my skills in programming, web development, databases, and software design through hands-on coursework and projects.
                   <br /> <br />
                  I enjoy creating things that are both functional and visually appealing, whether that means designing a website, developing a program, or finding creative solutions to technical problems. As I continue learning and building my portfolio, my goal is to grow into a software developer and eventually work in the technology industry or build a business of my own.

             </p>
{/* The link to my resume. */}
             <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button"> View my Resume </a>
                
            
                </div>
             </div>
        </PageContainer>
    );
}
