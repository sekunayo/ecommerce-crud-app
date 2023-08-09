import { css } from "@emotion/css";

const cartItem = css({
    display: "grid",
    gridTemplateColumns: "1fr 100px 100px 100px",
    alignItems: "center",
    gap: "20px",
    padding: "30px"
})

const cartItemImage = css({
    height: "100px",
    width: "100px",
})

const cartItemProduct = css({
    display: "flex",
    alignItems: "center",
    gap: "20px"
})

const cartItemButton = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& svg": {
        width: "30px",
        height: "30px"
    }
})

export const styles = {
    cartItem,
    cartItemImage,
    cartItemProduct,
    cartItemButton
}