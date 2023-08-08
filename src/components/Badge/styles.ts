import { css } from "@emotion/css";

const badge = css({
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f3f4",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    borderRadius: "50%",

    "&[data-active='true']": {
        backgroundColor: "#a4161a",
        color: "#fff"
    }
})

export const styles = {
    badge
}

