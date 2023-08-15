import { css } from "@emotion/css"

const orderViewTotalHeader = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    "& h4": {
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        letterSpacing: "0.4px"
    }
})

const orderViewTotalList = css({
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    margin: "24px 0px"
})


const orderViewTotalContent = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px"
})

const orderViewTotalText = css({
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.4px"
})

const orderViewTotalContentHeader = css({
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "0.4px"
})

const orderViewTotalListItem = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",

    "& span": {
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        letterSpacing: "0.4px"
    }
})

const orderViewTotalButton = css({
    display: "flex",
    justifyContent: "flex-end"
})

export const styles = {
    orderViewTotalHeader,
    orderViewTotalList,
    orderViewTotalListItem,
    orderViewTotalButton,
    orderViewTotalContent,
    orderViewTotalContentHeader,
    orderViewTotalText
}