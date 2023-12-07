
import { Formik, Form, Field } from 'formik';

const Profile = () => {

  const initialValues = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '********',
    adminKey: '******',
  };

  return (
    <div className='text-black'>
      <h2>User Profile</h2>
      <Formik initialValues={initialValues} >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
          </div>
          <div>
            <label htmlFor="adminKey">Admin Key:</label>
            <Field type="password" id="adminKey" name="adminKey" />
          </div>
          <button type="submit">Update Profile</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Profile