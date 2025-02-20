import React from "react";

export default function Sum({ a, b }) {
  console.log("a:", a, "b:", b);
  return <div>sum: {a + b}</div>;
}

export function SumTest() {
  return (
    <div>
      <Sum a={5} b={10} />
    </div>
  );
}
