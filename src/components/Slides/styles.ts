import { css } from "@emotion/css";

const slidesImage = css({
    height: "404px",
    width: "404px",
})

const slidesTextHeading = css({
    color: "#1B2437",
    fontSize: "48px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.4px",

    "& span": {
        color: "#ba181b",
        fontStyle: "italic"
    }
})

const slidesText = css({
    width: "40%",
    display: "flex",
    flexDirection: "column",
    gap: "24px"
})

const slides = css({
    display: "flex",
    margin: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
})

export const styles = {
    slidesImage,
    slidesText,
    slidesTextHeading,
    slides
}