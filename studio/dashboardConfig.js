export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5fdecdf22386055c6579080a',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-a4i6odse',
                  apiId: 'a7b9933f-72e4-40ec-9721-d2fc81d413be'
                },
                {
                  buildHookId: '5fdecdf2af983883427e9cad',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-r34ujohs',
                  apiId: '0b6ea5fb-d89a-4968-97f9-e3f0757dc73e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kuzukawa/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-r34ujohs.netlify.app', category: 'apps'}
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
