import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Moon, Sun } from 'Icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from 'store';
import { filterByName } from 'features/productSlice';

interface HeaderProps {
  theme: string;
  setTheme: (value: string) => void;
}
const Header = ({ theme, setTheme }: HeaderProps) => {
  const { basket } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState('');

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
        <StyledNameLink to="/">Ömer's market</StyledNameLink>
      </section>
      <Input
        type="search"
        name=""
        id=""
        value={inputValue}
        onChange={handleSearch}
        data-testid="searchInput"
      />

      <RightMenu>
        <Navigation>favoriler</Navigation>
        <Link to="/basket">
          <IconWrapper>
            <ShoppingIcon size={'2.5em'} />
            <BasketCount>{basket.length}</BasketCount>
          </IconWrapper>
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
  align-items: center;
`;
const Navigation = styled.a`
  color: ${(p) => p.theme.fontColor};
  text-decoration: none;
`;
const ToggleTheme = styled.div`
  cursor: pointer;
`;
const StyledNameLink = styled(Link)`
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
const IconWrapper = styled.div`
  position: relative;
`;
const ShoppingIcon = styled(AiOutlineShoppingCart)`
  color: ${(p) => p.theme.fontColor};
`;
const BasketCount = styled.span`
  color: ${(p) => p.theme.fontColor};
  position: absolute;
  font-size: 12px;
  font-weight: 800;
  top: 0;
  left: 0;
  margin: 8px 20px;
`;
