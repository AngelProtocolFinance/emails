import { fund_opt_out_notif } from "../src/templates";

const { node } = fund_opt_out_notif.template({
	first_name: "John",
	endow_name: "Wildlife Conservation Society",
});

export default () => node;
