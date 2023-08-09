import { css } from "@emotion/css";

const inputQuantity = css({
    width: "84px",
    border: " 2px solid rgb(33, 33, 33)",
    height: "45px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 28px)"
})

const inputQuantityBox = css({
    border: "none",
    outline: "0px",
    width: "auto",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center"
})

export const styles = {
    inputQuantity,
    inputQuantityBox
};