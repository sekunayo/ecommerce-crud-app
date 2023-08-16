import { css } from "@emotion/css";

const selectDropdown = css({
  width: "100%",
  height: "45px",
  borderRadius: "8px",
  border: "1px solid #DFDEE0",
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  padding: "0px 16px",
  color: "#21092F",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: "Space Grotesk",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  "-webkit-appearance": "none",
  "-moz-appearance": "none",
  backgroundImage: `linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%)`,
  backgroundPosition: `calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em`,
  backgroundSize: `5px 5px,
      5px 5px,
      1px 1.5em`,
  backgroundRepeat: "no-repeat",

  "&:focus": {
    backgroundImage: `linear-gradient(45deg, gray 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, gray 50%)`,
    backgroundPosition: `calc(100% - 15px) 1em,
        calc(100% - 20px) 1em,
        calc(100% - 2.5em) 0.5em`,
    backgroundSize: ` 5px 5px,
        5px 5px,
        1px 1.5em`,
    backgroundRepeat: "no-repeat",
  },

  "&:-moz-focusring": {
    color: "transparent",
    textShadow: "0 0 0 #000",
  },
});

const selectDropdownContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const selectDropdownLabel = css({
  color: "#21092F",
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontFamily: "Space Grotesk",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "2px",
  textTransform: "uppercase",
});

const selectError = css({
  color: "#FF0000",
  fontSize: "8px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  letterSpacing: "2px",
  fontFamily: "Space Grotesk",
});

export const styles = {
  selectDropdown,
  selectDropdownContainer,
  selectDropdownLabel,
  selectError,
};
