const fs = require('fs');

const components = require('path').resolve(__dirname, '..') + '/components/';

process.argv.forEach((val, index) => {
  const template = `import PropTypes from 'prop-types';

export default function ${val}(props) {
  const {
    children
  } = props
  return (
      <>{children}</>
  )
}

${val}.propTypes = {
  children: PropTypes.element
}

${val}.defaultProps = {
  children: undefined
}
`;

  if (index >= 2) {
    fs.writeFile(`${components + val}.js`, template, () => {});
  }
});
