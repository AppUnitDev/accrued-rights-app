import React from "react";

const Dashboard = () => {
  return (
    <div className="home">
      <h1 className="shadow-sm-text-succes mt -5 p-3 text-center rounded">
        Accrued Rights Module Dashboard
      </h1>
      <container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button type="button" class="btn btn-primary">
          Click
        </button>
      </container>
    </div>
  );
};

export default Dashboard;
