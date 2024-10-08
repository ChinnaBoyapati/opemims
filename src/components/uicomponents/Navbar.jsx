
import { Box, Typography, Menu, MenuItem, TextField, IconButton, Avatar } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const [anchorElClaims, setAnchorElClaims] = useState(null);
  const [anchorElTools, setAnchorElTools] = useState(null);
  const [anchorElInsurance, setAnchorInsurance] = useState(null);
  const [anchorElAdministration, setAnchorElAdministration] = useState(null);
  const [anchorProfile, setAnchorProfile] = useState(null)
  let navigate = useNavigate()
  const handleMenuOpen = (setAnchorEl) => (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl) => () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        width: "100%",
        background: "#006273",
        zIndex: "100",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          minHeight: "56px",
          padding: "23px 23px 0px 23px",
          gap: "24px",
          flexWrap: "wrap",
          width: "calc(100% - 47px)",
          justifyContent: "space-between",
          // border: "1px solid red",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0px",
            gap: "30px",
            order: 0,
            width: { xs: "48px", sm: "47%", md: "11%" },
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "0px",
                gap: "10px",
              }}
            >
              {/* Logo image */}
              <Box
                component="img"
                sx={{
                  height: "40px",
                }}
                src="/public/media/png/openIMIS.png"
              />

              <Typography sx={{ textDecoration: "none", color: "#F9FBFC" }}>
                OpenIMIS
              </Typography>
            </Box>
          </Link>
        </Box>




        {/* Drop-down Menus */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px', width: { xs: "100%", sm: "100%", md: "50%" }, }}>


          {/* Insurance and Policies */}

          <Box>
            <Typography
              sx={{ color: "#F9FBFC", cursor: "pointer", display: "flex" }}
              onClick={handleMenuOpen(setAnchorInsurance)}
            >
              Insurance and Policies  <ArrowDropDownIcon />
            </Typography>


            <Menu
              anchorEl={anchorElInsurance}
              open={Boolean(anchorElInsurance)}
              onClose={handleMenuClose(setAnchorInsurance)}
            >
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorInsurance)
                navigate("/home/add-family")
              }}>
                Add Family/Groups
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorInsurance)
                navigate("/home/view-family")
              }}>
                Families/Groups
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorInsurance)
                navigate("/home/insurees")
              }}>
                Insurees
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorInsurance)
                navigate("/home/policies")
              }}>
                Policies
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorInsurance)
                navigate("/home/contributions")
              }}>
                Contributions
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorInsurance)
                navigate("/home/payments")
              }}>
                Payments
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorInsurance)
                navigate("/home/policyHolders")
              }}>
                Policy Holders
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorInsurance)
                navigate("/home/contacts")
              }}>
                Contracts
              </MenuItem>
            </Menu>
          </Box>


          {/* Claims Menu */}
          <Box>
            <Typography
              sx={{ color: "#F9FBFC", cursor: "pointer", display: "flex" }}
              onClick={handleMenuOpen(setAnchorElClaims)}
            >
              Claims  <ArrowDropDownIcon />
            </Typography>


            <Menu
              anchorEl={anchorElClaims}
              open={Boolean(anchorElClaims)}
              onClose={handleMenuClose(setAnchorElClaims)}
            >
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElClaims)
                navigate("/home")
              }
              }>
                Health Facility Claims
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElClaims)
                navigate("/home/claim-review")
              }}>
                Reviews
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElClaims)
                navigate("/home/batch-run-control")
              }

              }>
                Batch Runs
              </MenuItem>
            </Menu>
          </Box>


          {/* Administration */}

          <Box>
            <Typography
              sx={{ color: "#F9FBFC", cursor: "pointer", display: "flex" }}
              onClick={handleMenuOpen(setAnchorElAdministration)}
            >
              Administration  <ArrowDropDownIcon />
            </Typography>


            <Menu
              anchorEl={anchorElAdministration}
              open={Boolean(anchorElAdministration)}
              onClose={handleMenuClose(setAnchorElAdministration)}
            >
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/products")
              }}>
                Products
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/health-facilities")
              }}>
                Health Facilities
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/medical-services-price")
              }}>
                Medical Services Price List
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/medical-items")
              }}>
                Medical Items Price List
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/medical-services")
              }}>
                Medical Services
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/administration-users")
              }}>
                Users
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/administration-users-profiles")
              }}>
                Users Profiles
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/payers")
              }}>
                Payers
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/locations")
              }}>
                Locations
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/policyholder-users")
              }}>
                Policyholder Users
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/contribution-plans")
              }}>
                Conribution Plans
              </MenuItem>
              <MenuItem onClick={() => {
                handleMenuClose(setAnchorElAdministration)
                navigate("/home/contribution-plans-bundles")
              }}>
                Conribution Plan Bundles
              </MenuItem>
            </Menu>
          </Box>

          {/* Tools Menu */}
          <Box>
            <Typography
              sx={{ color: "#F9FBFC", cursor: "pointer", display: "flex" }}
              onClick={handleMenuOpen(setAnchorElTools)}
            >
              Tools <ArrowDropDownIcon />
            </Typography>
            <Menu
              anchorEl={anchorElTools}
              open={Boolean(anchorElTools)}
              onClose={handleMenuClose(setAnchorElTools)}
            >
              <MenuItem onClick={handleMenuClose(setAnchorElTools)}>
                Tool
              </MenuItem>
              <MenuItem onClick={handleMenuClose(setAnchorElTools)}>
                Tool
              </MenuItem>
              <MenuItem onClick={handleMenuClose(setAnchorElTools)}>
                Tool
              </MenuItem>
            </Menu>
          </Box>
        </Box>






        {/* searchBar */}
        <Box sx={{
          // border: "1px solid red",
          maxWidth: "400px"
        }}>

          <TextField
            variant="outlined"
            placeholder="Search"
            size="small"
            sx={{ backgroundColor: "#F9FBFC", borderRadius: "4px" }}
          />

        </Box>




        {/* profile */}

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handleMenuOpen(setAnchorProfile)}>
            <Avatar sx={{ bgcolor: "#F9FBFC", color: "#006273" }}>P</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorProfile}
            open={Boolean(anchorProfile)}
            onClose={handleMenuClose(setAnchorProfile)}
          >
            <MenuItem onClick={handleMenuClose(setAnchorProfile)}>LogOut</MenuItem>
            <MenuItem onClick={handleMenuClose(setAnchorProfile)}>SignUP</MenuItem>
            <MenuItem onClick={handleMenuClose(setAnchorProfile)}>Resgeter</MenuItem>
          </Menu>
        </Box>


      </Box>
    </Box >
  );
}

export default Navbar;

