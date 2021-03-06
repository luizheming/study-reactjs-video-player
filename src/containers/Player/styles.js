import styled from 'styled-components'

export const Container = styled.div`
	background: ${props => props.theme.bgcolor};
	border: ${props => props.theme.border};
	max-width: 1800px;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	transition: all 0.5s ease;

	@media screen and (max-width: 1400px) {
    flex-direction: column;
  }
`