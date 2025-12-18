import { Text } from "@react-email/components";
import { EmailLayout } from "../components/email-layout";

export interface IData {
	first_name: string;
	endow_name: string;
}

function Jsx({ first_name, endow_name }: IData) {
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

export const template = (data: IData) => {
	return {
		node: <Jsx {...data} />,
		subject: `${data.endow_name} opted out of your fundraiser.`,
	};
};
