export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-hipline-studio',
                  apiId: '0876f4f7-3823-4ad3-ae98-7a60bd10fc26'
                },
                {
                  buildHookId: '608a4c142998f1a25d345c49',
                  title: 'Events Website',
                  name: 'sanity-nuxt-hipline',
                  apiId: '8cab23db-6c4c-4d33-aee6-353376358bf8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/meezyart/sanity-nuxt-hipline',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-hipline.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
