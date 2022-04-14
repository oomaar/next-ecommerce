import { Icon } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
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
      <Link href="/">
        <LogoContainer>
          <Image
            src="/favicon.png"
            width={100}
            height={100}
            objectFit="contain"
          />
        </LogoContainer>
      </Link>
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
        <div>
          <Icon onClick={() => setShowSidebar(true)}>menu</Icon>
        </div>
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
