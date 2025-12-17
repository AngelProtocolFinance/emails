import { DonorNotif } from "../src/templates/donation/donor-notif";

export default function Preview() {
  return (
    <DonorNotif
      donor_first_name="Jane"
      transaction_id="TXN-2025-001234"
      nonprofit_name="Save The Rainforest Foundation"
      program_name="Amazon Conservation"
      is_guest={true}
      is_recurring={false}
    />
  );
}
