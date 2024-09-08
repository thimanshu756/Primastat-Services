// components/ServicesDropdown.tsx
import React, { useRef, FC } from 'react';
import useOutsideClicker from '../../../customHooks/outSideClicker';
import NavBarLink from './navBarLink';

interface SubRouteDetail {
  name: string;
  route: string;
}

interface ServicesDropdownProps {
  services: SubRouteDetail[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServicesDropdown: FC<ServicesDropdownProps> = ({ services, isOpen, setIsOpen }) => {
  const servicesRef = useRef<HTMLDivElement>(null);
  useOutsideClicker(servicesRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={servicesRef}>
      <button
        className="text-black px-3 py-2 rounded-md text-sm font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        Services
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-1 z-10 min-w-max whitespace-nowrap">
          {services.map(({ name, route }) => (
            <NavBarLink key={route} name={name} route={route} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
