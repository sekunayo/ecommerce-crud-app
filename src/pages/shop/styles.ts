import { css } from "@emotion/css";

const shop = css({
    paddingTop: "40px",
    minHeight: "100vh",
    overflowY: "auto",
    width: "100%"
})

const shopHeading = css({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "50px 0px",
    textAlign: "center",
    fontSize: "34px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.4px"
})

const shopList = css({
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(auto, 300px))",
    gridTemplateRows: "min-content",
    gridGap: "16px",
    paddingBottom: "100px",
    maxWidth: "90vw",
})
const shopListContainer = css({
    display: "flex",
    justifyContent: "center",
    width: "100%",
})

export const styles = {
    shop,
    shopHeading,
    shopList,
    shopListContainer
}