import { useState } from "react";
import sidebarData from "../../data/sidebarData.json";
import { Icon } from "@material-ui/core";
import { Button } from "../../global/GlobalStyle";
import {
  OverLay,
  SidebarContainer,
  SidebarPageContainer,
  SidebarHeader,
  SidebarHeaderUser,
  SidebarLinkContainer,
  SidebarList,
  SidebarListItem,
  SidebarTitle,
  SidebarLink,
  SeeMoreLink,
  SeeMoreList,
  PageBackButton,
  SidebarPageTwoContainer,
} from "./styledSidebar";

export const Sidebar = ({
  showSidebar,
  setShowSidebar,
  checkTheme,
  toggleTheme,
}) => {
  const [moreLinks, setMoreLinks] = useState(false);
  const [sidebarPage, setSidebarPage] = useState("");
  const [sidebarPageNumber, setSidebarPageNumber] = useState(1);

  const handleSetPage = (pageName, pageNumber) => {
    setSidebarPage(pageName);
    setSidebarPageNumber(pageNumber);
  };

  const sidebarLinks = sidebarData.pageOne.map((link) => (
    <SidebarLinkContainer key={`${link.id}${link.title}`}>
      <SidebarTitle>{link.title}</SidebarTitle>
      <SidebarList>
        {link.links.map((subLink) => (
          <div key={`${subLink.id}${subLink.id + 4}`}>
            {subLink.title === "See" ? (
              <>
                <SeeMoreLink
                  moreLinks={moreLinks}
                  onClick={() => setMoreLinks((state) => !state)}
                >
                  {subLink.title} {moreLinks ? "Less" : "All"}
                  {subLink.icon && <Icon>chevron_right</Icon>}
                </SeeMoreLink>
                <SeeMoreList moreLinks={moreLinks}>
                  {link.seeMore.map((more) => (
                    <SidebarListItem
                      onClick={() => handleSetPage(more.page, 2)}
                      moreLinks={moreLinks}
                      key={`${more.id}${more.title}`}
                    >
                      {more.title}
                      {more.icon && <Icon>chevron_right</Icon>}
                    </SidebarListItem>
                  ))}
                </SeeMoreList>
              </>
            ) : !subLink.icon ? (
              <SidebarLink>
                {subLink.title}
                {subLink.icon && <Icon>chevron_right</Icon>}
              </SidebarLink>
            ) : (
              <SidebarListItem onClick={() => handleSetPage(subLink.page, 2)}>
                {subLink.title}
                {subLink.icon && <Icon>chevron_right</Icon>}
              </SidebarListItem>
            )}
          </div>
        ))}
      </SidebarList>
    </SidebarLinkContainer>
  ));

  const pageTwoData = sidebarData.pageTwo.map((link, i) => (
    <SidebarLinkContainer key={`${i}`}>
      {link.title === sidebarPage && (
        <>
          {link.links.map((subPageLink, i) => (
            <div key={i}>
              <SidebarTitle>{subPageLink.listTitle}</SidebarTitle>
              <SidebarList>
                {subPageLink.listLinks.map((listLink) => (
                  <SidebarLink
                    key={`${listLink.id}${listLink.title + 11}`}
                    href={listLink.href}
                  >
                    {listLink.title}
                  </SidebarLink>
                ))}
              </SidebarList>
            </div>
          ))}
        </>
      )}
    </SidebarLinkContainer>
  ));

  return (
    <>
      <OverLay
        showSidebar={showSidebar}
        onClick={() => setShowSidebar(false)}
      />
      <SidebarContainer showSidebar={showSidebar}>
        <SidebarPageContainer sidebarPageNumber={sidebarPageNumber}>
          <SidebarHeader>
            <SidebarHeaderUser>
              <Icon>account_circle</Icon>
            </SidebarHeaderUser>
            <p>
              Hello,{" "}
              <Button className="white" link sidebarLink>
                Sign in
              </Button>
            </p>
            <div className="dark-icon">
              {toggleTheme === "light" ? (
                <Icon onClick={checkTheme}>dark_mode</Icon>
              ) : (
                <Icon onClick={checkTheme}>light_mode</Icon>
              )}
            </div>
            <Icon className="close-icon" onClick={() => setShowSidebar(false)}>
              close
            </Icon>
          </SidebarHeader>
          {sidebarLinks}
        </SidebarPageContainer>
        <SidebarPageTwoContainer sidebarPageNumber={sidebarPageNumber}>
          <PageBackButton onClick={() => handleSetPage("", 1)}>
            <Icon>west</Icon> Main Menu
          </PageBackButton>
          {pageTwoData}
        </SidebarPageTwoContainer>
      </SidebarContainer>
    </>
  );
};
