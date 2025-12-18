import { donation_tribute_notif } from "../src/templates";

const { node } = donation_tribute_notif.template({
	in_honor_of: "Grandma Rose",
	to_full_name: "Mary Johnson",
	donor: {
		first_name: "Jane",
		full_name: "Jane Doe",
		title: "Dr.",
	},
	nonprofit_name: "Save The Rainforest Foundation",
	amount: { value: 100, currency: "USD", value_usd: 100 },
	from_msg:
		"In loving memory of Grandma Rose, who always loved nature and taught us to protect our planet.",
});

export default () => node;
