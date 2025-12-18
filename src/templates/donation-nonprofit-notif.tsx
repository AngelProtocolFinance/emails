import { Hr, Link, Text } from "@react-email/components";
import { EmailLayout } from "../components/email-layout";
import { KeyValue } from "../components/key-value";
import { MailTo } from "../components/mail-to";
import { DAPP_URL, EMAILS } from "../constants";
import { format_amount } from "../helpers";
import type { IAmount, IDonor } from "../types";

export interface IData {
	transaction_id: string;
	transaction_date: string;
	amount: IAmount;
	nonprofit_name: string;
	program_name?: string;
	is_recurring?: boolean;
	donor?: IDonor;
	claimed?: boolean;
	nonprofit_id: string;
	msg_to_npo?: string;
}

function Jsx({
	transaction_id,
	transaction_date,
	amount,
	nonprofit_name,
	donor,
	program_name,
	is_recurring,
	msg_to_npo,
}: IData) {
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

export const template = (data: IData) => {
	return {
		node: <Jsx {...data} />,
		subject: data.claimed
			? `Donation to ${data.nonprofit_name}`
			: `Donation to Unclaimed NPO: ${data.nonprofit_id} ${data.nonprofit_name}`,
	};
};
