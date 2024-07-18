import React from "react";
import LoginHeader from "Layouts/Headers/LoginHeader";
import LoginHelpContent from "Contents/LoginHelpContent";

const index = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <LoginHeader />
      <LoginHelpContent />
    </div>
  );
};

export default index;
