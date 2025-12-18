import { Text } from "@react-email/components";
import { EmailLayout } from "../../components/email-layout";
import { format_amount } from "../../helpers";
import type { Donation } from "../../types";

export function TributeNotif({
  in_honor_of,
  to_full_name,
  donor,
  nonprofit_name,
  amount,
  from_msg,
}: Donation.ITributeNotifProps) {
  const donor_display = donor.title
    ? `${donor.title} ${donor.full_name}`
    : donor.full_name;

  return (
    <EmailLayout preview_text={`Donation in honor of ${in_honor_of}`}>
      <Text>Dear {to_full_name},</Text>

      <Text>
        {from_msg || (
          <>
            This is to inform you that {donor_display} has just made a donation
            to {nonprofit_name} for {format_amount(amount)}
          </>
        )}
      </Text>
    </EmailLayout>
  );
}

TributeNotif.subject = (props: Donation.ITributeNotifProps) =>
  `Donation in honor of ${props.in_honor_of}`;
