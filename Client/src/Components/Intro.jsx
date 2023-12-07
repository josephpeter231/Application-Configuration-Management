import '../App.css'

import { Link} from 'react-router-dom';

const Intro = () => {
  return (

    <div className="mx-10 h-full flex flex-col items-center">


      <div className='mt-10 header flex flex-row justify-around'>
        <div className='flex flex-row mr-12 ml-16'>
          <a  className='text-black flex flex-row justify-center items-center font-bold text-xl mr-16 '>ACM
           <img src="src/assets/acm2.png" className='ml-2' height={30} width={30} alt="" />
          </a>
          <a href="" className='text-black text-xl justify-center items-center font-semibold mr-16 hover:text-blue-600'>Products</a>
          <a href="" className='text-black text-xl justify-center items-center font-semibold mr-16 hover:text-blue-600'>Solutions</a>
          <a href="" className='text-black text-xl justify-center items-center font-semibold mr-16 hover:text-blue-600'>About US</a>
        </div>
        <div className='flex flex-row'>
        <Link to="/loginOrSignup">
          <a href="" className='text-black text-xl justify-center items-center font-semibold mr-16 hover:text-blue-600'>For Developers</a>
          <a href="" className='text-black text-xl justify-center items-center font-semibold  hover:text-blue-600'>For Admin</a>
          </Link>
        </div>
      </div>

      

      <div className=" flex flex-row h-full">

        <div className="h-full flex justify-center items-center mr-20">
          <img src = "src/assets/acm2.png" height={200} width={200} alt="" className=' '/> 
          
        </div>
        <div className=" flex flex-col justify-center ">
          <div className=" flex flex-col ">
            <h1 className="introHeaderText text-black font-bold text-4xl">Streamline, Control, and Conquer</h1>
            <h1 className="introHeaderText text-black font-bold text-4xl my-2.5 "> Your Configuration Management </h1>
            <h1 className="introHeaderText text-black font-bold text-4xl text-left"> Solution !!! </h1>
          </div>
          <div className='flex justify-end'>
            <Link to="/loginOrSignup">
              <button className='text-white bg-blue-600 px-4 py-2 rounded-md mt-7 text-xl'>Get Started</button>
            </Link>
          </div> 
        </div>
      </div>

      
    </div>
  )
}

export default Intro