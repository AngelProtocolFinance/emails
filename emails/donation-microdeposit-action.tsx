import { donation_microdeposit_action } from "../src/templates";

const { node } = donation_microdeposit_action.template({
	donor_first_name: "Jane",
	recipient_name: "Save The Rainforest Foundation",
	verification_link: "https://better.giving/verify/abc123",
});

export default () => node;
