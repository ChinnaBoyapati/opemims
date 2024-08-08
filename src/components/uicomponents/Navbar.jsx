import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  let [toggle, setToggle] = useState({
    insurance: false,
    claims: false
  })
  let navigate = useNavigate()
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>OpenImis</div>
      <div>
        <p onClick={() => { setToggle({ ...toggle, insurance: !toggle.insurance }) }}>Insurance and Policies</p>
        <div style={{ display: toggle.insurance ? "block" : "none" }}>
          <div>
            im div
          </div>
        </div>
      </div>
      <div>
        <p onClick={() => { setToggle({ ...toggle, claims: !toggle.claims }) }}>Claims</p>
        <div style={{ display: toggle.claims ? "block" : "none" }}>
          <div>
            <p onClick={() => {
              navigate("/home/claims-controls")
              setToggle({ ...toggle, claims: !toggle.claims })
            }}>Health Facility Claims</p>
            <p>Reviews</p>
            <p>Batch Runs</p></div>
        </div>
      </div>
      {/* <div>Claims</div> */}

      <div>Admistration</div>
      <div>Tools</  div>
      <div>Profile</div>
    </div>
  )

}
export default Navbar
