import { Moon, Sun } from 'Icons';
import { useEffect } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  theme: string;
  setTheme: (value: string) => void;
}
const Header = ({ theme, setTheme }: HeaderProps) => {
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    localStorage.setItem('theme', theme);
  };
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme === 'light' ? setTheme('dark') : setTheme('light');
  }, [setTheme]);
  return (
    <Wrapper>
      <section>
        <Name>Ömer's market</Name>
      </section>
      <RightMenu>
        <Navigation>favoriler</Navigation>
        <Navigation>basket</Navigation>
        <ToggleTheme onClick={themeToggler}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </ToggleTheme>
      </RightMenu>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  background-color: ${(p) => p.theme.headerColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  padding: 30px;
`;
const RightMenu = styled.section`
  width: 40%;
  display: flex;
  justify-content: space-between;
`;
const Navigation = styled.a`
  color: ${(p) => p.theme.fontColor};
`;
const ToggleTheme = styled.div`
  cursor: pointer;
`;
const Name = styled.h1`
  color: ${(p) => p.theme.fontColor};
  font-family: 'Licorice', cursive;
  font-size: 40px;
`;
