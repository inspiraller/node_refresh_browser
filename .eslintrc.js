module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    },
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    mocha: true,
    node: true
  },
  plugins: ["import"],
  rules: {
    'comma-dangle': [2, 'never'],
    'object-curly-spacing': [2, 'never'],
    'react/jsx-curly-spacing': [2, 'never', {allowMultiline: false}],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/sort-comp': 0,
    'react/no-multi-comp': 1,
    'import/no-unresolved': 0,
    'no-trailing-spaces': 0,
    'no-useless-escape': 0,
    'no-unused-vars': 1,
    'no-nested-ternary': 0,
    'no-console': 0,
    'quote-props': 0,
    'no-use-before-define': 0,
    radix: 0,
    'no-case-declarations': 0,
    'jsx-a11y/img-has-alt': 0,
    'max-len': [
      2,
      150,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false
      }
    ],
    'jsx-uses-react': 0,
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'react/jsx-filename-extension': 0,
    'no-caller': 0,
    'no-undef': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-no-target-blank': 0,
    'react/self-closing-comp': 0,
    'jsx-a11y/label-has-for': 0,
    'no-extra-boolean-cast': 0,
    'no-void': 0,
    'space-unary-ops': 0,
    'object-property-newline': 0,
    'no-mixed-operators': 0,
    'jsx-a11y/href-no-hash': 0,
    'react/no-find-dom-node': 0,
    'import/no-named-as-default': 0,
    'no-multi-str': 0,
    'react/require-extension': 0,
    'no-param-reassign': [2, {props: false}],
    'arrow-parens': ['error', 'as-needed'],
    'jsx-a11y/no-static-element-interactions': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/anchor-has-content': [
      2,
      {
        components: ['']
      }
    ],
    'class-methods-use-this': 0,
    'no-unused-expressions': ['error', {allowShortCircuit: true, allowTernary: true}],
    'no-restricted-properties': [0, {object: 'Math', property: 'pow'}],
    'new-cap': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'linebreak-style': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'prefer-promise-reject-errors': 0,
    'no-restricted-globals': 0,
    'prefer-destructuring': 0,

    'function-paren-newline': 0,
    'key-spacing': 0,
    'global-require': 0,
    'comma-dangle': 0
  }
};
