import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="bg-gray-100 p-4">
      <ul>
        <li>
          <Link href="/">
            <button className="block py-2 px-4 hover:bg-gray-200">Home</button>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <button className="block py-2 px-4 hover:bg-gray-200">Dashboard</button>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
