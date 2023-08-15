import { css } from "@emotion/css";


const backCard = css({
    borderRadius: "10px",
    background: "linear-gradient(169deg, #FFF 0%, #D2D3D9 100%)",
    cursor: "pointer",
    width: "447px",
    height: "245px",
    boxShadow: "10px 5px 90px -14px rgba(0,0,0,0.75)",
    paddingTop: "24px"
})

const backCardBlackBox = css({
    width: "100%",
    height: "54px",
    backgroundColor: "#2F2F2F",
})

const backCardIcon = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90px"
})

const backCardGreyBox = css({
    borderRadius: "4px",
    backgroundColor: "#ADB5BE",
    display: "flex",
    justifyContent: "flex-end",
    height: "38px",
    alignItems: "center",
    paddingRight: "16px",
    margin: "24px 40px 0px 40px",
    "& p": {
        fontFamily: "Space Grotesk",
        color: "#fff"
    }
})

export const styles = {
    backCard,
    backCardBlackBox,
    backCardGreyBox,
    backCardIcon
}