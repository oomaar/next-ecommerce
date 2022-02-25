import styled from "styled-components";
import {
  mdScreen,
  SidebarWidth,
  smScreen,
  transition,
} from "../../global/GlobalStyle";

export const OverLay = styled.div`
  background: rgba(47, 47, 47, 0.5);
  position: fixed;
  right: 0;
  top: 0;
  left: ${SidebarWidth};
  bottom: 0;
  height: 100vh;
  transition: ${transition};
  transform: ${({ showSidebar }) =>
    showSidebar ? "translateX(0)" : "translateX(1000vw)"};

  @media screen and (max-width: ${mdScreen}) {
    display: none;
  }
`;

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  overflow: hidden;
  width: ${SidebarWidth};
  background-color: ${({ theme }) => theme.colors.bodyColor};
  transition: ${transition};
  transform: ${({ showSidebar }) =>
    showSidebar ? "translateX(0)" : "translateX(-1000vw)"};
  z-index: ${({ theme }) => theme.zIndex.zSidebar};
  display: flex;

  @media screen and (max-width: ${mdScreen}) {
    width: 100%;
  }
`;

export const SidebarPageContainer = styled.div`
  width: ${({ sidebarPageNumber }) => (sidebarPageNumber === 1 ? "100%" : "0")};
  transform: ${({ sidebarPageNumber }) =>
    sidebarPageNumber === 1 ? "translateX(0)" : "translateX(-1000vh)"};
  opacity: ${({ sidebarPageNumber }) => (sidebarPageNumber === 1 ? "1" : "0")};
  visibility: ${({ sidebarPageNumber }) =>
    sidebarPageNumber === 1 ? "visible" : "hidden"};
  transition: ${transition};
  overflow-x: hidden;
`;

export const SidebarPageTwoContainer = styled.div`
  width: ${({ sidebarPageNumber }) => (sidebarPageNumber === 2 ? "100%" : "0")};
  transform: ${({ sidebarPageNumber }) =>
    sidebarPageNumber === 2 ? "translateX(0)" : "translateX(1000vh)"};
  opacity: ${({ sidebarPageNumber }) => (sidebarPageNumber === 2 ? "1" : "0")};
  visibility: ${({ sidebarPageNumber }) =>
    sidebarPageNumber === 2 ? "visible" : "hidden"};
  transition: ${transition};
  overflow-x: hidden;
`;

export const PageBackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0 1rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.titleColor};
  cursor: pointer;

  span {
    transition: ${transition};
  }

  :hover span {
    transform: translateX(-0.6rem);
  }
`;

export const SidebarHeader = styled.header`
  display: flex;
  position: relative;
  gap: 0 1rem;
  align-items: center;
  width: 100%;
  padding: 1rem 0.5rem;
  background: ${({ theme }) => theme.colors.cardColor};
  color: #fff;

  p {
    font-size: 1.1rem;
    margin: 0;
  }

  .close-icon {
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.fontSemiBold};
    color: #fff;
  }

  .dark-icon {
    position: absolute;
    top: 1rem;
    right: 5rem;
    cursor: pointer;
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.fontSemiBold};
    color: #fff;
  }

  .white {
    color: #fff;
  }
`;

export const SidebarHeaderUser = styled.div`
  color: #fff;

  span {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const SidebarLinkContainer = styled.div`
  padding-left: 1rem;
`;

export const SidebarTitle = styled.p`
  color: ${({ theme }) => theme.colors.titleColor};
  font-size: ${({ theme }) => theme.typography.h2FontSize};
`;

export const SidebarList = styled.ul`
  color: ${({ theme }) => theme.colors.textColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.navBorder};
`;

export const SidebarListItem = styled.li`
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  font-size: ${({ theme }) => theme.typography.normalFontSize};
  margin: 1rem 0;
  transition: ${transition};
  cursor: pointer;

  @media screen and (max-width: ${smScreen}) {
    width: 100%;
  }
`;

export const SeeMoreList = styled.ul`
  height: ${({ moreLinks }) => (moreLinks ? "auto" : "0")};
  opacity: ${({ moreLinks }) => (moreLinks ? "1" : "0")};
  overflow: hidden;
  transition: ${transition};
`;

export const SidebarLink = styled.a`
  color: ${({ theme }) => theme.colors.textColor};
  display: block;
  font-size: ${({ theme }) => theme.typography.normalFontSize};
  margin: 1rem 0;
  transition: ${transition};
`;

export const SeeMoreLink = styled.p`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  font-size: ${({ theme }) => theme.typography.normalFontSize};

  span {
    position: absolute;
    left: 15%;
    transition: ${transition};
    transform: ${({ moreLinks }) =>
      moreLinks ? "rotate(90deg)" : "rotate(0)"};

    @media screen and (max-width: ${smScreen}) {
      left: 25%;
    }
  }
`;
