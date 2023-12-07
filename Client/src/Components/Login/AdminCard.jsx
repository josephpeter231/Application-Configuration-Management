import  { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AdminCard = () => {
  const [Action, setAction] = useState('signin');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey, setSecretKey] = useState("");
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {

          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./Home";
        }
      });
  }
  

  const handleSubmit2 = (e) => {
    if (secretKey !=="cts") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(name, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status === "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };


  

  return (
    <div>
      <div className="bg-white border-gray-400 border p-1 w-96 shadow-lg rounded-lg rounded-t-lg">
        <div className="flex flex-row w-full justify-around rounded-t-lg">
          <div
            className={`font-normal text-2xl px-3 py-2 flex justify-center items-center w-1/2 transition-all ease-in duration-100 rounded-t-lg ${
              Action === 'login' ? 'bg-blue-400 text-white' : ' text-black'
            }`}
            onClick={() => setAction('login')}
          >
            LOGIN
          </div>
          <div
            className={`font-normal text-2xl px-3 py-2 flex justify-center items-center w-1/2 transition-all ease-in duration-100 rounded-t-lg ${
              Action === 'signin' ? 'bg-blue-400 text-white' : ' text-black'
            }`}
            onClick={() => setAction('signin')}
          >
            SIGN IN
          </div>
        </div>

        <div
          className={`max-w-md mx-auto p-6 bg-blue-400 shadow-md rounded-b-lg ${
            Action === 'signin' ? 'rounded-tl-lg' : 'rounded-tr-lg'
          }`}
        >
          {Action === 'login' ? (
            <form onSubmit={handleSubmit}>
              <ToastContainer />
              <div className="mb-6">
                <label htmlFor="email" className="text-lg font-semibold text-white block">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="adminKey" className="text-lg font-semibold text-white block">
                  AdminKey:
                </label>
                <input
                  type="password"
                  id="adminKey"
                  name="adminKey"
                 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="text-lg font-semibold text-white block">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>
              <div className="flex w-full justify-end">
              <button type="submit" className="bg-white text-blue-600 rounded-md font-semibold px-2 py-1 ">LOGIN</button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit2}>
              
              <div className="mb-6">
                <label htmlFor="username" className="text-lg font-semibold text-white block">
                  Name:
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="text-lg font-semibold text-white block">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>

              <div className="mb-6  ">
                <label htmlFor="adminKey" className="text-lg font-semibold text-white block">
                  AdminKey:
                </label>
                <input
                  type="password"
                  id="adminKey"
                  name="adminKey"
                  onChange={(e) => setSecretKey(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="text-lg font-semibold text-white block">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-white text-black"
                />
              </div>
             <div className="flex w-full justify-end">
              <button type="submit" className="bg-white text-blue-600 rounded-md font-semibold px-2 py-1 ">SIGN IN</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
