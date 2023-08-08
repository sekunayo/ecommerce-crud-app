import { css } from "@emotion/css";

const cartViewTotal = css({
    width: "100%",
    maxWidth: "445px",
    padding: "30px",
    backgroundColor: "#f5f3f4"
})

const cartViewTotalHeading = css({
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.4px",
    marginBottom: "30px"
})

const cartViewTotalParagraph = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    "& span": {
        fontWeight: 600,
    }
})

const cartViewTotalButton = css({
    marginTop: "50px",
    display: "flex",
    width: "100%",
    justifyContent: "flex-end"
})
export const styles = {
    cartViewTotal,
    cartViewTotalHeading,
    cartViewTotalParagraph,
    cartViewTotalButton
}