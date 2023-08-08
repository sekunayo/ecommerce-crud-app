import { css } from "@emotion/css";

const button = css({
    backgroundColor: "#a4161a",
    width: "fit-content",
    height: "52px",
    color: "#fff",
    padding: "0px 20px",
    display: "flex",
    alignItems: "center",

    "& svg": {
        fill: "#fff",
        width: "12px",
        height: "100%",
        marginLeft: "10px"
    }

})

export const styles = {
    button
}