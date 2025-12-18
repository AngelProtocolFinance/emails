import { Banking } from "../src/templates/banking";

export default function Preview() {
  return (
    <Banking
      action="approved"
      account_summary="Chase Bank ending in 1234"
    />
  );
}
