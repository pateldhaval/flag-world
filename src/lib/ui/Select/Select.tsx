import './Select.css';

import React, { useState } from 'react';
import { ChevronDown, X } from 'react-feather';

interface IProps {
	label: string;
	list: string[];
	onSelect?: (selected: string) => void;
	onClear?: () => void;
}

export const Select: React.FC<IProps> = ({ label, list, onSelect, onClear }) => {
	const [selected, setSelected] = useState(label);

	const handleSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const selected = (e.target as HTMLButtonElement).textContent || '';
		setSelected(selected);
		onSelect && onSelect(selected);
	};

	const handleClear = () => {
		setSelected(label);
		onClear && onClear();
	};

	return (
		<div className='select-root'>
			<button className='trigger'>
				<span>{selected}</span>
				<span className='action'>
					<span className='clear' onClick={handleClear}>
						<X size={17} />
					</span>
					<ChevronDown size={17} />
				</span>
			</button>
			<ul>
				{list.map((item) => (
					<li key={item}>
						<button className='option' onClick={(e) => handleSelect(e)}>
							{item}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
