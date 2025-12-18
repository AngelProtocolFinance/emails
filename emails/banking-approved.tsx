import { banking } from "../src/templates";

const { node } = banking.template({
	action: "approved",
	account_summary: "Chase Bank ending in 1234",
});

export default () => node;
