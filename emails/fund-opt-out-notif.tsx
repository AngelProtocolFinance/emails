import { fund_opt_out_notif } from "../src/templates";

const { node } = fund_opt_out_notif.template({
	from_fname: "John",
	to_name: "Wildlife Conservation Society",
});

export default () => node;
