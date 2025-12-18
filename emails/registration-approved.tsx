import { registration_approved } from "../src/templates";

const { node } = registration_approved.template({
	org_name: "Save The Rainforest Foundation",
	registrant_first_name: "Jane",
	endow_id: "12345",
});

export default () => node;
