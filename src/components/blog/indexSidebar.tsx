// IndexSidebar.tsx
import React, { FC } from 'react';

interface IndexItem {
    name: string;
    id: string;
}

interface IndexSidebarProps {
    indexItems: IndexItem[];
    activeId: string;
    onIndexItemClick: (id: string) => void;
}

const IndexSidebar: FC<IndexSidebarProps> = ({ indexItems, activeId, onIndexItemClick }) => {
    return (
        // Hidden on small screens, visible on medium and larger screens
        <div className="hidden md:block md:w-1/4 lg:w-1/5 h-screen sticky top-0 overflow-auto p-4 bg-white shadow-lg border-r border-gray-200 transition-all ease-in-out duration-300">
            {indexItems.map(item => (
                <div
                    key={item.id}
                    onClick={() => onIndexItemClick(item.id)}
                    className={`cursor-pointer py-2 px-4 mb-2 rounded-md hover:bg-blue-50 ${
                        activeId === item.id ? 'font-bold text-blue-600 bg-blue-50 border-l-4 border-blue-600' : 'text-gray-700'
                    } transition-colors duration-300`}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default IndexSidebar;
