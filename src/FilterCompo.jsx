import React from "react";

const FilterCompo = () => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        height: "104px",
        width: "215px",
        gap: "8px",
        alignItems: "center",
        marginTop: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "70px",
          alignSelf: "stretch",
        }}
      >
        <div
          style={{
            fontSize: "15px",
            fontWeight: "400",
          }}
        >
          Filters
        </div>
        <div
          style={{
            display: "flex",
            gap: "9px",
            padding: "4px 6px",
            alignItems: "center",
            borderRadius: "4px",
            backgroundColor: "#F5F7FA",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              display: "flex",
              alignItem: "center",
            }}
          >
            {" "}
            <img
              style={{ width: "15px", height: "15px" }}
              src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/square-plus.png"
              alt=""
            />{" "}
          </div>
          <div style={{ fontSize: "13px", fontWeight: "400" }}>Add Filter</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          border: "1px solid #E1E7F0",
          borderRadius: "8px",
          width: "193px",
          height: "55px",
          padding: "10px",
          gap: "10px",
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Select Filter"
            style={{
              borderRadius: "4px",
              backgroundColor: "#F5F7FA",
              border: "none",
              padding: "4px 8px",
              width: "178px",
            }}
          />
        </div>
        <div
          style={{
            fontSize: "13px",
            width: "203px",
            fontWeight: "500",
            color: "#2D2F33",
            padding: "4px 8px",
          }}
        >
          Value
        </div>
      </div>
    </div>
  );
};

export default FilterCompo;
