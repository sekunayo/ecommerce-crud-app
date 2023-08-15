import { css } from "@emotion/css";

const checkoutForm = css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "50px",
    marginTop: "100px",
    height: "100%",

})

const checkoutFormCards = css({
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    alignItems: "center",

})

const checkoutFormBackCard = css({
    marginLeft: "100px",

})

const checkoutFormContainer = css({
    width: "381px",
    display: "flex",
    flexDirection: "column",
    gap: "24px"
})

const checkoutFormButton = css({
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    fontFamily: "Space Grotesk",
    marginTop: "10px"
})

const checkoutFormGridRow = (number: string, gap: string) => css({
    display: "grid",
    gridTemplateColumns: `repeat(${number}, 1fr)`,
    alignItems: "center",
    gridGap: `${gap}px`,
})

export const styles = {
    checkoutForm,
    checkoutFormCards,
    checkoutFormBackCard,
    checkoutFormContainer,
    checkoutFormButton,
    checkoutFormGridRow
}