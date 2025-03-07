import React from "react";
import { useNavigate } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-react-ui-kit";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>Welcome to Home</MDBCardTitle>
          <MDBCardText>
            This is a simple card using MDB in React. Click the button to navigate.
          </MDBCardText>
          <MDBBtn onClick={() => navigate("/about")}>Go to About</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Home;
