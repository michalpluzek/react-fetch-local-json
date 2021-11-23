import "./Word.css";

export default function Word(props) {
  return (
    <li>
      Słowo po angielsku: <strong>{props.nameEn}</strong>. Tłumaczenie:{" "}
      <strong>{props.namePl}</strong>
    </li>
  );
}
