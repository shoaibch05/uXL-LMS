import lms from "../../assets/lms.png";
const Login = () => {
  return (
    <div className=" flex">
      <div className="w-[50vw] h-screen text-white bg-blue-800 flex flex-col justify-center items-center">
        <img src={lms} height={"50px"} width={"50px"} alt="not found" />
        <h1 className="text-3xl font-bold ">uXL LMS 360</h1>
        <h5>Global Learning Network</h5>
      </div>
      <div className="w-[50vw] h-screen  flex flex-col justify-center items-center">
        <form
          action="#"
          method="get"
          className="w-[60%] rounded-2xl shadow-2xl"
        >
          <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center mb-4">
              <h2 className="text-2xl text-center font-bold ">
                Sign In into your Dashboard
              </h2>
              <p>Please enter your credentials</p>
            </div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="admin@institute.com"
              className="border border-gray-300 p-2 rounded mb-4"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 p-2 rounded"
            />
            <a href="#" className="text-right text-blue-500 text-sm">
              Trouble logging In?
            </a>
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-4"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4">
          Need Help? Cantact{" "}
          <a href="#" className="underline">
            support
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
