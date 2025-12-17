import { Text } from "@react-email/components";
import { EmailLayout } from "../../components/email-layout";
import { MailTo } from "../../components/mail-to";
import { APP_NAME, EMAILS } from "../../constants";
import type { Donation } from "../../types";

export function DonationError({
  donor_first_name,
  recipient_name,
  error_message,
}: Donation.ErrorProps) {
  return (
    <EmailLayout
      type="donation"
      preview_text={`Donation for ${recipient_name} failed`}
    >
      <Text>Hi {donor_first_name},</Text>
      <Text>We were unable to process your donation to {recipient_name}.</Text>
      <Text style={{ background: "#FFF0F0", padding: "20px", color: "red" }}>
        {error_message}
      </Text>
      <Text>
        We appreciate your intention to support our cause and would like to
        connect to resolve this issue. Please reach out to us via{" "}
        <MailTo email={EMAILS.hi} />.
      </Text>
      <Text>Thank you for your understanding and generosity.</Text>
      <Text style={{ margin: 0 }}>Sincerely,</Text>
      <Text
        style={{
          margin: 0,
          marginBottom: 20,
          fontWeight: 600,
          color: "#3FA9F5",
        }}
      >
        The {APP_NAME} Team
      </Text>
    </EmailLayout>
  );
}

DonationError.subject = (props: Donation.ErrorProps) =>
  `Donation for ${props.recipient_name} failed`;
