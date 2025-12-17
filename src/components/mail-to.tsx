import { Link } from "@react-email/components";
import type { ReactNode } from "react";

export interface MailToProps {
  email: string;
  children?: ReactNode;
}

export function MailTo({ email, children }: MailToProps) {
  return <Link href={`mailto:${email}`}>{children ?? email}</Link>;
}
