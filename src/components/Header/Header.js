import styled from 'styled-components/macro';

const Header = () => {
  return (
    <header>
      <Navbar>
        <NavList>
          <li>
            <NavLink href="#">Articles</NavLink>
          </li>
          <li>
            <NavButton>Subscribe</NavButton>
          </li>
        </NavList>
      </Navbar>
    </header>
  );
};

const Navbar = styled.nav`
  background: var(--purple--gradient);
  color: var(--light--color);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 1.5em 2em;
  padding: 1.5em 1vw;
`;

const NavLink = styled.a`
  display: inline-block;
  padding: 0.85em 1.5em;
  margin-right: 0.5em;
  font-size: 0.95em;
  text-decoration: none;
  color: currentColor;
  letter-spacing: 0.5px;
  border-radius: 3px;

  &:hover {
    color: var(--dark--black);
  }

  &:active {
    background-color: var(--dark--blue);
    color: var(--light--color);
  }
`;

const NavButton = styled.button`
  display: inline-block;
  padding: 0.85em 1.5em;
  margin-right: 0.5em;
  font-size: 0.95em;
  color: currentColor;
  letter-spacing: 0.5px;
  border-radius: 3px;
  border: none;
  background-color: var(--hot--pink);
  cursor: pointer;

  &:hover {
    color: var(--dark--black);
  }

  &:active {
    background-color: var(--dark--blue);
    color: var(--light--color);
  }
`;

export default Header;
