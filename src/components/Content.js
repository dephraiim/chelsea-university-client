export default function Content(props) {
  return (
    <div>
      <div class='bg-indigo-100 py-6 md:py-12'>
        <div class='container px-4 mx-auto'>
          <div class='text-center max-w-2xl mx-auto'>
            <h1 class='text-5xl xl:mt-16 md:text-4xl font-medium mb-2'>
              Register for your admission here into{' '}
              <span className='text-indigo-700'>Chelsea University</span> here.
            </h1>
            <button class='bg-indigo-600 text-white py-2 px-6 rounded-full text-xl mt-6'>
              <props.link to='/register'>Get Started</props.link>
            </button>
          </div>

          <div class='md:flex md:flex-wrap md:-mx-4 mt-6 md:mt-12'>
            <div class='md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center'>
              <span class='w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3'></span>
              <h5 class='text-xl font-medium uppercase mb-4'>Login</h5>
              <p class='text-gray-600'>
                Login to your admission portal to check your admission status
              </p>
            </div>

            <div class='md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center'>
              <span class='w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3'></span>
              <h5 class='text-xl font-medium uppercase mb-4'>Register</h5>
              <p class='text-gray-600'>
                Register a new account to start a new admission process
              </p>
            </div>

            <div class='md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center'>
              <span class='w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3'></span>
              <h5 class='text-xl font-medium uppercase mb-4'>Protected</h5>
              <p class='text-gray-600'>
                See the protected part of the application. The part you access
                only if you are logged in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
