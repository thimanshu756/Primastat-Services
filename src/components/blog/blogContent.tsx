// BlogContent.tsx
import React, { FC } from 'react';

interface BlogContentProps {
    htmlContent: string;
    contentRef: React.RefObject<HTMLDivElement>;
}

const BlogContent: FC<BlogContentProps> = ({ htmlContent, contentRef }) => {
    return (
        <div
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
            className="md:flex-1 w-full md:w-3/4 p-4 transition-all ease-in-out duration-300 mr-0 md:mr-[10vw]"
        />
    );
};

export default BlogContent;
