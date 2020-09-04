import React from "react";
import Background from "../pexels-andrea-piacquadio-3769714.jpg";
import { findByLabelText } from "@testing-library/react";
const Home = () => {
  return (
    <React.Fragment>
      <div class="row" style={{ marginBottom: 0 }}>
        <div className="col s12 " style={banner}>
          <div style={block} className=" z-depth-5">
            <span>
              <h3 style={heading}>
                <i className=" material-icons left">people</i>Examera
              </h3>
              <p className="center">Study at the comfort of your home.</p>
            </span>

            <a
              className="waves-effect waves-light btn-small"
              style={{ display: block }}
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const banner = {
  backgroundImage: `linear-gradient(rgba(41, 128, 185,0.5),rgba(22, 160, 133,0.5)),url(${Background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "91vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const block = {
  width: "50vw",
  height: "auto",
  fontSize: "1.2rem",
  border: `1px solid rgba(44, 62, 80,1.0)`,
  padding: `30px 10px 30px 10px`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const heading = {
  fontSize: "2.5rem",
  fontFamily: "lato",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export default Home;
