import { Icon } from "@material-ui/core";
import { Button } from "../../global/GlobalStyle";
import {
    OverLay,
    SidebarContainer,
    SidebarHeader,
    SidebarHeaderUser,
    SidebarList,
    SidebarListItem,
} from "./styledSidebar";

export const Sidebar = ({ showSidebar, setShowSidebar }) => {
    return (
        <>
            <OverLay showSidebar={showSidebar} />
            <SidebarContainer showSidebar={showSidebar}>
                <SidebarHeader>
                    <SidebarHeaderUser>
                        <Icon>account_circle</Icon>
                    </SidebarHeaderUser>
                    <p>Hello, <Button link sidebarLink>Sign in</Button></p>
                    <Icon
                        className="close-icon"
                        onClick={() => setShowSidebar(false)}
                    >
                        close
                    </Icon>
                </SidebarHeader>
            </SidebarContainer>
        </>
    );
};