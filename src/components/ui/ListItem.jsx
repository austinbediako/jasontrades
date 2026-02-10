import React from 'react';
import Heading from './Heading';
import Text from './Text';

const ListItem = ({ icon, title, description, badge, className = "", ...props }) => {
    return (
        <div className={`flex items-start md:items-center p-6 gap-6 hover:bg-white/5 transition-colors group ${className}`} {...props}>
             {icon && (
                <div className="flex-shrink-0">
                    {icon}
                </div>
             )}
            <div className="flex-grow">
                 <Heading level={4}>{title}</Heading>
                 <Text variant="small" className="text-gray-500 mt-1">{description}</Text>
            </div>
            {badge && (
                <div className="hidden md:block text-right font-mono text-xs text-gray-600 group-hover:text-primary transition-colors">
                    {badge}
                </div>
            )}
        </div>
    );
};

export default ListItem;
