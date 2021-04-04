export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6069fa25e471aac760eb6d3f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-68wcm4vs',
                  apiId: '0ff937f4-d559-46d4-bb73-247e1d9d0e12'
                },
                {
                  buildHookId: '6069fa265c2ee138b371f0da',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-r63ww3in',
                  apiId: '476f9e6c-5b8f-4251-a898-758a50b427b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anuragd/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-r63ww3in.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
