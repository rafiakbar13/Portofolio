import React from 'react'

interface SectionHeadingProps {
    title: string;
    icon?: React.ReactNode;
    className?: string;
};

const SectionHeading = ({ title, icon, className = '' }: SectionHeadingProps) => {
    return (
        <div className={`flex items-center justify-center mt-10 gap-x-3 text-3xl font-semibold dark:text-white ${className}`}>
            {icon && <>{icon}</>}
            <h2>{title}</h2>
        </div>
    )
}

export default SectionHeading