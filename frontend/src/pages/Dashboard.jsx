import Navbar from "../components/Navbar";
function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="fixed top-30 mt-20 left-4 h-600 w-200 border-2 rounded overflow-hidden">
        <div className="flex flex-col items-center bg-white shadow-md rounded p-4 ">
          <div>
            <img
              className="h-16 w-16 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
            />
          </div>
          <div className="p-2 text-center">
            <div className="mb-2">
              <h1 className="m-0 text-lg">Your Name</h1>
            </div>
            <p className="my-2 text-sm text-gray-600">
              Username: your_username
            </p>
            <p className="my-2 text-sm text-gray-600">
              Email: your.email@example.com
            </p>
            <p className="my-2 text-sm text-gray-600">
              Location: Your City, Country
            </p>
            {/* Add more information as needed */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
