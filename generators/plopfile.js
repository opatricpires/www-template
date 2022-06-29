module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?'
      }
    ],

    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
    ]
  })
  plop.setGenerator('page', {
    description: 'application component',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Page name?'
      }
    ],

    actions: [
      {
        type: 'add',
        path: '../src/pages/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
    ]
  })
}
