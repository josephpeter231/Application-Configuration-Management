import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Edit() {
  const navigate = useNavigate();

  const [inputdata, setInputdata] = useState({
    name: "",
    version: "",
    field: {
      fieldlabel: "",
      value: "",
      editAccess: false,
    },
  });

  // onchange function
  const setstud = (e) => {
    const { name, value } = e.target;
    setInputdata((prestud) => {
      return {
        ...prestud,
        [name]: value,
      };
    });
  };

  // get single data student
  const { id } = useParams();
  console.log(id);

  const getstuddata = async () => {
    try {
      const res = await fetch(`http://localhost:5000/getstud/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (res.status === 422 || !data) {
        console.log("error ");
      } else {
        setInputdata(data);
        console.log("get data");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    getstuddata();
  }, [id]);

  // update student Data
  const updatestud = async (e) => {
    e.preventDefault();

    const { name, version, field } = inputdata;
    const { fieldlabel, value } = field;

    const res2 = await fetch(`http://localhost:5000/updatestud/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        version,
        fields,
      }),
    });

    const data2 = await res2.json();
    setInputdata(data2);

    toast.success("Please wait  !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setTimeout(() => {
      navigate("/Home");
    }, 3000);
  };

  return (
    <div className="container mt-5">
      <h4>Edit Configuration</h4>
      <div className="underline1"></div>
      <form className="mt-5 shadow p-5 w-75">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Name"
            onChange={setstud}
            name="name"
            value={inputdata.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Version
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Version"
            onChange={setstud}
            name="version"
            value={inputdata.version}
          />
        </div>
        {/* <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            FieldLabel
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Enter FieldLabel'
            onChange={(e) => setstud({ target: { name: 'fieldlabel', value: e.target.value } })}
            name='fieldlabel'
            
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleFormControlInput1' className='form-label'>
            Value
          </label>
          <input
            className='form-control'
            id='exampleFormControlInput1'
            placeholder='Enter Value'
            onChange={(e) => setstud({ target: { name: 'value', value: e.target.value } })}
            name='value'
            
          />
        </div> */}
        <div className="d-flex">
          <button className="btn btn-primary" onClick={updatestud}>
            Update Config
          </button>
          <ToastContainer />
          <NavLink className="btn btn-primary ms-auto" to="/Home">
            Back to Home
          </NavLink>
        </div>
      </form>
    </div>
  );
}
