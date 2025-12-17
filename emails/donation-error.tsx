import { DonationError } from "../src/templates/donation/error";

export default function Preview() {
  return (
    <DonationError
      donor_first_name="Jane"
      recipient_name="Save The Rainforest Foundation"
      error_message="Your payment was declined by your bank. Please try a different payment method or contact your bank for more information."
    />
  );
}
