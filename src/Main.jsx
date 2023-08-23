import * as React from "react";
import "./dashboard.css";
import { useState } from "react";
import TableFile from "./TableFile";

const Main = (props) => {
  const [showTable, setShowTable] = useState(false);

  const handleDivClick = () => {
    setShowTable(!showTable);
  };

  // const [showTable, setShowTable] = useState(null);

  // const handleDivClick = (item) => {
  //   if (showTable === item) {

  //     setShowTable(null);
  //   } else {

  //     setShowTable(!showTable);
  //   }
  // };
  return (
    <>
      <div>
        <div onClick={handleDivClick} style={{ cursor: "pointer" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              borderRadius: "8px",
              border: "1px solid rgb(232,232,232)",
              backgroundColor: "#FFFFFF",
              width: "294px",
              height: "165px",
              gap: "12px",
              boxShadow: "0px 1px 0px 0px #00000005",
              fontSize: "13px",
              boxSizing: "border-box",
            }}
            className="child"
          >
            <div style={{ display: "flex" }}>
              <h4
                style={{
                  marginTop: "-3px",
                  boxSizing: "border-box",
                  color: "#4958A6",
                }}
              >
                {props.project.project}{" "}
              </h4>
              <button
                style={{
                  height: "15.2px",
                  width: "59px",
                  marginLeft: "5px",
                  cursor: "pointer",
                  border: "1px solid rgb(232,232,232)",
                  borderRadius: "2px",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    padding: "2px 4px",
                    alignItems: "center",
                    margin: "0px",
                    marginLeft: "-6px",

                    fontSize: "9px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "normal",
                    textTransform: "uppercase",
                  }}
                >
                  {props.project.product.toUpperCase()}
                </div>
              </button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "-15px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Sprint &nbsp;
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    {`${props.project.Sprint} S12 ${props.project.startdate}-${props.project.enddate}`}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="autopark">
                <div class="colorful-bullet green"></div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {props.project.timetracking.totalhours} Hrs
                </div>
                <br />
                <div class="colorful-bullet yellow"></div>{" "}
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {props.project.timetracking.planned} Hrs
                </div>
                <br />
                <div class="colorful-bullet grey"></div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  {props.project.timetracking.logged} Hrs
                </div>
              </div>
            </div>
            <div style={{ display: "flex", alignContent: "flex-start" }}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "#E6F8EB",
                  borderRadius: "4px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                >
                  Variance {props.project.variance}%
                </div>
              </button>
            </div>
            <div class="progress-bar">
              <div class="progress-bar-fill-1"></div>
              <div class="progress-bar-fill-2"></div>
              <div class="progress-bar-fill-3"></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      {/* {<TableFile team={props} />} */}
      <div>{showTable && <TableFile team={props} />}</div>

      {/* {showTable &&(
        <div>
          <TableFile team={props}/>
        </div>
      )} */}
    </>
  );
};
export default Main;
