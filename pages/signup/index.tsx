import { signInWithGoogle } from '../../src/firebaseConfig';
import Link from 'next/link';

export default function SignUp() {
  const handleSignUp = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-center p-4">
        <h1 className="text-4xl font-semibold mb-4">Sign Up</h1>
        <p className="text-lg mb-6">Create a Jello account with your Google account.</p>
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded font-medium hover:bg-blue-600"
          onClick={handleSignUp}
        >
          Sign Up with Google
        </button>
        <p className="text-lg mt-4">
          Already have an account?{' '}
          <Link href="/login">
            <button className="text-blue-500 bg-transparent border-none outline-none">
              Log In
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
}
