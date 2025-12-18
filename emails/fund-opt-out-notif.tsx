import { template } from "../src/templates/fund-opt-out-notif";

const { node } = template({
	from_fname: "John",
	to_name: "Wildlife Conservation Society",
});

export default () => node;
