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
    position: "relative",

    "& svg": {
        fill: "#a4161a",
        height: "24px",
        width: "24px"
    }
})

const headerCartLogoContent = css({
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    position: "absolute",
    top: "-8px",
    right: "-8px",
    zIndex: "20",
    backgroundColor: "#a4161a",
    fontSize: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: "0px",
    lineHeight: "17px",
    fontStyle: "normal",
    textAlign: "center",
    color: "#fff",
    fontWeight: 700
})

const headerCartList = css({
    width: "400px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    boxShadow: "0px 8px 40px rgba(0,0,0,0.12)",
    position: "absolute",
    top: "100%",
    right: "0px",
    marginTop: "20px",
    textAlign: "left",
    padding: "24px",
    zIndex: 40,
    borderRadius: "4px",
    transform: "translate3d(0, 15px, 0)",
    transition: "ease opacity 300ms, ease transform 300ms"
})

const headerHorizontalLine = css({
    border: 0,
    clear: "both",
    display: "block",
    width: "100%",
    backgroundColor: "#d3d3d3",
    height: "1px",
})

const headerCartListHeader = css({
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal"
})

const headerCartEmpty = css({
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal"
})

export const styles = {
    headerNavigation,
    headerNavigationList,
    headerNavigationListItem,
    header,
    headerLogo,
    headerCartLogo,
    headerCartLogoContent,
    headerCartList,
    headerHorizontalLine,
    headerCartListHeader,
    headerCartEmpty
};