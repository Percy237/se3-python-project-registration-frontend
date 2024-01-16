import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://se3-python-projects-backend.onrender.com/user", {
        ...data,
      })
      .then(() => {
        toast.success("Registration successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        reset();
      })
      .catch((error) => {
        console.log(error);
        toast.error("An error occurred. Please check console", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
    console.log("Form data submitted:", { ...data });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 via-blue-500 to-indigo-500">
      <div className="my-4 p-8 border rounded-md shadow-md bg-white w-full max-w-md mx-4 animate-fade-in">
        <ToastContainer />
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Register Your Project
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="project_name"
              className="block text-sm font-medium text-gray-600"
            >
              Name of project:
            </label>
            <input
              type="text"
              id="project_name"
              {...register("project_name", { required: true })}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.project_name && (
              <span className="text-red-500">Name of project is required</span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Project Description:
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              rows="4"
            />
            {errors.description && (
              <span className="text-red-500">Description is required</span>
            )}
          </div>

          <button
            className="bg-green-500 hover:bg-green-600 active:bg-black active:text-white text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
