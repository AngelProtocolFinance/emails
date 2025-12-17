import { MicrodepositAction } from "../src/templates/donation/microdeposit-action";

export default function Preview() {
  return (
    <MicrodepositAction
      donor_first_name="Jane"
      recipient_name="Save The Rainforest Foundation"
      verification_link="https://better.giving/verify/abc123"
    />
  );
}
