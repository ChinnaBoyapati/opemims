import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from "/public/media/png/openIMIS.png"
import { CheckBox, Password } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Regester = () => {

    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState(false);
    const [userHelperText, setUserNameHelperText] = useState("");


    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState("");


    const [role, setRole] = useState("");
    const [roleError, setRoleError] = useState(false);
    const [roleHelperText, setRoleHelperText] = useState("");


    const nav = useNavigate()


    const handleRegester = () => {


        const userData = {
            userName: userName,
            password: password,
            role: role
        };
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));

        setUserName("");
        setPassword("");
        setRole("");
        nav("/")
        console.log(userData);

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
                            setUserNameError(false);
                            setUserNameHelperText("")
                        }}
                        error={userName}
                        helperText={userHelperText}
                        fullWidth
                    />

                    <TextField
                        id="Pass Word"
                        label="Password *"
                        value={password}
                        variant="standard"
                        onChange={(ev) => {
                            setPassword(
                                ev.target.value
                            );
                            setPasswordError(false);
                            setPasswordHelperText("")

                        }}
                        error={passwordError}
                        helperText={passwordHelperText}
                        fullWidth
                    />


                    <RadioGroup
                        aria-label="role"
                        name="role"
                        value={role}
                        onChange={(ev) => {
                            setRole(ev.target.value)
                            setRoleError(false);
                            setRoleHelperText("");
                        }}
                        error={roleError}
                        helperText={roleHelperText}
                    >
                        <FormControlLabel value="agent" control={<Radio />} label="Agent" />
                        <FormControlLabel value="user" control={<Radio />} label="User" />
                    </RadioGroup>

                    <Button variant='contained' onClick={() => {

                        if (userName === "" || userName === undefined || userName === null) {
                            setUserNameHelperText("Please enter your username");
                            setUserNameError(true)
                        }
                        else if (password === "" || password === undefined || password === null) {
                            setPasswordError(true);
                            setPasswordHelperText("Please Enter Password")

                        }
                        else if (role === "" || role === undefined || role === null) {
                            setRoleError(true);
                            setRoleHelperText("Please select your role");
                        }
                        else {

                            handleRegester()
                        }
                    }}>Regester </Button>


                </Box>



            </CardContent>

        </Card>
    )
}

export default Regester