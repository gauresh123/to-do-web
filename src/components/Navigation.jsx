import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { ListItemButton, Stack, styled } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const drawerWidth = 260;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <DrawerHeader
        sx={{
          alignSelf: "flex-start",
        }}
      >
        <Stack direction={"row"} spacing={1.5} pl={2}>
          <AddTaskIcon
            color="black"
            sx={{ alignSelf: "center", width: 25, height: 25 }}
          />
          <span className="self-center font-semibold text-xl">To Do</span>
        </Stack>
      </DrawerHeader>

      <List sx={{ pl: 1, pr: 1 }}>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              px: 2.5,
              bgcolor: location.pathname === "/" ? "primary.light" : "inherit",
              color: location.pathname === "/" ? "primary" : "inherit",
            }}
            onClick={() => navigate("/")}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
              }}
            >
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Create Task"}
              sx={{
                pl: 2,
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              px: 2.5,
              bgcolor:
                location.pathname === "/tasks" ? "primary.light" : "inherit",
              color: location.pathname === "/tasks" ? "primary" : "inherit",
            }}
            onClick={() => navigate("/tasks")}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                justifyContent: "center",
              }}
            >
              <VerifiedUserIcon />
            </ListItemIcon>
            <ListItemText
              primary={"My Tasks"}
              sx={{
                pl: 2,
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
