export default function Header() {
  return (
    <div>
      <div className='header-2'>
        <nav className='bg-white py-2 md:py-4'>
          <div className='container px-4 mx-auto md:flex md:items-center'>
            <div className='flex justify-between items-center'>
              <a href='/' className='font-bold text-xl text-indigo-600'>
                Nana 1
              </a>
            </div>

            <div
              className='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'
              id='navbar-collapse'
            >
              <a
                href='/'
                className='p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300'
              >
                Protected
              </a>
              <a
                href='/'
                className='p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300'
              >
                Login
              </a>
              <a
                href='/'
                className='p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1'
              >
                Signup
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
