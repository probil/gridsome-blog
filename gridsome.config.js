// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Кращі технічні статті",
  siteDescription:
    "Переклади технічних статей українською",
  siteUrl: "",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true
          }
        }
      }
    }
  ],
  templates: {
    Tag: "/tag/:id"
  },
  transformers: {
    remark: {
      plugins: [
        [
          "gridsome-plugin-remark-shiki",
          { theme: "Material-Theme-Palenight", skipInline: true }
        ],
        [
          "@noxify/gridsome-plugin-remark-embed",
          {
            enabledProviders: ['Twitter', 'Youtube'],
            Twitter: {
              hideConversation: false,
              hideMedia: false,
              align: 'center'
            }
        }]
      ],
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  }
};
