import { donation_private_message } from "../src/templates";

const { node } = donation_private_message.template({
	nonprofit_name: "Save The Rainforest Foundation",
	donor: {
		first_name: "John",
		full_name: "John Smith",
	},
	message:
		"I've been following your work for years and wanted to express my deep appreciation. The recent documentary about your conservation efforts in the Amazon was truly inspiring. Please keep up the incredible work!",
	amount: { value: 500, currency: "USD", value_usd: 500 },
	transaction_id: "TXN-2025-001234",
	transaction_date: "December 17, 2025",
});

export default () => node;
