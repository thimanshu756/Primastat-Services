import React, { useRef, useState, useEffect, FC } from 'react';
import IndexSidebar from './indexSidebar';
import BlogContent from './blogContent';

interface IndexItem {
  name: string;
  id: string;
}

interface BlogComponentProps {
  htmlContent: string;
  indexItems: IndexItem[];
}

const BlogComponent: FC<BlogComponentProps> = ({ htmlContent, indexItems }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>('');

  const handleScroll = () => {
    const currentSections = indexItems
      .map(item => {
        const element = document.getElementById(item.id);
        return element ? { id: item.id, offsetTop: element.offsetTop } : null;
      })
      .filter(Boolean); // Filter out null values

    if (currentSections.length === 0) {
      return; // Exit early if there are no sections
    }

    const currentSection = currentSections.reduce((closest, section) => {
      // Ensuring section is not null
      if (!section) return closest;

      const delta = Math.abs(section.offsetTop - window.scrollY);
      if (!closest || delta < Math.abs(closest.offsetTop - window.scrollY)) {
        return section;
      }
      return closest;
    }, null); // Start with null as the initial value

    if (currentSection) {
      setActiveId(currentSection.id);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white text-gray-800 p-8 md:p-16">
      {indexItems.length > 0 && (
        <IndexSidebar
          indexItems={indexItems}
          activeId={activeId}
          onIndexItemClick={scrollToElement}
        />
      )}
      <BlogContent
        htmlContent={htmlContent}
        contentRef={contentRef}
      />
    </div>
  );
};

export default BlogComponent;
