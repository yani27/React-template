import React, { useEffect } from "react";

export default function Page({ child, id, scrollTo }) {
  /* useEffect(() => {
    window.addEventListener(
      "scroll",
      (_) => {
        console.log(scrollTo);
        document.getElementById(scrollTo).scrollIntoView(true);
      },
      true
    );
  });*/
  return (
    <div id={id} className="page">
      {child}
    </div>
  );
}
