/* eslint-disable */

import {
	withItemData,
	statelessSessions,
} from "@keystone-next/keystone/session";
import { config, createSchema } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";
import "dotenv/config";

const databaseURL =
	process.env.DATABASE_URL || "mongodb://localhost/keystone-grid";

const sessionConfig = {
	maxAge: 60 * 60 * 24 * 360, // how long should they stay signed in
	secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
	listKey: "User",
	identityField: "email",
	secretField: "password",
	initFirstItem: {
		fields: ["name", "email", "password"],
		// TODO: add in initial roles here
	},
});

export default withAuth(
	config({
		// @ts-ignore
		server: {
			cors: {
				origin: [process.env.FRONTEND_URL],
				credentials: true,
			},
		},
		db: {
			adapter: "mongoose",
			url: databaseURL,
			onConnect() {
				console.log("Woohoo connected to db!");
			},
		},
		lists: createSchema({
			// schema items go here
			User,
			Product,
			ProductImage,
		}),
		ui: {
			// Show the UI only for people who pass this test
			isAccessAllowed: ({ session }) => {
				// console.log(session);
				return !!session?.data;
			},
		},
		session: withItemData(statelessSessions(sessionConfig), {
			// graphQL Query
			User: "id name email",
		}),
	})
);
