module.exports = {
  siteMetadata: {
    title: `Lewitarium Spa`,
    author: {
      name: `Mishiko`,
      summary: `who lives contently and works in Warsaw/Poland building useful things.`,
    },
    siteUrl: `https://lewitarium.pl`,
    description:
      "Lewitarium oferuje wyjątkowe odprężenie i relaksację ciała i umysłu. Nasza terapia rest flow w Warszawie to idealna rehabilitacja dla zmęczonego ciała oraz duszy.",
    keywords:
      "floating, masaże, japońska sauna ganbanyoku, lewitarium, zabiegi kosmetyczne, spa, wellness",
    social: {
      facebook: `FloatingGanbanyoku`,
    },
    lang: "pl",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "lewitarium",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/static/favicon.ico",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
