import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold mb-6">SE3 PYTHON PROJECTS</h1>
        <p className="text-lg mb-8">
          A website to register your python project
        </p>
        <div className="space-x-4">
          <Link
            to="/registration"
            className="bg-green-500 px-6 py-3 rounded-md hover:bg-green-600 transition duration-300"
          >
            Register Here
          </Link>
          <Link
            to="/admin-login"
            className="bg-yellow-500 px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
