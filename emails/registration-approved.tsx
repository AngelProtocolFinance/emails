import { RegistrationApproved } from "../src/templates/registration/approved";

export default function Preview() {
  return (
    <RegistrationApproved
      org_name="Save The Rainforest Foundation"
      registrant_first_name="Jane"
      endow_id="12345"
    />
  );
}
