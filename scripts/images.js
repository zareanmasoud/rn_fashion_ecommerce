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

const generate = () => {
  let properties = imageFileNames()
    .map(name => {
      return `${name}: require('./images/${name}.png')`;
    })
    .join(',\n  ');

  const string = `export const images = {
  ${properties}
};
`;

  fs.writeFileSync('src/res/images/images.js', string, 'utf8');
};

generate();
