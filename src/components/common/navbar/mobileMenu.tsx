// components/MobileMenu.tsx
import React, { FC } from 'react';
import Accordion from '../accordian';
import NavBarLink from './navBarLink';

interface SubRouteDetail {
  name: string;
  route: string;
}

interface NavBarList {
  name: string;
  route: string;
  subRoute: boolean;
  subRouteDetails?: SubRouteDetail[];
}

interface MobileMenuProps {
  isOpen: boolean;
  navBarList: NavBarList[];
}

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, navBarList }) => {
  return (
    <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navBarList.map(({ name, route, subRoute, subRouteDetails }) => (
          subRoute && subRouteDetails ? (
            <Accordion key={name} title={name}>
              {subRouteDetails.map(subItem => (
                <NavBarLink key={subItem.route} {...subItem} />
              ))}
            </Accordion>
          ) : (
            <NavBarLink key={route} name={name} route={route} />
          )
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
