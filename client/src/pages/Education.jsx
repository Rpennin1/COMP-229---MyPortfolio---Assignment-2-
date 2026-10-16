import PageContainer from "../components/PageContainer";

export default function Education() {
    return (
        // my education section with my upgrading, current program, and professional development information 
        <PageContainer>

            <section className="education-section">

               <h1>Education</h1>

               <p className="education-intro"> 

                My education and ongoing learning have helped me develop technical, analytical, and problem-solving skills in software development.

                </p>

                {/* my upgrading classes  */}

                 <article className="education-card">

                    <div className="education-year">
                   
                    2022 - 2024 

                    </div>

                    <div className="education-info">

                        <h2>Upgrading classes</h2>

                        <p> 
                            Spent this time upgrading my knowledge so that I could go back to school and begin my Software Engineering Technician program. 
                        </p>

                    </div>    

                  </article> 

                  {/* current program info */}   

                  <article className="education-card">

                    <div className="education-year">

                        2024 - Present

                    </div> 

                    <div className="education-info">

                        <h2>Centennial College</h2>

                        <h3> Software Engineering Technician</h3>

                        <p>
                            Currently developing skills in programming, database, web development, and software design through hands-on coursework and projects.

                        </p>

                    </div>   

                  </article>  

                  {/* other professional details */}

                  <article className="education-card">

                    <div className="education-year">

                        <h2> Professional Development</h2>

                        <p>
                            Continuing to develop technical skills through programming projects, database development, software requirements analysis, and independent learning.
                        </p>

                    </div>

                  </article>  

            </section>    

        </PageContainer>
    );
}

