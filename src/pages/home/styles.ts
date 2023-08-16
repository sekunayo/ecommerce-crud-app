import { css } from "@emotion/css";

const home = css({
  height: "100%",
  width: "100%",
  overflow: "hidden",
  paddingTop: "40px",
});

const homeMain = css({
  height: "600px",
  overflowY: "scroll",
});

const homeMainContainer = css({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const styles = {
  home,
  homeMain,
  homeMainContainer,
};
