import React from "react";
import "./table.css";
const TableFile = (prop) => {
  const props = prop.team.project;

  // const includedProjects = props.map(item => item.project);
  // const filteredData = props.filter(item => includedProjects.includes(item.project));
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "927px",
          height: "auto , 24px",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
          marginTop: "8px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "600",
              color: "#525A6C",
            }}
          >
            Team Allocated
          </div>
        </div>
        <div>
          <button className="btn">Download CSV</button>
        </div>
      </div>
      {/* //----------------------------------------------------------------------- */}
      <div
        style={{
          display: "flex",
          marginBottom: "22px",
          borderBottom: "1px solid rgb(232,232,232)",
          width: "58em",
        }}
      >
        <div>
          <button
            style={{
              backgroundColor: "#F5F7FA",
              width: "153px",
              height: "33px",
              color: "#384480",
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
              backgroundColor: "#3B3F6E",
              width: "max-content",
              height: "33px",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            <p className="btnp">{props.project}</p>
          </button>
        </div>

        <div
          style={{
            width: "65.5%",
          }}
        >
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
      {/* //------------------------------------------------------------------------- */}

      <div
        style={{
          width: "927px",
          height: "fit-content",
        }}
      >
        <table
          className="roundedCorners"
          style={{
            width: "927px",
            textAlign: "start",
          }}
        >
          <tr style={{ backgroundColor: "#F9F9F9", textAlign: "left" }}>
            <th>Team Members</th>
            <th> Team Name</th>
            <th>Planned Hours</th>
            <th>Logged</th>
            <th>Variance</th>
            <th>Active Sprint</th>
          </tr>

          {props.team.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.teamname}</td>
              <td>{item.plannedhours} hours</td>
              <td>{item.logged} hours</td>
              <td>{item.variance}</td>
              <td>
                <button className="active1">{item.activesprint[0]} </button>{" "}
                <button className="active2">{item.activesprint[1]}</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TableFile;
