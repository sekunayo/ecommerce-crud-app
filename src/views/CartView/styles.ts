import { css } from "@emotion/css"

const cartView = css({
    marginTop: "50px",
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    paddingBottom: "100px"
})

const cartViewHeader = css({
    display: "grid",
    gridTemplateColumns: " 1fr 100px 100px 100px",
    gridTemplateRows: "auto",
    padding: "15px 30px",
    alignItems: "center",
    gap: "20px",
    borderBottom: "1px solid #d3d3d3",

    "& h4": {
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "normal",
        letterSpacing: "0.4px",
        textTransform: "capitalize",
    },

    "& h4:nth-child(1)": {
        marginLeft: "40px"
    }
})

const cartViewItemList = css({
    border: "1px solid #d3d3d3",
})

const cartViewItem = css({
    maxWidth: "calc(1140px)",
    margin: "0 auto"
})

const cartViewButton = css({
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center",
    marginTop: "24px"
})

export const styles = {
    cartView,
    cartViewItem,
    cartViewItemList,
    cartViewButton,
    cartViewHeader
}