// Templates
export {
  DonationReceipt,
  NonprofitNotif,
  DonorNotif,
  TributeNotif,
  MicrodepositAction,
  DonationError,
  PrivateMessage,
} from "./templates/donation";

export {
  RegistrationNew,
  RegistrationApproved,
  RegistrationRejected,
} from "./templates/registration";

export { Banking } from "./templates/banking";
export type { BankingProps } from "./templates/banking";

export { EndowAdminNew, FundOptOutNotif } from "./templates/admin";

// Shared components (for custom email templates)
export { EmailLayout } from "./components/email-layout";
export type { EmailLayoutProps } from "./components/email-layout";
export { KeyValue } from "./components/key-value";
export type { KeyValueProps } from "./components/key-value";
export { MailTo } from "./components/mail-to";
export type { MailToProps } from "./components/mail-to";
export { SocialLinks } from "./components/social-links";

// Types
export type {
  Registration,
  Donation,
  IEndowAdminNewProps,
  IFundOptOutProps,
} from "./types";

// Constants
export { APP_NAME, DAPP_URL, EMAILS } from "./constants";
