import { banking } from "../src/templates";

const { node } = banking.template({
	action: "default",
	account_summary: "Chase Bank ending in 1234",
});

export default () => node;
