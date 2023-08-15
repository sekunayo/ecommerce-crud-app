import { css } from "@emotion/css";

const checkout = css({
    width: "100%",
    paddingTop: "40px",
    minHeight: "100vh",
    overflowY: "auto"
})

const checkoutHeading = css({
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

export const styles = {
    checkout,
    checkoutHeading
}