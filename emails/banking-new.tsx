import { Banking } from "../src/templates/banking";

export default function Preview() {
  return (
    <Banking
      action="new"
      account_summary="Chase Bank ending in 1234"
    />
  );
}
