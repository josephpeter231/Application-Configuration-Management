
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Allstud() {
  const [getstud, SetGetstud] = useState([]);


  // Get student Data
  const getstuddata = async () => {
    try {
      const res = await fetch("http://localhost:5000/getstud", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
        console.log("error");
      } else {
        SetGetstud(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getstuddata();
  }, []);

  // Delete student data
  const deletestud = async (id) => {
    try {
      const res2 = await fetch(`http://localhost:5000/deletestud/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const deletedata = await res2.json();

      if (res2.status === 422 || !deletedata) {
        console.log("error");
      } else {
        getstuddata();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Search Student

  return (
    <div>
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
          <a
            href=""
            className="text-white text-xl  items-center font-semibold font-sans text-center"
          >
            CONFIGURATION INFO
          </a>
        </div>
        <div className="flex justify-center items-center ml-auto self-end">
          <Link to="/loginOrSignup">
            <img src="src/assets/profile.jpg" height={50} width={50} alt="" />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="d-flex"></div>
        <div className="underline"></div>
        <table className="table table-bordered mt-5">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Version</th>

              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody>
            {getstud.map((result, id) => (
              <tr key={id}>
                <th scope="row">{id + 1}</th>
                <td>{result.Name}</td>
                <td>{result.version}</td>
                {/* Assuming result.fields is an array */}
                {/* {result.fields.map((field, fieldIndex) => (
        <React.Fragment key={fieldIndex}>
          <td>{field.fieldLabel}</td>
          <td>{field.Value}</td>
        </React.Fragment>
      ))} */}
                <td>
                  <Link
                    className="btn btn-success ms-2"
                    to={`/view2/${result._id}`}
                  >
                    View
                  </Link>
                  {/* <Link className='btn btn-warning ms-2' to={`/edit/${result._id}`}>
          Update
        </Link> */}
                  <button
                    className="btn btn-danger ms-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => deletestud(result._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex">
          <NavLink
            className="btn btn-primary ms-auto mb-5 mr-5 mt-2"
            to="/Home"
          >
            Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
