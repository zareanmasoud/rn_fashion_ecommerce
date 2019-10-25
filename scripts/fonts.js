const fs = require('fs');

const fontFileNames = () => {
  const array = fs.readdirSync('src/res/fonts/fonts').map(file => {
    return file.replace('.ttf', '');
  });

  return Array.from(new Set(array));
};

const generate = () => {
  const properties = fontFileNames()
    .map(name => {
      const key = name.replace(/\s/g, '');
      return `${key}: '${name}'`;
    })
    .join(',\n  ');

  const string = `export const fonts = {
  ${properties}
};
`;

  fs.writeFileSync('src/res/fonts/fonts.js', string, 'utf8');
};

generate();
