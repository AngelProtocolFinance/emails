import { RegistrationRejected } from "../src/templates/registration/rejected";

export default function Preview() {
  return (
    <RegistrationRejected
      registrant_first_name="Jane"
      rejection_reason="The organization's 501(c)(3) status could not be verified. Please provide a valid IRS determination letter."
    />
  );
}
