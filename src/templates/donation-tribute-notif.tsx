import { Text } from "@react-email/components";
import { EmailLayout } from "../components/email-layout";
import { format_amount } from "../helpers";
import type { IAmount, IDonor } from "../types";

export interface IData {
	in_honor_of: string;
	to_full_name: string;
	donor: IDonor & { title?: string };
	nonprofit_name: string;
	amount: IAmount;
	from_msg?: string;
}

function Jsx({
	in_honor_of,
	to_full_name,
	donor,
	nonprofit_name,
	amount,
	from_msg,
}: IData) {
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

export const template = (data: IData) => {
	return {
		node: <Jsx {...data} />,
		subject: `Donation in honor of ${data.in_honor_of}`,
	};
};
