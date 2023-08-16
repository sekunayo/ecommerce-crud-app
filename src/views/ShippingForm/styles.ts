import { css } from "@emotion/css";

const shippingForm = css({
  maxWidth: "calc(1140px)",
  margin: "0 auto",
  paddingBottom: "100px",
});

const shippingFormContainer = css({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "50px",
});

const shippingFormInputContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const shippingFormGridRow = (number: string, gap: string) =>
  css({
    display: "grid",
    gridTemplateColumns: `repeat(${number}, 1fr)`,
    alignItems: "center",
    gridGap: `${gap}px`,
  });

const shippingFormAdditionalInfo = css({
  width: "100%",
  height: "fit-content",
  padding: "30px",
  backgroundColor: "#f5f3f4",
});

const shippingFormOrder = css({
  width: "100%",
  height: "fit-content",
  padding: "30px",
  backgroundColor: "#f5f3f4",
});

const shippingFormHeader = css({
  width: "100%",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  letterSpacing: "0.4px",
});

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
    letterSpacing: "0.4px",
  },
});

const orderViewTotalList = css({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  margin: "24px 0px",
});

const orderViewTotalContent = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
});

const orderViewTotalText = css({
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  letterSpacing: "0.4px",
});

const orderViewTotalContentHeader = css({
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "0.4px",
});

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
    letterSpacing: "0.4px",
  },
});

const orderViewTotalButton = css({
  display: "flex",
  justifyContent: "flex-end",
});

export const styles = {
  shippingForm,
  shippingFormContainer,
  shippingFormInputContainer,
  shippingFormGridRow,
  shippingFormOrder,
  shippingFormAdditionalInfo,
  shippingFormHeader,
  orderViewTotalHeader,
  orderViewTotalList,
  orderViewTotalListItem,
  orderViewTotalButton,
  orderViewTotalContent,
  orderViewTotalContentHeader,
  orderViewTotalText,
};
