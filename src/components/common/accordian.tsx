// Accordion.js
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animation for smooth opening/closing
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-200 overflow-hidden transition-all duration-500 ease-in-out">
      <button
        className="flex items-center justify-between w-full text-left text-black px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? (
          <FiMinus className="w-5 h-5" />
        ) : (
          <FiPlus className="w-5 h-5" />
        )}
      </button>
      <div ref={contentRef} className="transition-max-height duration-500 ease-in-out">
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
