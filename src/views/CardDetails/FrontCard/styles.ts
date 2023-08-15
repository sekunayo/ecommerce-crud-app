import { css } from "@emotion/css";


const frontCardLogoContainer = css({
    display: "flex",
    gap: "10px",

    "& svg path": {
        fill: "#fff"
    }
})
const frontCard = css({
    borderRadius: "10px",
    backgroundColor: "#A4161A",
    width: "447px",
    height: "245px",
    padding: "28px 32px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "pointer",
    boxShadow: "10px 0px 90px -14px rgba(0,0,0,0.75)"
})

const frontCardLogo = css({
    color: "#fff"
})

const frontCardName = css({
    textTransform: "uppercase",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "2px",


})

const frontCardFooter = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",

    "& p": {
        fontFamily: "Space Grotesk"
    }

})

const frontCardNumber = css({
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    color: "#FFF",
    fontFeatureSettings: `clig off, liga off`,
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "3.422px",

    "& p": {
        fontFamily: "Space Grotesk"
    }
})

const frontCardFooterContainer = css({
    display: "flex",
    flexDirection: "column",
    gap: "20px"
})

export const styles = {
    frontCard,
    frontCardLogo,
    frontCardName,
    frontCardFooter,
    frontCardNumber,
    frontCardLogoContainer,
    frontCardFooterContainer
}