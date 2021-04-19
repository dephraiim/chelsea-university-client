export default function Header() {
  return (
    <div>
      <div class='header-2'>
        <nav class='bg-black py-2 md:py-4'>
          <div class='container px-4 mx-auto md:flex md:items-center'>
            <div class='flex justify-between items-center'>
              <a href='/' class='font-bold text-xl text-white'>
                Nana 1
              </a>
              <button
                class='border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden'
                id='navbar-toggle'
              >
                <i class='fas fa-bars'></i>
              </button>
            </div>

            <div
              class='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'
              id='navbar-collapse'
            >
              <a
                href='/'
                class='p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-white hover:text-black transition-colors duration-300'
              >
                Protected
              </a>
              <a
                href='/'
                class='p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-white hover:text-black transition-colors duration-300'
              >
                Login
              </a>
              <a
                href='/'
                class='p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-white rounded hover:bg-white hover:text-black hover:border-black transition-colors duration-300 mt-1 md:mt-0 md:ml-1'
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
