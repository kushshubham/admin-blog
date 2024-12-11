import {Navbar, TextInput} from 'flowbite-react'
import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai' 
export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 rounded-lg text-white'>Admin's</span>
        Blog
        </Link>
        <form>
            <TextInput
            type='text'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            />
        </form>
    </Navbar>
  )
}
