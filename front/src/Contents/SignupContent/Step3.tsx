import React from "react";

const Step3 = (props: { onPrev: () => void }) => {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "blue" }}>
      <button onClick={props.onPrev}>이전</button>
    </div>
  );
};

export default Step3;
