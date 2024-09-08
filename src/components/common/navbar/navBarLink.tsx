// components/NavBarLink.tsx
import Link from 'next/link';
import React from 'react';

interface NavBarLinkProps {
  name: string;
  route: string;
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ name, route }) => {
  return (
    <Link href={route}>
      <p className="text-black px-3 py-2 rounded-md text-sm font-medium hover:text-blue-600">
        {name}
      </p>
    </Link>
  );
};

export default NavBarLink;
