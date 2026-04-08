export default async function sitemap() {
	const baseUrl = "https://mugundhanperumal.com";

	const routes = [
		{
			url: baseUrl,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly" as const,
			priority: 1.0,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: "2025-01-01T00:00:00.000Z",
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/resume`,
			lastModified: "2025-01-01T00:00:00.000Z",
			changeFrequency: "monthly" as const,
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: "2025-01-01T00:00:00.000Z",
			changeFrequency: "yearly" as const,
			priority: 0.5,
		},
	];

	return [...routes];
}
