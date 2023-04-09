import { signInWithGoogle } from '../src/firebaseConfig';
import Link from 'next/link';

export default function Login() {
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-center p-4">
        <h1 className="text-4xl font-semibold mb-4">Log In</h1>
        <p className="text-lg mb-6">Log in to Jello with your Google account.</p>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded font-medium hover:bg-blue-600"
          onClick={handleLogin}
        >
          Log In with Google
        </button>
        <p className="text-lg mt-4">
          Don&apos;t have an account?{' '}
          <Link href="/signup">
            <button className="text-blue-500 bg-transparent border-none outline-none">
              Sign Up
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
