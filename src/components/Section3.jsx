import styles from "../styles/Section3.module.css";

export default function Section3() {
  return (
    <div className={styles.horario}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3>Horário de funcionamento</h3>
      <p>Segunda - Sexta : 7:00 - 18:00</p>
    </div>
  );
}
