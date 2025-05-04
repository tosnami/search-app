import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const query = useQuery().get("q");

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <SearchBar />
        <h2 className="mt-6 text-2xl font-semibold text-blue-700 animate-fade-in-up">
          نتائج البحث عن: <strong className="text-blue-900">{query}</strong>
        </h2>

        {/* لاحقًا هتحط هنا نتائج البحث من API */}
        <div className="text-2XL md:text-2xl text-gray-900 mb-10 animate-slideUp">
          <p>لا توجد نتائج للعرض حالياً.</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;