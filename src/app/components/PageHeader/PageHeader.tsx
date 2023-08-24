import './PageHeader.css';

import React from 'react';

interface IProps {
	children: React.ReactNode;
}

export const PageHeader: React.FC<IProps> = ({ children }) => {
	return <div className='page-header'>{children}</div>;
};
