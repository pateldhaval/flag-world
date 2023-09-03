import styled from '@emotion/styled';

export const PageHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
	margin-bottom: 56px;

	@media (max-width: 767px) {
		flex-direction: column;
		align-items: start;
	}
`;
