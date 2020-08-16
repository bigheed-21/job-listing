import React, { useEffect, useState } from 'react'
import JobComponent from '../components/Job';
import JobFilters from '../components/JobFilters';

function JobListing() {

  const [jobListings, setJobListings] = useState([])
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState(['CSS']);

  useEffect(() => {

    const jobs = '../data/data.json';

    fetch(jobs, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }

      })
      .then(response => response.json())
      .then(response => {
        setJobListings(response);
        setLoading(false);
      });

  }, []);

  const addFilter = (tag) => {
    if ( filters.includes(tag) ) {
      return;
    }
    setFilters([...filters, tag]);
  }

  const clearFilters = () => {
    setFilters([]);
  }

  const removeFilter = (tag) => {
    const updatedFilters = filters.filter(f => f !== tag);
    setFilters(updatedFilters);
  }

  const filterFunction = ({role, level, tools, languages}) => {

    if (filters.length === 0 ) {
      return true;
    }

    const tagNames = [role, level];

    if (languages) {
      tagNames.push(...languages)
    }

    if (tools) {
      tagNames.push(...tools)
    }

    return filters.every(filter => tagNames.includes(filter))

  }

  const filteredJobs = jobListings.filter(filterFunction)

  return (
    <div>
        <JobFilters filters={filters} clearFilters={clearFilters} removeFilter={removeFilter} />
        {loading 
          ? 
          <p className="loading">Loading...</p>
          : 
          (filteredJobs.map((job) => 
            <JobComponent 
              job={job} 
              key={job.id} 
              addFilter={addFilter} 
              filters={filters}
            />
          ))

        }

    </div>
  )
  

}


export default JobListing