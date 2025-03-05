import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

export const HeaderLogoutButton = () => {
  return (
    <IconButton aria-label="logout" sx={{ color: "white" }}>
      <LogoutIcon color="common" fontSize="medium" />
    </IconButton>
  );
};
