import { css } from "@emotion/css";

const cardDetails = css({
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingTop: "50px"
})

const cardDetailsText = css({
    color: "#21092F",
    textAlign: "right",
    fontFeatureSettings: `'clig' off, 'liga' off`,
    fontFamily: "Space Grotesk",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    letterSpacing: "2px",
    textTransform: "uppercase",
    cursor: "pointer"
})
export const styles = {
    cardDetails,
    cardDetailsText
}