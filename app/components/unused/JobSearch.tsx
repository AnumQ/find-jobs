import React from "react";

interface JobSearchProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  search: (searchQuery: string) => void;
}

const JobSearch: React.FC<JobSearchProps> = ({
  search,
  searchInput,
  setSearchInput,
}) => {
  return (
    <div className="job-search">
      <h2>Job Search</h2>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        className="input"
        placeholder="Search for jobs..."
      />
      <button
        onClick={() => {
          search(searchInput);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default JobSearch;
