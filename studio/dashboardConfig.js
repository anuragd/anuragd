export default {
  widgets: [
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
                  title: 'AnuragD admin',
                  name: 'anuragd-admin',
                  apiId: '0ff937f4-d559-46d4-bb73-247e1d9d0e12'
                },
                {
                  buildHookId: '6069fa265c2ee138b371f0da',
                  title: 'AnuragD',
                  name: 'anuragd',
                  apiId: '476f9e6c-5b8f-4251-a898-758a50b427b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anuragd/anuragd',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://anuragd.netlify.app', category: 'apps'}
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
