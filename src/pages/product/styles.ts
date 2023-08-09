import { css } from "@emotion/css";

const product = css({
    paddingTop: "40px",
    minHeight: "100vh",
    overflowY: "auto",
    width: "100%",
})

const productMain = css({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "calc(1140px - 30px)",
    margin: "0 auto",
    height: "90vh"
})

const productDescription = css({
    width: "500px",
    height: "500px",
    boxShadow: "0px 25px 40px -20px rgba(0, 0, 0, 0.10)",
})

const productImageContainer = css({
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

const productDescriptionHeader = css({
    height: "70px",
    paddingLeft: "40px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#a4161a",
    color: "#fff",
})

const productDescriptionHeaderText = css({
    color: "#fff",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "0.4px",
})

const productDescriptionContainer = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
})


const productImage = css({
    width: "400px",
    height: "400px"
})

const productDescriptionText = css({
    width: "100%",
    height: "100%",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "24px"
})

const productDescriptionTextCaption = css({
    color: "#b1a7a6",
    textTransform: "uppercase",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 300,
    lineHeight: "normal"
})

const productDescriptionTextSize = css({
    display: "flex",
    alignItems: "center",
    gap: "20px"
})

const productDescriptionTextHeading = css({
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal"
})

const productDescriptionTextPrice = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
})

const productDescriptionTextPriceContent = css({
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
    color: "#a4161a"
})

const productDescriptionTextContent = css({
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    color: "#b1a7a6",
})

const productDescriptionButton = css({
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    alignItems: "center"
})

const productDescriptionTextSizeContainer = css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

const productLikeItems = css({
    height: "100vh",
    marginTop: "50px"
})

const productLikeItemsHeading = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "40px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
})

const productLikeItemsList = css({
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    margin: "70px auto 0px auto",
    maxWidth: "calc(1140px - 30px)",
})

export const styles = {
    product,
    productLikeItems,
    productLikeItemsHeading,
    productDescription,
    productDescriptionHeader,
    productDescriptionHeaderText,
    productDescriptionText,
    productImage,
    productImageContainer,
    productMain,
    productDescriptionContainer,
    productDescriptionTextCaption,
    productDescriptionTextHeading,
    productDescriptionTextPrice,
    productDescriptionTextPriceContent,
    productDescriptionTextContent,
    productDescriptionButton,
    productDescriptionTextSize,
    productDescriptionTextSizeContainer,
    productLikeItemsList
}