import { Hr, Link, Text } from "@react-email/components";
import { EmailLayout } from "../../components/email-layout";
import { KeyValue } from "../../components/key-value";
import { MailTo } from "../../components/mail-to";
import { DAPP_URL, EMAILS } from "../../constants";
import { format_amount } from "../../helpers";
import type { Donation } from "../../types";

export function NonprofitNotif({
  transaction_id,
  transaction_date,
  amount,
  nonprofit_id,
  nonprofit_name,
  claimed,
  donor,
  program_name,
  is_recurring,
  msg_to_npo,
}: Donation.NonprofitNotifProps) {
  return (
    <EmailLayout
      type="donation"
      preview_text={`${nonprofit_name} has received a donation`}
      bottom_content={
        <Text style={{ textAlign: "center", fontSize: 12, color: "gray" }}>
          Getting too many emails?{" "}
          <Link href={`${DAPP_URL}/dashboard/settings`}>
            Manage your preferences
          </Link>
        </Text>
      }
    >
      <Text>Hi,</Text>
      <Text>
        {nonprofit_name} has received a donation via Better Giving. You can also
        see a record of this donation in your Better Giving dashboard.
      </Text>
      <KeyValue label="Transaction ID" value={transaction_id} />
      <KeyValue label="Transaction date" value={transaction_date} />
      <KeyValue
        label="Item"
        value={is_recurring ? "Online recurring donation" : "Online donation"}
      />
      <KeyValue label="Quantity" value={format_amount(amount)} />
      {program_name && <KeyValue label="Program" value={program_name} />}

      {donor && (
        <>
          <h2 style={{ fontSize: 16, marginTop: 20 }}>Donor details</h2>
          <KeyValue label="Full name" value={donor.full_name} />
          {donor.address && <KeyValue label="Address" value={donor.address} />}
        </>
      )}

      {msg_to_npo && (
        <>
          <Hr />
          <h2 style={{ fontSize: 14, marginBottom: 0 }}>
            A private message from {donor?.first_name || "the donor"}
          </h2>
          <Text style={{ marginTop: 4 }}>{msg_to_npo}</Text>
        </>
      )}

      <Text
        style={{
          marginTop: 10,
          fontSize: 12,
          color: "gray",
          lineHeight: 1.4,
        }}
      >
        For donor's tax purposes, no goods or services are provided in exchange
        for this donation. If you have any questions, please email{" "}
        <MailTo email={EMAILS.support} />
      </Text>
    </EmailLayout>
  );
}

NonprofitNotif.subject = (props: Donation.NonprofitNotifProps) =>
  props.claimed
    ? `Donation to ${props.nonprofit_name}`
    : `Donation to Unclaimed NPO: ${props.nonprofit_id} ${props.nonprofit_name}`;
