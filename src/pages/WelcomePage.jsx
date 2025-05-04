import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/home");
  };

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 text-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6  animate-slideUp-fadeIn">
        Welcome to My G-Search
      </h1>
      <p className="text-2XL md:text-xl text-gray-900 mb-10 animate-slideUp">
        البحث عن مستقبلي الي ضايع!
      </p>
      <button
        onClick={handleEnter}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all duration-500 ease-in-out animate-scaleUp"
      >
        ابدأ البحث
      </button>
    </div>
  );
}

export default WelcomePage;