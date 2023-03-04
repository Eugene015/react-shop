import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import DialpadIcon from "@mui/icons-material/Dialpad";
import styled from "@emotion/styled";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function NavMenu({ closeMenu, setCloseMenu }) {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      display={closeMenu ? "block" : "none"}
      backgroundColor="rgba(0,0,0,0.4)"
      position="fixed"
      width="100%"
      height="100%"
      left="0"
      top="0"
      zIndex={10}
      overflow="auto"
      onClick={() => setCloseMenu(false)}
    >
      {/* Modal */}
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
        zIndex={100}
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* Header */}
          <FlexBox mb="15px">
            <Typography variant="h3">Nav Menu</Typography>
            <IconButton onClick={() => setCloseMenu(false)}>
              <CloseIcon />
            </IconButton>
          </FlexBox>
          {/* Menu Links */}
          <Box sx={{ width: "100%", maxWidth: 360 }}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
              >
                <ListItemIcon>
                  <WomanIcon />
                </ListItemIcon>
                <ListItemText primary="Female" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon>
                  <ManIcon />
                </ListItemIcon>
                <ListItemText primary="Male" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemIcon>
                  <EscalatorWarningIcon />
                </ListItemIcon>
                <ListItemText primary="Kids" />
              </ListItemButton>
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemIcon>
                  <WbSunnyIcon />
                </ListItemIcon>
                <ListItemText primary="Beauty Care" />
              </ListItemButton>
            </List>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
            >
              <ListItemIcon>
                <SportsGymnasticsIcon />
              </ListItemIcon>
              <ListItemText primary="Sports" />
            </ListItemButton>
            <Divider />
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
            >
              <ListItemIcon>
                <DialpadIcon />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItemButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NavMenu;
