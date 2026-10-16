import PageContainer from "../components/PageContainer";

// my page for my past or current and ongoing projects I am working on.

export default function Projects() {
    return (
        <PageContainer>

            <div className="projects-container">
{/* first project */}
            <article className="project-card">
                <div className="project-image">
                    <img src="/systemdesign.png" alt="name of project" />
                </div>

                <div className="project-info"> 
                    <h2> System Design </h2> 
                   <p> We are creating a programmer for insurance claims.</p> 
                   <p> <strong>Role:</strong> developer</p> 
                   <p><strong>Outcome</strong>: pending completion </p>
                   </div>
            </article>    
{/* second project */}
              <article className="project-card">
    <div className="project-image">
      <img src="/javaproject.png" alt="Java project" />
    </div>

    <div className="project-info">
      <h2>Java Programming</h2>
      <p>Had to make a singer class to display one singers information.</p>
      <p><strong>Role:</strong> creator.</p>
      <p><strong>Outcome:</strong> I accomplished the project.</p>
    </div>
  </article>

{/* third project */}
  <article className="project-card">
    <div className="project-image">
      <img src="/databaseproject.png" alt="Database project" />
    </div>

    <div className="project-info">
      <h2>Database Design</h2>
      <p>Had to commit a criminal table only to make new tables in order to connect different people and items.</p>
      <p><strong>Role:</strong> new table creator.</p>
      <p><strong>Outcome:</strong> I accomplished a 7 question project to display different information regarding whatever constraints were needed or tables to be created.</p>
    </div>
  </article>    
  
</div>
        </PageContainer>
    );
}
