import PageContainer from "../components/PageContainer";

// services that I can offer to an employer

export default function Services() {
    return (
                <PageContainer> 

                    <section className="services-section"> 

                        <h1>Services</h1> 

                        <p className="services-intro"> 
                        I am developing a range of technical skills through my studies and hands-on projects. Some of the services I can provide include: 
                        </p> 

                    <div className="services-container"> 

                        <article className="service-card"> 

                            <div className="service-image"> 
                            
                                <img src="/webdev.png" alt="Web development project" /> 

                    </div> 

                    {/* web dev services */}

                    <div className="service-info"> 

                            <h2>Web Development</h2> 

                            <p> Creating responsive and user-friendly websites using modern web technologies such as HTML, CSS, JavaScript, and React. </p> 

                    </div> 

                        </article> 

                        <article className="service-card"> 

                            <div className="service-image"> 

                                <img src="/javaproject.png" alt="Programming project" /> 

                            </div> 

                            {/* programming services  */}

                    <div className="service-info"> 

                            <h2>Programming</h2> 

                            <p> Developing programs and applications while applying programming concepts, object-oriented programming, and problem-solving techniques. </p> 

                    </div> 

                        </article> 

                        <article className="service-card"> 

                        <div className="service-image"> 

                                <img src="/sqldev.png" alt="Database development project" /> 

                        </div> 

                        {/* database  services */}

                    <div className="service-info"> 

                            <h2>Database Development</h2> 

                            <p> Designing databases, creating SQL queries, and organizing information using relational database systems. </p> 

                    </div> 

                        </article> 

                        <article className="service-card"> 

                            <div className="service-image"> 

                                <img src="/systemdesign.png" alt="Software design diagram" /> 

                            </div> 

                            {/* system design paperwork */}

                    <div className="service-info"> 

                            <h2>Software Design</h2> 

                            <p> Analyzing software requirements and creating models such as use case diagrams, class diagrams, and other UML documentation to describe software systems. </p> 

                    </div> 

                        </article> 

                    </div> 

            </section> 

    </PageContainer> 
 
   
    );
}
