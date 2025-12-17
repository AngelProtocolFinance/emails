import { Banking } from "../src/templates/banking";

export default function Preview() {
  return (
    <Banking
      action="approved"
      account_summary="Chase Bank ending in 1234"
      rejection_reason="The account name does not match the organization's legal name on file."
    />
  );
}
