import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div className='flex min-h-[100dvh] items-center justify-center px-4 dark:bg-gray-950'>
      <div className='w-full max-w-md space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold'>Welcome back</h2>
          <p className='text-gray-500 dark:text-gray-400'>
            Sign in to your account
          </p>
        </div>
        <form className='space-y-4'>
          <div>
            <label
              className='block text-sm font-medium text-gray-700 dark:text-gray-300'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-500'
              id='email'
              placeholder='name@example.com'
              type='email'
            />
          </div>
          <button
            className='w-full rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-500 dark:hover:bg-gray-400 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900'
            type='submit'
          >
            Sign in
          </button>
        </form>
        <div className='text-center text-sm text-gray-500 dark:text-gray-400'>
          Don't have an account?
          <Link
            className='font-medium text-gray-900 hover:underline dark:text-gray-300'
            to='#'
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
