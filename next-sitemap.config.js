/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://noion.cloud",
  generateRobotsTxt: true,
  outDir: "public",
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/admin"] },
    ],
    additionalSitemaps: ["https://noion.cloud/sitemap.xml"],
  },
};
