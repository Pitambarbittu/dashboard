import * as React from "react";

// import MyChart from "./MyChart";
// import Main from "./Main";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            marginBottom: "22px",
            borderBottom: "1px solid rgb(232,232,232)",
            width: "913px",
          }}
        >
          <div>
            <button
              style={{
                backgroundColor: "#4958A6",
                width: "153px",
                height: "33px",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              <p className="btnp">Global Dashboard</p>{" "}
            </button>
          </div>
          <div>
            <button
              style={{
                display: "flex",
                backgroundColor: "#ffffff",
                width: "36px",
                height: "33px",
                border: "1px solid #F5F7FA",
                cursor: "pointer",
              }}
            >
              <div className="plus"> + </div>
            </button>
          </div>
        </div>

        <div
          style={{
            // margin: "20px",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid rgb(232,232,232)",
            backgroundColor: "white",
            width: "913px",
            height: "118px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              // width:"704px",
              height: "118px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "10px",
            }}
          >
            <div
              style={{
                height: "86px",
                backgroundColor: "#F5F7FA",
                width: "205px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxSizing: "border-box",
                borderRadius: "8px",
                padding: "8px 16px 8px 16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  justifyContent: "space-between",
                }}
              >
                <div className="size">Resources</div>
                <div className="size">321</div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  justifyContent: "space-between",
                }}
              >
                <div className="size">Projects</div>
                <div className="size">21</div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  justifyContent: "space-between",
                }}
              >
                <div className="size">Products</div>
                <div className="size">3</div>
              </div>
            </div>

            <div
              style={{
                margin: "10px",
                backgroundColor: "white",
                display: "flex",
                gap: "6px",
                justifyContent: "center",
                alignItems: "center",
                borderRight: "1px solid #E1E7F0",
                textAlign: "left",
                position: "relative",
                bottom: "16px",
              }}
              className="Allocated"
            >
              <div
                style={{
                  position: "relative",
                  width: "86px",
                  bottom: "5px",
                }}
                className="overall-allocation"
              >
                {/* <MyChart totalLoggedTime={68} /> */}
                <div className="progress"></div>
              </div>
              <div className="segregated">
                <div style={{ color: "#4958A6" }}>Allocated </div>

                <div
                  style={{
                    width: "69px",
                    height: "39px",
                    font: "inter",
                    fontSize: "30px",
                    fontWeight: "600",
                    color: "#5BAF76",
                  }}
                >
                  68%
                </div>
                <div
                  style={{
                    backgroundColor: "#FCF5DF",
                    position: "relative",
                    width: "fit-content",
                    paddingLeft: "3px",
                    paddingRight: "3px",
                    borderRadius: "4px",
                    marginTop: "4px",
                  }}
                >
                  10,026 Hrs
                </div>
              </div>
            </div>

            <div
              style={{
                margin: "10px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRight: "1px solid #E1E7F0",
                textAlign: "left",
                // boxSizing:"border-box",
                position: "relative",
                bottom: "16px",
              }}
              className="segregated"
            >
              <div className="data">
                <div style={{ color: "#4958A6" }}>Planned Hrs</div>

                <div
                  style={{
                    width: "90px",
                    lineHeight: "38.73px",
                    height: "39px",
                    font: "inter",
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "#5BAF76",
                  }}
                >
                  3,006
                </div>

                <div
                  style={{
                    backgroundColor: "#E6F8EB",
                    position: "relative",
                    width: "fit-content",
                    paddingLeft: "3px",
                    paddingRight: "3px",
                    borderRadius: "4px",
                    marginTop: "4px",
                  }}
                >
                  65%
                </div>
              </div>
            </div>

            <div
              style={{
                margin: "10px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRight: "1px solid #E1E7F0",
                textAlign: "left",
                // boxSizing:"border-box",
                position: "relative",
                bottom: "16px",
              }}
              className="logged"
            >
              <div className="segregated">
                <div style={{ color: "#4958A6" }}>Logged</div>

                <div
                  style={{
                    width: "90px",
                    height: "39px",
                    font: "inter",
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "#E35B5B",
                  }}
                >
                  3,482
                </div>

                <div
                  style={{
                    backgroundColor: "#FCE6E6",
                    position: "relative",
                    width: "fit-content",
                    paddingLeft: "3px",
                    paddingRight: "3px",
                    borderRadius: "4px",
                    marginTop: "4px",
                  }}
                >
                  69%
                </div>
              </div>
            </div>

            <div
              style={{
                margin: "10px",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                textAlign: "left",
                // boxSizing:"border-box",
                position: "relative",
                bottom: "16px",
              }}
              className="variance"
            >
              <div className="segregated">
                <div style={{ color: "#4958A6" }}>Variance </div>

                <div
                  style={{
                    width: "90px",
                    lineHeight: "38.73px",
                    height: "39px",
                    font: "inter",
                    fontSize: "30px",
                    fontWeight: "500",
                    color: "#E35B5B",
                  }}
                >
                  -24.7%
                </div>
                <div
                  style={{
                    backgroundColor: "none",
                    width: "25px",
                    height: "17px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
