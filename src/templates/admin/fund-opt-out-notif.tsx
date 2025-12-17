import { Text } from "@react-email/components";
import { EmailLayout } from "../../components/email-layout";
import type { FundOptOutProps } from "../../types";

export function FundOptOutNotif({ first_name, endow_name }: FundOptOutProps) {
  return (
    <EmailLayout
      type="fund"
      preview_text={`${endow_name} opted out of your fundraiser`}
    >
      <Text>Hello {first_name},</Text>
      <Text>
        {endow_name} has opted out of your fundraiser. For further details
        regarding that, please contact {endow_name} directly.
      </Text>
    </EmailLayout>
  );
}

FundOptOutNotif.subject = (props: FundOptOutProps) =>
  `${props.endow_name} opted out of your fundraiser.`;
