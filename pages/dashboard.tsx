import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-4">
          <h1 className="text-xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-700">This is the dashboard page of your application.</p>
        </main>
      </div>
    </div>
  );
}
