import React from 'react'

const Navbar = () => {
  let navItems = ["OpenImis", "Insurance and Policies", "Claims", "Admistration", "Tools", "Profile"]
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>OpenImis</div>
      <div>Insurance and Policies</div>
      <div>Claims</div>
      <div>Admistration</div>
      <div>Tools</  div>
      <div>Profile</div>
    </div>
  )

}
export default Navbar
