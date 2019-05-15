import React from "react";

export default function layout({children}) {
  return (
    <>
      <header>
        <h1>My Boiler Plate</h1>
      </header>

      <div>{children}</div>
      <footer>My App</footer>
    </>
  );
}
