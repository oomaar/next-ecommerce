import sidebarData from "../../data/sidebarData.json";
import { Icon } from "@material-ui/core";
import { Button } from "../../global/GlobalStyle";
import {
  OverLay,
  SidebarContainer,
  SidebarHeader,
  SidebarHeaderUser,
  SidebarLinkContainer,
  SidebarList,
  SidebarListItem,
  SidebarTitle,
  SidebarLink,
  SeeMoreLink,
  SeeMoreList,
  SeeMoreListItem,
} from "./styledSidebar";
import { useState } from "react";

export const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [moreLinks, setMoreLinks] = useState(false);

  const sidebarLinks = sidebarData.map((link) => (
    <SidebarLinkContainer key={link.id}>
      <SidebarTitle>{link.title}</SidebarTitle>
      <SidebarList>
        {link.links.map((subLink) => (
          <SidebarListItem key={subLink.id}>
            <div>
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
                      <SeeMoreListItem moreLinks={moreLinks} key={more.id}>
                        <SidebarLink href={more.href}>
                          {more.title}
                          {more.icon && <Icon>chevron_right</Icon>}
                        </SidebarLink>
                      </SeeMoreListItem>
                    ))}
                  </SeeMoreList>
                </>
              ) : (
                <SidebarLink href={subLink.href}>
                  {subLink.title}
                  {subLink.icon && <Icon>chevron_right</Icon>}
                </SidebarLink>
              )}
            </div>
          </SidebarListItem>
        ))}
      </SidebarList>
    </SidebarLinkContainer>
  ));

  return (
    <>
      <OverLay
        showSidebar={showSidebar}
        onClick={() => setShowSidebar(false)}
      />
      <SidebarContainer showSidebar={showSidebar}>
        <SidebarHeader>
          <SidebarHeaderUser>
            <Icon>account_circle</Icon>
          </SidebarHeaderUser>
          <p>
            Hello,{" "}
            <Button link sidebarLink>
              Sign in
            </Button>
          </p>
          <Icon className="close-icon" onClick={() => setShowSidebar(false)}>
            close
          </Icon>
        </SidebarHeader>
        {sidebarLinks}
      </SidebarContainer>
    </>
  );
};
