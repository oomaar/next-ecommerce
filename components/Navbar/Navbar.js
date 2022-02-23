import { Icon } from "@material-ui/core";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../../global/GlobalStyle";
import {
  Nav,
  LogoContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
  ButtonsContainer,
} from "./styledNavbar";

export const Navbar = ({ toggleTheme, checkTheme, setShowSidebar }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <Nav>
      <LogoContainer>
        <Image
          src="/favicon.png"
          width={100}
          height={100}
          objectFit="contain"
        />
        <Icon onClick={() => setShowSidebar(true)}>menu</Icon>
      </LogoContainer>
      <SearchContainer showInput={showInput}>
        <SearchIcon
          onClick={() => setShowInput((state) => !state)}
          showInput={showInput}
        >
          <Icon>search</Icon>
        </SearchIcon>
        <SearchInput type="text" showInput={showInput} placeholder="Search" />
      </SearchContainer>
      <ButtonsContainer>
        <Button>Log in</Button>
        <Button>Sign up</Button>
        <div>
          {toggleTheme === "light" ? (
            <Icon onClick={checkTheme}>dark_mode</Icon>
          ) : (
            <Icon onClick={checkTheme}>light_mode</Icon>
          )}
        </div>
      </ButtonsContainer>
    </Nav>
  );
};
