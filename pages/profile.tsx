import { auth } from '../src/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Profile() {
  const [user] = useAuthState(auth);

  if (!user) {
    return (
      <div>
        <h1>Please log in to view your profile</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-4">
          <h1 className="text-xl font-bold mb-4">Profile</h1>
          <div className="flex flex-col items-center">
            <Image
              src={user.photoURL || '/fallback-avatar.png'}
              alt="Avatar"
              width={128}
              height={128}
              className="rounded-full"
            />
            <h2 className="text-2xl font-semibold mt-4">{user.displayName}</h2>
            <p className="text-gray-700">{user.email}</p>
          </div>
        </main>
      </div>
    </div>
  );
}
