interface LablecProps {
  nev: string;
  datum: Date;
  perc: number;
  mi: boolean;
}

export function Lablec(props: LablecProps) {
  return (
    <>
      <p>Az oldalt készítette: {props.nev}</p>
      <p>Az oldalt készítette: {props.datum.toDateString()}</p>
      <p>Az oldalt készítette: {props.perc}</p>
      <p>Az oldalt készítette: {props.mi? "A feladatmegoldásban használtam MI-t" : "Nem használtam MI-t a feladatmegoldáshoz."}</p>
    </>
  );
}
