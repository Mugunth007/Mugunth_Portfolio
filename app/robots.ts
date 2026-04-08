export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/"],
			},
			{
				userAgent: "Googlebot",
				allow: "/",
				crawlDelay: 0,
			},
		],
		sitemap: "https://mugundhanperumal.com/sitemap.xml",
		host: "https://mugundhanperumal.com",
	};
}
