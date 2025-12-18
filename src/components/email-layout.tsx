import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import type { PropsWithChildren, ReactNode } from "react";
import { APP_NAME } from "../constants";
import { SocialLinks } from "./social-links";

export type EmailLayoutProps = PropsWithChildren<{
	preview_text?: string;
	type?: "registration" | "donation" | "fund";
	bottom_content?: ReactNode;
}>;

export function EmailLayout({
	children,
	preview_text,
	type,
	bottom_content,
}: EmailLayoutProps) {
	return (
		<Html lang="en">
			<Head>
				<title>{`Email from ${APP_NAME}`}</title>
			</Head>
			{preview_text && <Preview>{preview_text}</Preview>}
			<Body
				style={{
					fontFamily: "sans-serif",
					backgroundColor: "#fff",
				}}
			>
				<Container style={{ padding: 16 }}>
					<Section>
						{children}
						{type !== "donation" && (
							<>
								<Text style={{ margin: 0 }}>
									{type === "fund" ? "Best" : "Warm"} regards,
								</Text>
								<Text style={{ margin: 0, fontWeight: 600, color: "#3FA9F5" }}>
									The {APP_NAME} Team
								</Text>
							</>
						)}
					</Section>
					<Hr />
					<SocialLinks />

					{type === "registration" && (
						<Text style={{ textAlign: "center", margin: 0, marginTop: 4 }}>
							You received this email because you have registered your
							organization with us.
						</Text>
					)}

					<Text
						style={{
							textAlign: "center",
							margin: 0,
							marginTop: 4,
							fontSize: 13,
							color: "gray",
						}}
					>
						Better Giving Inc. | EIN: 87-3758939 | Copyright 2025 All Rights
						reserved.
					</Text>
					{bottom_content}
				</Container>
			</Body>
		</Html>
	);
}
