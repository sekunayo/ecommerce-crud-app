import { css } from "@emotion/css";

const header = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "calc(1140px - 30px)",
    margin: "0 auto",
})

const headerLogo = css({
    display: "flex",
    gap: "10px",
    color: "#1B2437",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal"
})
const headerNavigation = css({
    display: "flex",
})

const headerNavigationList = css({
    display: "flex",
    gap: "32px"
})

const headerNavigationListItem = css({
    color: "#1B2437",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    cursor: "pointer",
    transition: "all 200ms ease-in-out",

    "&:hover": {
        textDecoration: "line-through",
        color: "#a4161a",
        textDecorationColor: "#a4161a"
    }
})

const headerCartLogo = css({
    display: "flex",
    height: "100%",
    cursor: "pointer",

    "& svg": {
        fill: "#a4161a",
        height: "20px",
    }
})

export const styles = {
    headerNavigation,
    headerNavigationList,
    headerNavigationListItem,
    header,
    headerLogo,
    headerCartLogo
};