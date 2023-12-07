import { useState } from "react";
import DeveloperCard from "./DeveloperCard";
import AdminCard from "./AdminCard";

const LoginOrSignup = () => {
  const [selectedRole, setSelectedRole] = useState('developers');
  

  return (
    <div className='flex  flex-row w-full h-full justify-center items-center'>
      <div className="w-1/2 flex justify-center items-center">
        <div className='bg-white w-96 flex justify-center items-center flex-col rounded-t-lg h-auto '>
          <div className="bg-white shadow-xl rounded-lg px-4 w-full py-4  border-gray-400 border flex flex-col justify-center items-center">
            <div>
              <h2 className="text-black text-2xl font-medium mb-3 underline">CHOOSE YOUR ROLE</h2>
            </div>
            <div className={`mb-5  text-black w-full rounded-md ${selectedRole === 'developers' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`} onClick={() => setSelectedRole('developers')}>
              <h2 className="font-bold text-lg py-2 px-2 my-2 text-center">DEVELOPERS </h2>
            </div>

            <div className={` text-black w-full rounded-md mb-4 ${selectedRole === 'admin' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`} onClick={() => setSelectedRole('admin')}>
              <h2 className="font-bold text-lg py-2 px-10  my-2 text-center">ADMIN</h2>
            </div>
          </div>

        </div>
      </div>

      <div className='w-1/2   flex justify-center items-center '>
        {
          (selectedRole === 'developers')?(<DeveloperCard />):(<AdminCard/>)
        }
      
        

      </div>
    </div>
  )
}

export default LoginOrSignup