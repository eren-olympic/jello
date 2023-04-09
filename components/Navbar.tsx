import { auth } from '../src/firebaseConfig';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from 'next/image';

export default function Navbar() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const handleLogout = async () => {
    if (confirm('Are you sure you want to log out?')) {
      await auth.signOut();
      router.push('/login');
    }
  };

  return (
    <header className="bg-blue-500 p-4 flex items-center">
      <Link href="/">
        <button className="text-white font-bold text-lg">Jello</button>
      </Link>
      {user && (
        <div className="ml-auto">
          <Image
            src={user.photoURL || '/fallback-avatar.png'}
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full cursor-pointer"
            onClick={handleLogout}
          />
        </div>
      )}
    </header>
  );
}
