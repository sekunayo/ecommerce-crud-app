import { css } from "@emotion/css";

const inputQuantity = css({
    width: "84px",
    border: " 1px solid rgb(33, 33, 33)",
    height: "45px",
    display: "grid",
    gridTemplateColumns: "auto 28px auto",
    alignItems: "center",

    "& button": {
        fontSize: "14px",
        fontStyle: "normal"
    }
})

const inputQuantityBox = css({
    border: "none",
    outline: "0px",
    width: "auto",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
    padding: "0px",
    fontSize: "14px",
    fontStyle: "normal"
})

export const styles = {
    inputQuantity,
    inputQuantityBox
};