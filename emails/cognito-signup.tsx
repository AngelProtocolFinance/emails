import { cognito_signup } from "../src/templates";

const { node } = cognito_signup.template({
	code: "482916",
	first_name: "John",
});

export default () => node;
