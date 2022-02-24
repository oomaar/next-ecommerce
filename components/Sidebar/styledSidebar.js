import styled from "styled-components";
import { SidebarWidth, transition } from "../../global/GlobalStyle";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: ${SidebarWidth};
  background-color: ${({ theme }) => theme.colors.bodyColor};
  transition: ${transition};
  transform: ${({ showSidebar }) =>
    showSidebar ? "translateX(0)" : "translateX(-1000vw)"};
  z-index: ${({ theme }) => theme.zIndex.zSidebar};
`;

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
`;

export const SidebarHeader = styled.header`
  display: flex;
  position: relative;
  gap: 0 1rem;
  align-items: center;
  width: 100%;
  padding: 1rem 0.5rem;
  background: ${({ theme }) => theme.colors.scrollThumbColor};
  color: ${({ theme }) => theme.colors.titleColor};

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
    color: ${({ theme }) => theme.colors.titleColor};
  }
`;

export const SidebarHeaderUser = styled.div`
  color: ${({ theme }) => theme.colors.titleColor};

  span {
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const SidebarLinkContainer = styled.div``;

export const SidebarTitle = styled.p`
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const SidebarList = styled.ul`
  color: ${({ theme }) => theme.colors.textColor};
`;

export const SidebarListItem = styled.li``;

export const SeeMoreList = styled.ul`
  height: ${({ moreLinks }) => (moreLinks ? "auto" : "0")};
  opacity: ${({ moreLinks }) => (moreLinks ? "1" : "0")};
  overflow: hidden;
  transition: ${transition};
  /* moreLinks && */
`;

export const SeeMoreListItem = styled.li``;

export const SidebarLink = styled.a`
  color: ${({ theme }) => theme.colors.textColor};
`;

export const SeeMoreLink = styled.p`
  cursor: pointer;
  display: flex;
  align-items: center;

  span {
    transition: ${transition};
    transform: ${({ moreLinks }) =>
      moreLinks ? "rotate(90deg)" : "rotate(0)"};
  }
`;
