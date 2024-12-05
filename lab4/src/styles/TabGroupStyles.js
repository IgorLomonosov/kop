import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#f5f5f5",
    padding: "10px 0",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  tabs: {
    "& .MuiTab-root": {
      fontSize: "1rem",
      fontWeight: 500,
    },
  },
  tab: {
    textTransform: "none",
    minWidth: "120px",
    "&.Mui-selected": {
      color: "#1976d2",
    },
  },
  tabIndicator: {
    backgroundColor: "#1976d2",
    height: "3px",
  },
});

export default useStyles;
