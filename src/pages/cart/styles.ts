import { css } from "@emotion/css";

const cart = css({
    paddingTop: "40px",
    minHeight: "100vh",
    overflowY: "auto",
    width: "100%",
})

const cartHeading = css({
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

const cartMain = css({
    maxWidth: 'calc(1140px)',
    margin: "0 auto"
})

const cartMainReturnButton = css({
    marginTop: "40px"
})

export const styles = {
    cart,
    cartHeading,
    cartMain,
    cartMainReturnButton,
}