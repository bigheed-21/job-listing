import React from 'react'
import '../App.css';
function Job ({ job, addFilter, filters }) {

  const { 
    logo, 
    position, 
    company, 
    featured, 
    postedAt, 
    contract, 
    location, 
    languages, 
    tools,
    level,
    role
  } = job;

  const langAndTools = [role, level];

  if (tools) {
    langAndTools.push(...tools)
  }

  if (languages) {
    langAndTools.push(...languages)
  }

  return (
    <article className="job">

      <div className="job-card">
        
        <img src={logo} alt={`Logo of ${company}`} />

        <div className="job-card-mainInformation">
          <div className="job-meta">
            <span className="company">{company}</span> 
            {job.new && ( <span className="new">New</span> ) } 
            {featured && ( <span className="featured">Featured</span> )}
          </div>
          <h3>{position}</h3>
          <span className="postedAt">{postedAt} &bull;</span>  
          <span className="contract">{contract} &bull;</span> <span className="location">{location}</span>
        </div>

      </div>

      <ul className="job-languages">
          {langAndTools && langAndTools.map(language => 
          
              <li onClick={() => addFilter(language)} key={language}>
                
                <button className={`${filters.includes(language) ? "active" : ""}`}>{language}</button>
                
              </li>
            
          )}
      </ul>
    
      
      
    </article>
  )

}

export default Job;
