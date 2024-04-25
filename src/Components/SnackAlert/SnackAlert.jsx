import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SnackAlert = ({
  duration = 5000,
  anchorOrigin = { vertical: "top", horizontal: "right" },
  severity = "success",
  message = "This is a success Alert inside a Snackbar!",
  open = false,
  handleClose = () => {},
}) => {
  // const [isOpen, setIsOpen] = React.useState(open);

  // React.useEffect(() => {
  //   setIsOpen(open);
    
  //   // Reset the timer when the message or open state changes
  //   const timer = setTimeout(() => {
  //     setIsOpen(false);
  //   }, 5000);
  //   // Cleanup function to clear the timer
  //   return () => clearTimeout(timer);
  // }, [message, open]);


  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleClose(); // Close Snackbar
  };
  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={null}
      onClose={handleSnackbarClose}
    >
      <Alert
        className="manRope500"
        onClose={handleSnackbarClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%", color: "white" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default React.memo(SnackAlert);
