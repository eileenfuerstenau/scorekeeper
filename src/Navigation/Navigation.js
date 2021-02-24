import Button from '../Button'
import styled from 'styled-components/macro'

export default function Navigation({ onNavigate, activeIndex }) {
  return (
    <Nav className="Navigation">
      <Button isActive={activeIndex === 0} onClick={() => onNavigate(0)}>
        {' '}
        Play
      </Button>
      <Button isActive={activeIndex === 1} onClick={() => onNavigate(1)}>
        {' '}
        History{' '}
      </Button>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
`
