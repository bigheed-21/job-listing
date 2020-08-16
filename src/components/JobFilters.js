import React from 'react'

function JobFilters({ filters, clearFilters, removeFilter }) {

  return (
    <div>
      
    
        <div className="filters">
          
          <div>
            <h2>Filters</h2>
            
            <div className="filters-list">
              {filters.length > 0 &&
              <React.Fragment>
                  <ul>
                    {filters.map(filter => 
                      <li key={filter} onClick={() => removeFilter(filter)}>
                          <button>{ filter } <span className="close">
                            <svg aria-label={`Remove ${filter} filter`} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg></span>
                          </button>
                      </li>
                    )}
                  </ul>
                  <button className="clear-filters" onClick={clearFilters}>Clear all filters</button>
                </React.Fragment>
              }
              {filters.length === 0 && 
                <p>No filters applied. You can filter by selecting a label within a job card.</p>
              }
            </div>
          </div>
          
          
        </div>
        
        
    </div>
  )

}


export default JobFilters