import { css } from "@emotion/css";

const textarea = css({
    width: "100%",
    minHeight: "64px",
    borderRadius: "8px",
    border: "1px solid #DFDEE0",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "16px",
    color: "#21092F",
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: "Space Grotesk",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",

    "&::placeholder": {
        color: "rgba(33,9,47,0.25)"
    }
})

const textareaLabel = css({
    color: "#21092F",
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: "Space Grotesk",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "2px",
    textTransform: "uppercase"
})

const textareaContainer = css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "9px"
})

const textareaError = css({
    color: "#FF0000",
    fontSize: "8px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    letterSpacing: "2px",
    fontFamily: "Space Grotesk",

})

export const styles = {
    textarea,
    textareaLabel,
    textareaContainer,
    textareaError
}