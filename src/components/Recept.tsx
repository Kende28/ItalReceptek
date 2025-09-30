interface TeaProps {
  szemelyek: string;
  cseszek: number;
}

export function Recept(props: TeaProps) {
  return (
    <>
      <h2>{props.szemelyek}</h2>
      <p>
        Forralj fel {props.cseszek} csésze vizet.
        <br />
        Adjunk hozzá {props.cseszek} kanál (tetszőleges) teát és{" "}
        {0.5 * props.cseszek} kanál fűszert.
        <br />
        Adjunk hozzá {0.5 * props.cseszek} csésze tejet, hogy felforraljuk, és ízlés szerint cukrot.
      </p>
    </>
  );
}
