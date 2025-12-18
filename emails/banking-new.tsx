import { banking } from "../src/templates";

const { node } = banking.template({
	action: "new",
	account_summary: "Chase Bank ending in 1234",
});

export default () => node;
