import { cognito_forgot_password } from "../src/templates";

const { node } = cognito_forgot_password.template({
	code: "739154",
	first_name: "John",
});

export default () => node;
