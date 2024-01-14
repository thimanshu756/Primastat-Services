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
            className="md:flex-1 p-4 transition-all ease-in-out duration-300"
        />
    );
};

export default BlogContent;
