import { css } from "@emotion/css"

const contact = css({
    width: "100%",
    paddingTop: "40px",
    minHeight: "100vh",
    overflowY: "auto"
})

const contactHeading = css({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "50px 0px",
    textAlign: "center",
    fontSize: "34px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.4px"
})

const contactMap = css({
    height: "50vh",
    width: "100%"
})

const contactFooter = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "48px"
})

const contactFooterSocial = css({
    display: "flex",
    gap: "48px",
    alignItems: "center"
})

const contactFooterSocialRow = css({
    display: "flex",
    alignItems: "center",
    gap: "48px",
})

export const styles = {
    contact,
    contactHeading,
    contactMap,
    contactFooter,
    contactFooterSocial,
    contactFooterSocialRow
}