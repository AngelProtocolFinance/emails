import { Text } from "@react-email/components";
import { PublicLayout } from "../components/public-layout";

export interface IData {
	from_fname: string;
	to_name: string;
}

function Jsx({ from_fname, to_name }: IData) {
	return (
		<PublicLayout type="fund">
			<Text>Hello {from_fname},</Text>
			<Text>
				{to_name} has opted out of your fundraiser. For further details
				regarding that, please contact {to_name} directly.
			</Text>
		</PublicLayout>
	);
}

export const template = (data: IData) => {
	return {
		node: <Jsx {...data} />,
		subject: `${data.to_name} opted out of your fundraiser.`,
	};
};
