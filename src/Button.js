import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props => (props.Active ? 'lightgrey' : props.isActive)};
  ${props => props.isActive && 'color: darksalmon;'}
  border: 1px solid black;
  width: 100%;
  padding: 8px;
  text-decoration: none;
  color: inherit;
  text-align: center;

  &.active {
    background-color: #333;
    color: white;
  }
`
