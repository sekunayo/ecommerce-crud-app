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

export const styles = {
  shippingForm,
  shippingFormContainer,
  shippingFormInputContainer,
  shippingFormGridRow,
  shippingFormOrder,
  shippingFormAdditionalInfo,
  shippingFormHeader,
};
