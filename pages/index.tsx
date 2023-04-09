import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="text-center p-4">
        <h1 className="text-4xl font-semibold mb-4">Welcome to Jello</h1>
        <p className="text-lg mb-6">
          A gamification task tracking system that helps you stay motivated and organized.
        </p>

        <div className="flex justify-center space-x-4">
          <Link href="/signup">
            <button className="bg-blue-500 text-white px-6 py-2 rounded font-medium hover:bg-blue-600">
              Sign Up
            </button>
          </Link>
          <Link href="/login">
            <button className="bg-white text-blue-500 border-2 border-blue-500 px-6 py-2 rounded font-medium hover:bg-blue-100">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
