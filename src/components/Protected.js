import jwt from 'jsonwebtoken';

export default function Protected() {
  const token = localStorage.getItem('token');
  const verified = token && jwt.verify(token, 'nana1');

  function logout() {
    localStorage.removeItem('token');
    window.location.reload(false);
  }

  return (
    <div class='flex flex-col items-center justify-center h-screen'>
      <div class='bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10'>
        {verified ? 'Logged In' : 'Access Denied'}
      </div>
      {token && (
        <button
          onClick={logout}
          class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Logout
        </button>
      )}
    </div>
  );
}
