import {Button, Label, TextInput} from "flowbite-react"
import { Link } from "react-router-dom"



export const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md: items-center gap-5">
        <div className="">
        <Link to='/' className=' font-bold dark:text-white text-4xl'>
        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 rounded-lg text-white'>Admin's</span>
        Blog
        </Link>
        <p className="text-sm mt-5">
          This is demo project. you can signup with your email and google
        </p>
        </div>  
        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
          <div>
          <Label value="Your username"/>
          <TextInput type="text" placeholder="username" id="username"/>
        </div>
        <div>
          <Label value="Your Email"/>
          <TextInput type="text" placeholder="name@company.com" id="Email"/>
        </div>
        <div>
          <Label value="Your password"/>
          <TextInput type="text" placeholder="password" id="password"/>
        </div>
        <Button type="submit" gradientDuoTone="purpleToPink">Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Already have an Account</span>
            <Link to='/signin' className="text-blue-500">
            Sign-in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
