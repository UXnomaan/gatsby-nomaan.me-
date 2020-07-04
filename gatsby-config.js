module.exports = {
    siteMetadata: {
        title: `Nomaan Ahgharian`,
        name: `Nomaan Ahgharian`,
        siteUrl: `https://nomaan.me`,
        description: `Website of Nomaan Ahgharian - A Chicago based Software Engineer and UXer`,
        hero: {
            heading: `Hi, I'm Nomaan, a Chicago based Software Engineer with User Experience first approach `,
            maxWidth: 652,
        },
        social: [
            {
                name: `twitter`,
                url: `https://twitter.com/UXNomaan`,
            },
            {
                name: `github`,
                url: `https://github.com/UXNomaan`,
            },
            {
                name: `instagram`,
                url: `https://instagram.com/UXNomaan`,
            },
            {
                name: `linkedin`,
                url: `https://www.linkedin.com/in/nomaan-ahgharian-0382a12a/`,
            },
        ],
    },
    plugins: [
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                basePath: "/",
                authorsPage: false,
                sources: {
                    local: true,
                    // contentful: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Nomaan Ahgharian`,
                short_name: `Nomaan`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {},
        },
    ],
};
