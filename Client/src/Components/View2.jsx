import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function View() {
  const [getstud, setGetstud] = useState({});
  const [editMode, setEditMode] = useState(false);
  // const [editedFields, setEditedFields] = useState([]);
  

  const { id } = useParams();
  console.log(id);
  const updateData = async () => {
    try {
      axios.patch(`http://localhost:5000/updatestud/${id}`, getstud);
      console.log(getstud);
    } catch (e) {
      console.log(e);
    }
  };

  const getstuddata = async () => {
    try {
      const res = await fetch(`http://localhost:5000/getstud/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);

      const data = await res.json();
      console.log(data);

      if (res.status === 422 || !data) {
        console.log("error");
      } else {
        setGetstud(data);
        console.log("get data");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    getstuddata();
    updateData();
  }, [id]);

  const editSaveModeToggle = () => {
    setEditMode(!editMode);
    updateData();
  };

  const handleFieldChange = (index, fieldName, value) => {
    const updatedFields = [...getstud.fields]; // Using getstud.fields directly to retain the original data
    updatedFields[index][fieldName] = value;
    setGetstud({ ...getstud, fields: updatedFields }); 
  };

  //  const save = (values) => {
  //    // Handle form submission here
  //    console.log(values);
  //    const { Name, version, fields } = values;
  //    const save =()=> fetch("http://localhost:5000/addstud", {
  //      method: "PATCH",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify({
  //        Name,
  //        version,
  //        fields,
  //      }),

  //   })

  return (
    <div>
      <div className="flex flex-col items-center h-full">
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
              PROJECT NAME
            </a>
          </div>
          <div className="flex justify-center items-center ml-auto self-end">
            <Link to="/profile">
              <img src="src/assets/profile.png" height={50} width={50} alt="" />
            </Link>
          </div>
        </div>

        <div className="w-full px-20">
          <div className="flex flex-col border-2 border-gray-200 w-full px-8 mb-7 pb-8">
            <div>
              <h2 className="text-gray-700 font-semibold text-2xl mt-10 underline mb-8">
                CONFIGURATION:
              </h2>
            </div>

            <div className="p-4 bg-gray-100 rounded-md shadow-md mb-5">
              <h2 className="text-xl font-semibold text-black mb-5">Name:</h2>
              <div className="py-2 px-2 rounded border border-gray-300  text-black ">
                {getstud.Name}
              </div>
            </div>

            <div className="p-4 bg-gray-100 rounded-md shadow-md">
              <h2 className="text-xl font-semibold text-black mb-5">
                Version:
              </h2>
              <div className="py-2 px-2 rounded border border-gray-300  text-black ">
                {getstud.version}
              </div>
            </div>
            {getstud.fields &&
              getstud.fields.map((field, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-100 rounded-md shadow-md mt-5"
                >
                  <input
                    type="text"
                    name={`fields[${index}].fieldLabel`}
                    value={field.fieldLabel} // Use value instead of placeholder
                    onChange={(e) =>
                      handleFieldChange(index, "fieldLabel", e.target.value)
                    }
                    className="py-2 px-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-black mb-4"
                    disabled={!editMode || field.editAccess === false}
                  />
                  <input
                    type="text"
                    value={field.fieldValue} // Use value instead of placeholder
                    name={`fields[${index}].fieldValue`}
                    onChange={(e) =>
                      handleFieldChange(index, "fieldValue", e.target.value)
                    }
                    className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-black"
                    disabled={!editMode || field.editAccess === false}
                  />
                </div>
              ))}

            <div className="mt-4">
              {editMode ? (
                <button
                  className="bg-green-600 text-white px-4 py-2 block rounded-md max-w-xs"
                  onClick={() => {
                    editSaveModeToggle();
                  }}
                >
                  Save Changes
                </button>
              ) : (
                <button
                //   className="bg-red-600 text-white px-8 py-2 flex rounded-md max-w-xs"
                  onClick={editSaveModeToggle}
                >
                
                </button>
              )}
              <Link className="btn btn-primary mt-5" to="/DeveloperHome">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
