import React, { useState } from 'react';
import { ChevronDown, X } from 'react-feather';

import { Typography } from '../';
import { OptionsItem, OptionsList, SelectAction, SelectClear, SelectTrigger, SelectWrapper } from './Select.styled';

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
		<SelectWrapper>
			<SelectTrigger>
				<Typography component='span'>{selected}</Typography>
				<SelectAction>
					<SelectClear onClick={handleClear}>
						<X size={17} />
					</SelectClear>
					<ChevronDown size={17} />
				</SelectAction>
			</SelectTrigger>
			<OptionsList>
				{list.map((item) => (
					<OptionsItem key={item} onClick={(e) => handleSelect(e)}>
						{item}
					</OptionsItem>
				))}
			</OptionsList>
		</SelectWrapper>
	);
};
