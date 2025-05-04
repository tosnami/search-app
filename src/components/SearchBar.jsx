import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate("/search"); // بعدين ممكن تضيف الباراميتر للبحث
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full max-w-md">
      <input
        type="text"
        placeholder="Search Google or type a URL"
        className="flex-grow p-3 rounded-l-full text-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-700 p-3 rounded-r-full hover:bg-blue-200"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;