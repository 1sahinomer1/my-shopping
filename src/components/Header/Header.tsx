import { Moon, Sun } from 'Icons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByName } from 'store/actions/productActions';
import styled from 'styled-components';

interface HeaderProps {
  theme: string;
  setTheme: (value: string) => void;
}
const Header = ({ theme, setTheme }: HeaderProps) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    localStorage.setItem('theme', theme);
  };
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme === 'light' ? setTheme('dark') : setTheme('light');
  }, [setTheme]);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
    dispatch(filterByName(e.currentTarget.value));
  };
  return (
    <Wrapper>
      <section>
        <Name>Ömer's market</Name>
      </section>
      <Input
        type="search"
        name=""
        id=""
        value={inputValue}
        onChange={handleSearch}
      />

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
  width: 20%;
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

const Input = styled.input`
  border: none;
  width: 300px;
  border-radius: 5px;
  outline: none;
  padding: 10px;
`;
