export default function Register() {
  return (
    <div>
      <div class='flex h-screen bg-indigo-700'>
        <div class='w-full max-w-xs m-auto bg-indigo-100 rounded p-5'>
          <header>
            <img
              alt='logo'
              class='w-20 mx-auto mb-5'
              src='https://img.icons8.com/fluent/344/year-of-tiger.png'
            />
          </header>
          <form>
            <div>
              <label class='block mb-2 text-indigo-500' for='username'>
                Username
              </label>
              <input
                class='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
                type='text'
                name='username'
              />
            </div>
            <div>
              <label class='block mb-2 text-indigo-500' for='email'>
                Email
              </label>
              <input
                class='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
                type='text'
                name='email'
              />
            </div>
            <div>
              <label class='block mb-2 text-indigo-500' for='password'>
                Password
              </label>
              <input
                class='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
                type='password'
                name='password'
              />
            </div>
            <div>
              <input
                class='w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded'
                type='submit'
              />
            </div>
          </form>
          <footer>
            <a
              href='/login'
              class='text-indigo-700 hover:text-pink-700 text-sm float-right'
            >
              Login
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
