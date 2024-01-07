import React, { useState,  ReactNode } from "react";

import { FiPlus, FiMinus } from "react-icons/fi";
interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-between w-full text-left text-black block px-3 py-2 rounded-md text-base font-medium "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? (
          <FiMinus className="w-5 h-5" />
        ) : (
          <FiPlus className="w-5 h-5" />
        )}
      </button>
      {isOpen && <div className="p-5">{children}</div>}
    </div>
  );
};
export default Accordion