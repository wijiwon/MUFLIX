import React from "react";

const Step2 = (props: { onNext: () => void; onPrev: () => void }) => {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "green" }}>
      <button onClick={props.onPrev}>이전</button>
      <button onClick={props.onNext}>다음</button>
    </div>
  );
};

export default Step2;
