import { Icon } from "@material-ui/core";
import Image from "next/image";
import {
  Nav,
  LogoContainer,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./styledNavbar";

export const Navbar = () => {
  return (
    <Nav>
      <LogoContainer>
        <Image
          src="/favicon.png"
          width={100}
          height={100}
          objectFit="contain"
        />
      </LogoContainer>
      <SearchContainer>
        <SearchIcon>
          <Icon>search</Icon>
        </SearchIcon>
        <SearchInput type="text" />
      </SearchContainer>
    </Nav>
  );
};
