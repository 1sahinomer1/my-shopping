import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Moon, Sun } from 'Icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from 'store';
import { filterByName } from 'store/actions/productActions';
import styled from 'styled-components';

interface HeaderProps {
  theme: string;
  setTheme: (value: string) => void;
}
const Header = ({ theme, setTheme }: HeaderProps) => {
  const { basket } = useSelector((state: AppState) => state.products);

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
        <Link to="/">
          <Name>Ömer's market</Name>
        </Link>
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
        <Link to="/basket">
          <AiOutlineShoppingCart size={'2em'} />
          {basket.length}
        </Link>
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
  padding: 30px;
`;
const RightMenu = styled.section`
  width: 20%;
  display: flex;
  justify-content: space-between;
`;
const Navigation = styled.a`
  color: ${(p) => p.theme.fontColor};
  text-decoration: none;
`;
const ToggleTheme = styled.div`
  cursor: pointer;
`;
const Name = styled.a`
  color: ${(p) => p.theme.fontColor};
  font-family: 'Licorice', cursive;
  font-size: 40px;
  text-decoration: none;
`;

const Input = styled.input`
  border: none;
  width: 300px;
  border-radius: 5px;
  outline: none;
  padding: 10px;
`;
