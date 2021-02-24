import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props => (props.Active ? 'lightgrey' : props.isActive)};
  ${props => props.isActive && 'color: darksalmon;'}
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
`
