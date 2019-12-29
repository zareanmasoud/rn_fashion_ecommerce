const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/res/images/images')
    .filter(file => {
      return file.endsWith('.png');
    })
    .map(file => {
      return file
        .replace('@2x.png', '')
        .replace('@3x.png', '')
        .replace('.png', '');
    });

  return Array.from(new Set(array));
};

const getCamelCase = hyphenCase => {
  return hyphenCase.replace(/-([a-zA-Z0-9])/g, g => {
    return g[1].toUpperCase();
  });
};

const generate = () => {
  let properties = '';
  const imports = imageFileNames()
    .map(name => {
      const property = getCamelCase(name);
      properties += `  ${property},\n`;
      return `import ${property} from 'res/images/images/${name}.png';`;
    })
    .join('\n');
  const string = `${imports}
  
const images = { 
${properties}};

export default images;
`;

  fs.writeFileSync('src/res/images/images.js', string, 'utf8');
};

generate();
