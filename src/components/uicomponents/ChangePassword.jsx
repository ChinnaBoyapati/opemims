import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from "/public/media/png/openIMIS.png"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ChangePassword = () => {
  let navigate = useNavigate()
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate()


  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(user => user.userName === userName && user.password === password);

    if (user) {
      console.log("first")
    }
    else {
      toast.error("Invalid username or password", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    navigate("/")
  }
  return (


    <Card
      // variant="outlined"
      sx={{ width: { xs: 300, sm: 400 }, margin: "auto", bgcolor: "#DBEEF0", mt: 15, boxShadow: "0px 0px 1px 0px" }}
    >

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "80%", justifyContent: "center" }}>

          <Box
            component="img"
            src={logo}
            alt="logo"
            sx={{ width: 100, display: "block", marginX: "auto" }}
          />
          <Typography variant='h4' sx={{ margin: "0px", color: "#076375" }}>
            OpenIMIS
          </Typography>
        </Box>

        <Box sx={{ width: "80%", mt: 5, display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            id="UserName"
            label="Username *"
            value={userName}
            variant="standard"
            onChange={(ev) => {
              setUserName(
                ev.target.value
              );

            }}
            fullWidth
          />

          <TextField
            id="Pass Word"
            label="New Password *"
            value={password}
            variant="standard"
            onChange={(ev) => {
              setPassword(
                ev.target.value
              );

            }}
            fullWidth
          />

          <Button variant='contained' onClick={() => { handleLogin() }}>Change Password </Button>


          {/* <Button >
            FORGOT PASSWORD?
          </Button> */}

          {/* <Button onClick={() => {
            nav("/regester")
          }} variant='outlined'>
            Regester
          </Button> */}

        </Box>



      </CardContent>

    </Card>
  )
}

export default ChangePassword