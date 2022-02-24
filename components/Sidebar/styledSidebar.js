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
  border: 1px solid ${({ theme }) => theme.colors.navBorder};
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
    color: ${({ theme }) => theme.colors.titleColor};
  }
`;

export const SidebarHeaderUser = styled.div`
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const SidebarList = styled.ul``;

export const SidebarListItem = styled.li``;
