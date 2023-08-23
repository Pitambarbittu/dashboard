import "./App.css";
import Dashboard from "./Dashboard";
import Main from "./Main";
// import { useState } from "react";
// import TableFile from "./TableFile";
import FilterCompo from "./FilterCompo";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const data = [
    {
      project: "FinOps",
      product: "product",
      Sprint: "FinOps",
      startdate: "7Aug",
      enddate: "18Aug",
      timetracking: {
        planned: 940,
        logged: 760,
        totalhours: 1254,
      },
      variance: 25,
      team: [
        {
          name: "Dawn Johnson",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Miss Henrietta Rosenbaum",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Pam Altenwerth",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Gary Guttewan",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Diana Larkin",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Brittary Hansem Pho",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Julie Larkin",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Happy Soni",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Sanyam Rathore",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Pitambar Bhadra",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
      ],
    },
    {
      project: "AutoPark",
      product: "product",
      Sprint: "Renaissance",
      startdate: "7Aug",
      enddate: "18Aug",
      timetracking: {
        planned: 1040,
        logged: 560,
        totalhours: 1254,
      },
      variance: 55,
      team: [
        {
          name: "Dawn Johnson",
          teamname: "Renaissance",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["Renaissance"],
        },
        {
          name: "Miss Henrietta Rosenbaum",
          teamname: "Renaissance",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["Renaissance"],
        },
        {
          name: "Pam Altenwerth",
          teamname: "Renaissance",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["Renaissance"],
        },
        {
          name: "Gary Guttewan",
          teamname: "Renaissance",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["Renaissance"],
        },
        {
          name: "Diana Larkin",
          teamname: "Renaissance",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["Renaissance"],
        },
        {
          name: "Brittary Hansem Pho",
          teamname: "Renaissance",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["Renaissance"],
        },
        {
          name: "Julie Larkin",
          teamname: "Renaissance",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["Renaissance"],
        },
        {
          name: "Happy Soni",
          teamname: "Renaissance",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["Renaissance"],
        },
        {
          name: "Sanyam Rathore",
          teamname: "Renaissance",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["Renaissance"],
        },
        {
          name: "Pitambar Bhadra",
          teamname: "Renaissance",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["Renaissance"],
        },
      ],
    },
    {
      project: "MCD - Operational Dashboard",
      product: "software",
      Sprint: "MCD Sprint 12",
      startdate: "28July",
      enddate: "3Aug",
      timetracking: {
        planned: 1040,
        logged: 560,
        totalhours: 1254,
      },
      variance: 55,
      team: [
        {
          name: "Dawn Johnson",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Miss Henrietta Rosenbaum",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Pam Altenwerth",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Gary Guttewan",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Diana Larkin",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Brittary Hansem Pho",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Julie Larkin",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
      ],
    },
    {
      project: "Atlassian Development",
      product: "software",
      Sprint: "AD 2023.3.3",
      startdate: "31July",
      enddate: "14Aug",
      timetracking: {
        planned: 940,
        logged: 760,
        totalhours: 1254,
      },
      variance: 25,
      team: [
        {
          name: "Dawn Johnson",
          teamname: "AD",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["AD", "AD cleanup"],
        },
        {
          name: "Miss Henrietta Rosenbaum",
          teamname: "AD",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["AD"],
        },
        {
          name: "Pam Altenwerth",
          teamname: "AD",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["AD"],
        },
        {
          name: "Gary Guttewan",
          teamname: "AD",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["AD", "AD cleanup"],
        },
        {
          name: "Diana Larkin",
          teamname: "AD",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["AD", "AD cleanup"],
        },
      ],
    },
    {
      project: "DEVOPS",
      product: "product",
      Sprint: "DEVOPS",
      startdate: "7Aug",
      enddate: "18Aug",
      timetracking: {
        planned: 940,
        logged: 760,
        totalhours: 1254,
      },
      variance: 25,
      team: [
        {
          name: "Dawn Johnson",
          teamname: "DEVOPS",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["DEVOPS"],
        },
        {
          name: "Miss Henrietta Rosenbaum",
          teamname: "DEVOPS",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["DEVOPS"],
        },
        {
          name: "Pam Altenwerth",
          teamname: "DEVOPS",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["DEVOPS"],
        },
      ],
    },
    {
      project: "AAS",
      product: "product",
      Sprint: "Renaissance",
      startdate: "7Aug",
      enddate: "18Aug",
      timetracking: {
        planned: 1040,
        logged: 560,
        totalhours: 1254,
      },
      variance: 55,
      team: [
        {
          name: "Dawn Johnson",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Miss Henrietta Rosenbaum",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Pam Altenwerth",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Gary Guttewan",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Diana Larkin",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
        {
          name: "Brittary Hansem Pho",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM", "RSM cleanup"],
        },
      ],
    },
    {
      project: "MCDSelfServiceVisibilityCR",
      product: "product",
      Sprint: "Renaissance",
      startdate: "7Aug",
      enddate: "18Aug",
      timetracking: {
        planned: 1040,
        logged: 560,
        totalhours: 1254,
      },
      variance: 55,
      team: [
        {
          name: "Dawn Johnson",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Miss Henrietta Rosenbaum",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Pam Altenwerth",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Gary Guttewan",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Diana Larkin",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Brittary Hansem Pho",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Julie Larkin",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Happy Soni",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Sanyam Rathore",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
        {
          name: "Pitambar Bhadra",
          teamname: "RSM",
          plannedhours: 40,
          logged: 21.31,
          variance: 21,
          activesprint: ["RSM"],
        },
      ],
    },
  ];

  // const [showTable, setShowTable] = useState(false);

  // const handleFinOpsClick = () => {
  //   setShowTable(!showTable);
  // };
  return (
    <>
      <div>
        <div
          style={{
            marginBottom: "29px",
            marginLeft: "24px",

            display: "flex",
            justifyContent: "space-Between",
            width: "1154px",
            color: "#2D2F33",
            height: "36px",
          }}
        >
          <div
            style={{
              height: "22px",
              fontSize: "18px",
              fontWeight: "700",
              lineHeight: "normal",
              color: "#2D2F33",
              display: "inline-block",
              marginTop: "5px",
            }}
          >
            Resource Overview
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "inline-Block",
                alignItems: "center",
                height: "16px",
                width: "45px",
                fontSize: "13px",
                lineHeight: "normal",
                fontWeight: "500",
                marginTop: "-12px",
              }}
            >
              1 Week
            </div>

            <div
              style={{
                border: "1px solid rgb(232, 232, 232)",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#F5F7FA",
                height: "36px",
                borderRadius: "4px",
                boxSizing: "border-box",
                position: "relative",
                bottom: "20px",
              }}
            >
              <div
                style={{
                  padding: "4px 16px",
                  height: "16px",
                  fontWeight: "500",
                  fontSize: "13px",
                  lineHeight: "15.73px",
                }}
              >
                8 May, 2023 - 12 Jun, 2023
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", width: "1154px", marginLeft: "24px" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <div>
            <div className="App">
              <Dashboard />
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "24px",
                padding: "0%",
                gap: "15px",
              }}
            >
              {data.map((proj, index) => {
                return (
                  <div>
                    <Main key={index} project={proj} />
                  </div>
                );
              })}

              {/* {showTable && <TableFile />} */}
            </div>
          </div>

          <div>
            <FilterCompo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
