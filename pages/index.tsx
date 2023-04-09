import Link from 'next/link';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-4">
          <h1 className="text-xl font-bold mb-2">Welcome to the Homepage</h1>
          <p className="text-gray-700">This is the main page of your application.</p>
        </main>
      </div>
    </div>
  );
}
