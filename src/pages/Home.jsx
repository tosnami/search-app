import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white animate-fade-in">
      
      {/* اللوجو */}
      <div className="mb-8 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-slideUp">
        G-Search
      </div>

      {/* شريط البحث */}
      <SearchBar />

    </div>
  );
}

export default Home;