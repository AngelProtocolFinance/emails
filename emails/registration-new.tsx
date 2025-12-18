import { registration_new } from "../src/templates";

const { node } = registration_new.template({
	reference_id: "REG-2025-001234",
});

export default () => node;
