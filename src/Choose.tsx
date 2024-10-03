import "./Choose.css";
import { FaSearch } from "react-icons/fa";

function Choose() {
    
  const popularSearches = [
    "Software Engineer",
    "Frontend Developer",
    "Data Scientist",
    "Product Manager",
    "UX/UI Designer",
    "Backend Developer",
    "Project Manager",
    "Mobile Developer",
  ];

  return (
    <div className="choose-background">
      <div className="choose-box">
        <h2 className="choose-heading">Find Your Job.</h2>

        <div className="input-box">
          <input type="text" placeholder="Enter your job title" />
          <br />
          <input type="text" placeholder="Enter your job location" />
          <br />
          <button className="searchButton">Search</button>
        </div>
        <br />
        <div className="applyButton">
          <a href="#">Upload your CV</a> <br />
          and get noticed by top employers!
        </div>
        <h2>
          Discover Your <br />
          Dream Job.
        </h2>

        <div className="popular">
          <h2>Popular Searches</h2>
          {popularSearches.map((search, index) => (
            <div className="gradient" key={index}>
              <h3 className="searches">
                <FaSearch /> {search}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Choose;
