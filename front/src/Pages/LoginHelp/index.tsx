import React from "react";
import LoginHeader from "Layouts/Headers/LoginHeader";
import Footer from "Layouts/Footers";
import LoginHelpContent from "Contents/LoginHelpContent";

const index = () => {
  return (
    <>
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
      <Footer />
    </>
  );
};

export default index;
