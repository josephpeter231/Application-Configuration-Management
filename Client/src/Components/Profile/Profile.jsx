import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field } from 'formik';
import './profile.css';

const Profile = () => {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "../Intro";
  };

  const initialValues = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '********',
    adminKey: '******',
  };

  const [isEditable, setIsEditable] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleUpdateProfile = () => {
    // Here, you can perform an API call to update the user's profile with the form values
    // For demonstration, let's just display a success message:
    setSuccessMessage('Your Profile is successfully updated');
    setIsEditable(false); // Disable editing after the update
  };

  return (
    <div className='Profile_cont'>
      <div className='Profile_nav_top'>
        <div className='Profile_title'>
          <h1>Your Profile</h1>
        </div>
          <div className='profile_navList'>
             <ul>
              <li>
                <a href="#message">
                  <span className="icon-count">29</span>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </li>
              <li>
                <a href="#notification">
                  <span className="icon-count">59</span>
                  <FontAwesomeIcon icon={faBell} size="2x" />
                </a>
              </li>
              <li>
              <button onClick={logOut} className="btn btn-primary">
          Log Out<FontAwesomeIcon icon={faSignOutAlt} size="2x" />
        </button>
                <a href="#sign-out">
                  <FontAwesomeIcon icon={faSignOutAlt} size="2x" />
                </a>
              </li>
            </ul>
          </div>
      </div>
      <div className='Profile_sidenav'>
        <div className='Profile_img'>
           <img src="https://imdezcode.files.wordpress.com/2020/02/imdezcode-logo.png" alt="" width="100" height="100"/>
        </div>
        <div className='Profile_name'>
          User_Name
        </div>
        <div className='Profile_job'>
          Developer
        </div>
         <div className="Profile_sidenav-url">
            <div className="Profile_url">
                <a href="#profile" className="active">Profile</a>
                <hr align="center"/>
            </div>
            <div className="Profile_url">
                <a href="#settings">Settings</a>
                <hr align="center"/>
            </div>
          </div>
      </div>
       <div className='Profile_main'>
        <h2>Identity</h2>
        <div className='Profile_form_cont'>
          <FontAwesomeIcon
            icon={faPen}
            className={`fa-xs edit ${isEditable ? 'editable' : ''}`}
            onClick={() => setIsEditable(!isEditable)}
          />
          <Formik initialValues={initialValues} onSubmit={handleUpdateProfile}>
            <Form>
              <div>
                <label htmlFor="name">Name:</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={`Profile_form_field ${isEditable ? 'editable' : ''}`}
                  readOnly={!isEditable}
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`Profile_form_field ${isEditable ? 'editable' : ''}`}
                  readOnly={!isEditable}
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className={`Profile_form_field ${isEditable ? 'editable' : ''}`}
                  readOnly={!isEditable}
                />
              </div>
              <div>
                <label htmlFor="adminKey">Admin Key:</label>
                <Field
                  type="password"
                  id="adminKey"
                  name="adminKey"
                  className={`Profile_form_field ${isEditable ? 'editable' : ''}`}
                  readOnly={!isEditable}
                />
              </div>
              <button className='Update_btn' type="submit" disabled={!isEditable}>
                Update Profile
              </button>
            </Form>
          </Formik>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
        </div>
      </div>
 
    </div>
  )
}

export default Profile