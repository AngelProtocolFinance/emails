import { Hr, Text } from "@react-email/components";
import { EmailLayout } from "../../components/email-layout";
import { MailTo } from "../../components/mail-to";
import { APP_NAME, EMAILS } from "../../constants";
import { format_amount } from "../../helpers";
import type { Donation } from "../../types";

export function PrivateMessage({
  nonprofit_name,
  donor,
  message,
  amount,
  transaction_id,
  transaction_date,
}: Donation.IPrivateMessageProps) {
  return (
    <EmailLayout
      type="donation"
      preview_text={`Private message from ${donor.full_name} with ${format_amount(amount)} donation`}
    >
      <Text>
        {donor.full_name} has sent {nonprofit_name} a private message thru{" "}
        {format_amount(amount)} donation via {APP_NAME}.
      </Text>

      <Text style={{ fontSize: 12, color: "gray", marginTop: 10 }}>
        Transaction ID: {transaction_id} • {transaction_date}
      </Text>

      <Hr />

      <h2 style={{ fontSize: 14, marginBottom: 0 }}>
        Message from {donor.first_name}
      </h2>
      <Text
        style={{
          marginTop: 4,
          padding: "12px",
          backgroundColor: "#f5f5f5",
          borderLeft: "3px solid #067df7",
          fontStyle: "italic",
        }}
      >
        {message}
      </Text>

      <Hr />

      <Text
        style={{
          marginTop: 10,
          fontSize: 12,
          color: "gray",
          lineHeight: 1.4,
        }}
      >
        This message was sent to you through {APP_NAME}. If you have any
        questions or concerns, please email <MailTo email={EMAILS.support} />
      </Text>
    </EmailLayout>
  );
}

PrivateMessage.subject = (props: Donation.IPrivateMessageProps) =>
  `Private message from ${props.donor.full_name} with ${format_amount(props.amount)} donation`;
