import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Mugundhan Perumal",
		short_name: "mugundhan",
		description:
			"Software Engineer from India specializing in React, Python, TypeScript & Data Science.",
		start_url: "/",
		id: "com.mugundhanperumal",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/favicon/web-app-manifest-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/favicon/web-app-manifest-512x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
		],
	};
}
