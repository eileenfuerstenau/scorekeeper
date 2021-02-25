import Button from './Button'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation({ onNavigate, currentPage }) {
  return (
    <Nav>
      <Button as={NavLink} exact to="/">
        Create
      </Button>
      <Button as={NavLink} to="/history">
        History
      </Button>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
`
