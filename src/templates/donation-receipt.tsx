import { Hr, Link, Text } from "@react-email/components";
import { EmailLayout } from "../components/email-layout";
import { KeyValue } from "../components/key-value";
import { APP_NAME, DAPP_URL } from "../constants";
import { format_amount } from "../helpers";
import type { IAmount, IDonor } from "../types";

export interface IData {
	transaction_id: string;
	transaction_date: string;
	amount: IAmount;
	nonprofit_name: string;
	program_name?: string;
	is_recurring?: boolean;
	/** is donation to Better Giving directly (vs through NPO) */
	is_bg?: boolean;
	donor: IDonor;
	/** tax receipt ID - if provided, shows as tax receipt */
	tax_receipt_id?: string;
	/** custom message from nonprofit */
	nonprofit_msg?: string;
}

function Jsx({
	transaction_id,
	transaction_date,
	amount,
	nonprofit_name,
	program_name,
	donor,
	tax_receipt_id,
	nonprofit_msg,
	is_recurring,
	is_bg,
}: IData) {
	return (
		<EmailLayout type="donation" preview_text="Thank you for donating">
			<Text>Hi {donor.first_name}</Text>
			<Text>
				We want to express our deepest gratitude for your generous{" "}
				{is_recurring && "recurring "}donation
				{is_bg ? "." : ` via ${APP_NAME} to ${nonprofit_name}.`} Your support
				for {is_bg ? APP_NAME : "them"} plays a pivotal role in driving positive
				change within our global community.
			</Text>
			<Text>
				{tax_receipt_id && (
					<>
						Below, you'll find your official tax receipt, which you can use for
						your records when tax season rolls around.{" "}
					</>
				)}
				Don't forget,{" "}
				<Link href="https://intercom.help/better-giving/en/articles/8791497-how-to-sign-in-to-a-better-giving-personal-account">
					you can sign in
				</Link>{" "}
				to keep track of all your donations
				{tax_receipt_id && " and download further receipts"}, if you have
				created your free {APP_NAME} personal account.
			</Text>
			<Text>
				If you know of any other nonprofits that could benefit from our Better
				Giving services, just direct them to our{" "}
				<Link href={`${DAPP_URL}/register`}>registration page</Link> so they can
				sign up and start to collect donations.
			</Text>
			<Text>
				Thank you once again for your incredible support. We look forward to
				continuing this journey of giving with you.
			</Text>
			<Text style={{ margin: 0 }}>Warm regards,</Text>
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

			{nonprofit_msg && (
				<>
					<Hr />
					<h2 style={{ fontSize: 14, marginBottom: 0 }}>
						A message from {nonprofit_name}
					</h2>
					<Text style={{ marginTop: 4 }}>{nonprofit_msg}</Text>
				</>
			)}

			<Hr />
			<h2 style={{ fontSize: 16, marginTop: 20 }}>
				{tax_receipt_id ? "Your Tax Receipt" : "Your donation summary"}
			</h2>
			<KeyValue label="Non-profit Organization" value={APP_NAME} />
			<KeyValue label="Grant Beneficiary" value={nonprofit_name} />
			{program_name && <KeyValue label="Program" value={program_name} />}
			<KeyValue label="Full name" value={donor.full_name} />
			{donor.address && <KeyValue label="Address" value={donor.address} />}
			{tax_receipt_id && <KeyValue label="Receipt ID" value={tax_receipt_id} />}
			<KeyValue label="Transaction ID" value={transaction_id} />
			<KeyValue label="Transaction date" value={transaction_date} />
			<KeyValue label="Item" value="Online donation" />
			<KeyValue label="Quantity" value={format_amount(amount)} />

			<Text
				style={{
					marginTop: 10,
					fontSize: 12,
					color: "gray",
					lineHeight: 1.4,
				}}
			>
				{APP_NAME} is a US 501(c)(3) tax-exempt nonprofit with EIN 87-3758939.
				No goods or services are provided to you in exchange for your gift, so
				the full amount you paid qualifies as a charitable contribution for US
				tax purposes. {APP_NAME} then grants the donation to the chosen
				nonprofit on your behalf.
			</Text>
		</EmailLayout>
	);
}

export const template = (data: IData) => {
	return {
		node: <Jsx {...data} />,
		subject: `${data.tax_receipt_id ? "Tax receipt: " : ""}Thank you for donating`,
	};
};
