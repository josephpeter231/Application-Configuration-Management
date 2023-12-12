import { useState,useEffect } from "react";
import { Link,NavLink} from "react-router-dom"

const Home = () => {
  const user = localStorage.getItem('user');
  console.log('fdshfd')
  console.log(user);
  const developerArray = [user];
  const commonDataArray = [];

  const [getstud, SetGetstud] = useState([]);
    // console.log(getstud)
    //get student Data
    const Getstuddata = async () => {
        const res = await fetch("http://localhost:5000/getstud", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
  
        data.forEach(item => {
          const commonDevelopers = item.developers.filter(dev => developerArray.includes(dev));
          if (commonDevelopers.length > 0) {
            commonDataArray.push(item);
          }
        });

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            SetGetstud(commonDataArray)
            console.log(getstud)
            console.log("get data");
        }
    }

    useEffect(() => {
        Getstuddata();
    }, [])

    //Delete student data
    // const deletestud = async (id) => {

    //     const res2 = await fetch(`http://localhost:5000/deletestud/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     });

    //     const deletedata = await res2.json();

    //     if (res2.status === 422 || !deletedata) {
    //         console.log("error");
    //     } else {
    //         getstuddata();

    //     }

    // }
    //search Student
   
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/loginOrSignup";
  };
 
  
  return (
    <div className="h-full flex flex-col">
      <div className="header flex flex-1 flex-row bg-blue-600 py-2 mb-10 w-full px-20">
        <div className="flex flex-row  ml-16 ">
          <a className="text-white flex flex-row justify-start items-center font-bold text-xl font-sans">
            ACM
            <img
              src="src/assets/acm2.png"
              className="ml-2"
              height={30}
              width={30}
              alt=""
            />
          </a>
        </div>
        <div className="flex w-full justify-center items-center">
          <NavLink
            className="text-white text-xl  items-center font-semibold font-sans text-center"
            to="/allconfig"
          >
            ALL CONFIGURATIONS
          </NavLink>
        </div>
        <div className="flex justify-center items-center ml-auto self-end">
          <button onClick={logOut}>
            <img src="src/assets/profile.jpg" height={50} width={50} alt="" />
          </button>
        </div>
      </div>

      <div className=" flex-grow mx-20 mb-12 h-full">
        <div className="w-full flex flex-row flex-grow h-full ">
          <div className="flex flex-col w-2/3 h-full border-gray-600  border-2 px-16 mr-2 overflow-auto ">
            <div>
              <h1 className="text-black font-bold text-2xl mt-10">PROJECTS </h1>
            </div>
            <div className="w-96  p-2 border-2 border-gray-300  rounded-md flex h-10 mt-5 ">
              <input
                className="w-full py-2 px-3 outline-none text-black"
                type="text"
                placeholder="Search Projects"
              />
            </div>
            <table className="table table-bordered mt-5">
              <thead className="table-dark">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {getstud
                 
                  .map((result, id) => {
                    return (
                      <>
                        <tr key={id}>
                          <th scope="row">{id + 1}</th>
                          <td>{result.Name}</td>

                          <td>
                            <Link
                              className="btn btn-success ms-2"
                              to="/Developerconfig"
                            >
                              View
                            </Link>
                            {/* <Link className='btn btn-warning ms-2' to={`/edit/${result._id}`}>Update</Link> */}
                            {/* <button className='btn btn-danger ms-2'
                                            data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => deletestud(result._id)}>Delete</button> */}
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>

            {/* <div className="mt-8 border-t-2 p-5 overflow-y-auto">
          

            <div className="flex flex-row  items-center mb-5">
              <img src="src/assets/Group 5.png" height={60} width={60} alt="" />
              <h2 className="text-black font-medium text-xl ml-6">File Name</h2>
            </div>
            <div className="flex flex-row  items-center mb-5">
              <img src="src/assets/Group 5.png" height={60} width={60} alt="" />
              <h2 className="text-black font-medium text-xl ml-6">File Name</h2>
            </div>
            <div className="flex flex-row  items-center">
              <img src="src/assets/Group 5.png" height={60} width={60} alt="" />
              <h2 className="text-black font-medium text-xl ml-6">File Name</h2>
            </div> 

          </div> */}
          </div>

          <div className="flex flex-col w-1/3  border-2 border-blue-600 px-16 h-full j  ">
            <div>
              <h1 className="text-black font-bold text-2xl  mt-12">
                NEW PROJECT{" "}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center h-full ">
              <div className="border-2 border-blue-500 p-3 mt-5">
                <Link to="/config">
                  <img
                    src="src/assets/createNew.png"
                    height={50}
                    width={50}
                    alt=""
                  />
                </Link>
              </div>
              <h2 className="text-black font-semibold text-2xl mt-5">
                Create New Config
              </h2>

              <h4 className="text-gray-400 text-lg font-normal mt-5 text-center">
                Effortlessly Manage Your Projects
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home