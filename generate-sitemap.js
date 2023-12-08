const SitemapGenerator = require("sitemap-generator");
const generator = new SitemapGenerator("https://example.com"); // Replace with your website URL

generator.on("done", () => {
  console.log("Sitemap generated");
});

generator.start();
