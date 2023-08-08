import { css } from "@emotion/css";

const cartItem = css({
    display: "grid",
    gridTemplateColumns: "50px 1fr 100px 100px 100px",
    alignItems: "center",
    gap: "20px",
    padding: "30px"
})

const cartItemImage = css({
    height: "100px",
    width: "100px",
    backgroundColor: "red"
})

const cartItemProduct = css({
    display: "flex",
    alignItems: "center",
    gap: "20px"
})

export const styles = {
    cartItem,
    cartItemImage,
    cartItemProduct
}