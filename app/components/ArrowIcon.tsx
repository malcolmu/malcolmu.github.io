type ArrowDirection = "up-right" | "down-right" | "down" | "left" | "right";

const paths: Record<ArrowDirection, string> = {
  "up-right": "M3.5 12.5 12.5 3.5 M6 3.5h6.5V10",
  "down-right": "M3.5 3.5 12.5 12.5 M12.5 6v6.5H6",
  down: "M8 2.5v11 M3.5 9 8 13.5 12.5 9",
  left: "M13.5 8h-11 M7 3.5 2.5 8 7 12.5",
  right: "M2.5 8h11 M9 3.5 13.5 8 9 12.5",
};

export function ArrowIcon({ direction = "up-right" }: { direction?: ArrowDirection }) {
  return (
    <svg
      className={`arrow-icon arrow-icon--${direction}`}
      viewBox="0 0 16 16"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[direction]} />
    </svg>
  );
}
