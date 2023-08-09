import { css } from "@emotion/css";

const productCard = css({
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
})

const productCardImage = css({
    width: "300px",
    height: "300px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& img": {
        height: "100%"
    }
})

const productCardHeading = css({
    textAlign: "center",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    width: "60%"
})

const productCardPrice = css({
    textAlign: "center",
    fontSize: "15px",
    fontStyle: "normal",
    fontWeight: 800,
    lineHeight: "normal"
})

const productCardHoverButton = css({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    display: "none",
    cursor: "pointer",
    zIndex: "20",

    "&[data-show='true']": {
        display: "flex",
    }
})

export const styles = {
    productCard,
    productCardImage,
    productCardHeading,
    productCardPrice,
    productCardHoverButton
}