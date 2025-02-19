var Generator = require('yeoman-generator');
const to = require('to-case');
const recast = require('recast');

const updateConfigs = function(params) {
  // Load config file
  const ast = recast.parse(params.configs);
  // Filter themeConfig property
  const themeConfig = ast.program.body[0].expression.right.properties.filter(element => {
    if (element.key.name === 'themeConfig') return true;
    return false;
  })[0];
  if (!themeConfig) return;
  // Filter option property
  let property = themeConfig.value.properties.filter(element => {
    if (element.key.name === params.option) return true;
    return false;
  });
  if (property.length === 0) return;
  property = property[0].value.elements;
  const route = JSON.parse(JSON.stringify(property[0]));
  if (route.elements) {
    route.elements[0].value = `/${params.props.pageSlug}/`;
    route.elements[1].value = params.props.pageName;
  } else {
    route.properties[0].value.value = params.props.pageName;
    route.properties[1].value.value = `/${params.props.pageSlug}/`;
  }

  property.push(route); // Add new route
  return recast.print(ast).code;
};

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'pageName',
        message: 'Page name:'
      }
    ]).then(props => {
      this.props = props;
      this.props.pageSlug = to.slug(this.props.pageName);
      this.log('\n\n');
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('.'),
      this.destinationPath(`docs/${this.props.pageSlug}/.`),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('./assets/.gitkeep'),
      this.destinationPath(`docs/${this.props.pageSlug}/assets/.gitkeep`),
      this.props
    );
    if (!this.fs.exists(this.destinationPath('docs/.vuepress/config.js'))) return;
    const configs = this.fs.read('docs/.vuepress/config.js');
    const options = ['sidebar'];
    var output = null;
    for (let option of options) {
      let test = null;
      if (output === null) {
        test = updateConfigs({
          props: this.props,
          configs: configs,
          option: option
        });
      } else {
        test = updateConfigs({
          props: this.props,
          configs: output,
          option: option
        });
      }

      if (test !== undefined) output = test;
    }

    if (output !== null && output !== undefined) {
      output = output
        .replace(/{\n {8}text:/g, '{ text:')
        .replace(/\/"\n {6}}/g, '/" }')
        .replace(/"/g, "'")
        .replace(/,\n {8}link:/g, ', link:');
      this.fs.write('docs/.vuepress/config.js', output);
    }
  }

  install() {
    this.log(`Page Successfully Generated!!`);
  }
};
