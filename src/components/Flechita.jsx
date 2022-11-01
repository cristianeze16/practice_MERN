import React from "react";

export default function Flechita(props) {
  console.log(props);

  let { verbo, estilo, click } = props; //saco la propidad verbo del objeto props

  return (
    <div
      className={`gray flecha  ${estilo}flex j-center a-center`}
      onClick={click}
    >
      {verbo}
    </div>
  );
}
