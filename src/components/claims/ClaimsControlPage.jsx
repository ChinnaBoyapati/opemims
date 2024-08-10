import { Box, Card, CardContent, TextField, Typography } from '@mui/material'
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React from 'react'

const ClaimsControlPage = () => {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          p: 3,
        }}
      >
        <Typography sx={{ textAlign: "center", width: "100%" }} variant="h6">
          Claims Control
        </Typography>

        <Box
          sx={{
            minHeight: "300px",
            minWidth: "100%",
            // border: "1px solid red",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >

          <TextField
            label="Region *"
            variant='standard'
          />

          <TextField
            label="District *"
            variant='standard'
          />
          <TextField
            label="Health Facility *"
            variant='standard'
          />
          <TextField
            label="Claim Admistrator *"
            variant='standard'
          />
          <TextField
            label="Batch Run (National)*"
            variant='standard'
          />
          <TextField
            label="Calim Status*"
            variant='standard'
          />
          <TextField
            label="Feedback Satus*"
            variant='standard'
          />
          <TextField
            label="Review status*"
            variant='standard'
          />
          <TextField
            label="Claim No*"
            variant='standard'
          />

          <TextField
            label="Insurance No*"
            variant='standard'
          />
          <TextField
            label="Claimed More than*"
            variant='standard'
          />
          <TextField
            label="Claimed less than*"
            variant='standard'
          />


          <LocalizationProvider  dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start Date"
              inputFormat="dd-MM-yyyy"
              mask={"__-__-____"}
             

            />
          </LocalizationProvider>

        </Box>
      </CardContent>
    </Card>
  )
}

export default ClaimsControlPage