import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function PrevSearches({ handleSearchInputChange }) {
  const searches = [
    "Jollof Rice",
    "Gizz-Dodo",
    "Moi Moi",
    "Zobo",
    "Egusi Soup",
    "Noodles",
    "Oha Soup",
    "Fried Rice",
    "Spahetti",
    "Eba",
  ];

  return (
    <div>
      <div className="previous-searches section">
        <h2>Previous Searches</h2>

        <div className="previous-searches-container">
          {searches.map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.1 + "s" }}
              className="search-item"
            >
              {search}
            </div>
          ))}
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="search"
          onChange={handleSearchInputChange}
        ></input>
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
