export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d014422d0a551018baef95a',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-fxhq3agg',
                  apiId: '214f85b2-5266-4b63-80df-fb60c6739f03'
                },
                {
                  buildHookId: '5d01442381092eb5664ab037',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-bmh6uq11',
                  apiId: '40f95dab-c910-4b69-9ca8-04bf57276bdf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bzerangue/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-bmh6uq11.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
