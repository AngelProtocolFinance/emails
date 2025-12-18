import { Text } from "@react-email/components";
import { EmailLayout } from "../components/email-layout";
import { MailTo } from "../components/mail-to";
import { EMAILS } from "../constants";

export interface IData {
	registrant_first_name: string;
	rejection_reason: string;
}

function Jsx({ registrant_first_name, rejection_reason }: IData) {
	return (
		<EmailLayout
			type="registration"
			preview_text="Your application has been rejected"
		>
			<Text>Hi {registrant_first_name},</Text>
			<Text>
				Unfortunately, upon careful review from the Better Giving team we have
				deemed that this application to register with Better Giving did not pass
				the acceptance process for the following reason(s):
			</Text>
			<Text style={{ color: "red", fontWeight: 600 }}>{rejection_reason}</Text>
			<Text>
				You will need to make a new application that rectifies these issues, but
				if you have any questions at all, just get in touch at{" "}
				<MailTo email={EMAILS.hi} />
			</Text>
		</EmailLayout>
	);
}

export const template = (data: IData) => {
	return {
		node: <Jsx {...data} />,
		subject: "Your application has been rejected.",
	};
};
