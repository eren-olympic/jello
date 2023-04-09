import { auth } from '../src/firebaseConfig';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { useOnClickOutside } from '../src/useOnClickOutside';

export default function Navbar() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    if (confirm('Are you sure you want to log out?')) {
      await auth.signOut();
      router.push('/login');
    }
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useOnClickOutside(dropdownRef, () => {
    setDropdownVisible(false);
  });

  return (
    <header className="bg-blue-500 p-4 flex items-center">
      <Link href="/">
        <button className="text-white font-bold text-lg">Jello</button>
      </Link>
      {user && (
        <div className="ml-auto relative">
          <Image
            src={user.photoURL || '/fallback-avatar.png'}
            alt="Avatar"
            width={32}
            height={32}
            className="rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownVisible && (
            <div ref={dropdownRef} className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md p-2">
              <p className="text-black text-sm">Hello, {user.displayName}</p>
              <hr className="my-2" />
              <Link href="/profile">
                <button className="block py-1 px-2 hover:bg-gray-200">Profile</button>
              </Link>
              <button
                className="w-full text-left py-1 px-2 hover:bg-gray-200"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
