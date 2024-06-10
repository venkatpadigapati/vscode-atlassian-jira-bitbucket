module.exports = {
    extends: ['plugin:import/typescript', 'plugin:prettier/recommended'],
    env: {
        browser: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    plugins: [
        '@typescript-eslint',
        //"@typescript-eslint/tslint",
        'react',
        'react-hooks',
        'import',
        'prettier',
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/await-thenable': 'error',
        "@typescript-eslint/naming-convention": [
            "error",
            {
              "selector": "class",
              "format": ["PascalCase"]
            }
        ],
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['**/webpack.*', '**/test/*', '**/*.test.js', '**/*.spec.js'] },
        ],
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    '@atlassianlabs/guipi-core-components/*',
                    '@atlassianlabs/guipi-core-controller/*',
                    '@atlassianlabs/guipi-jira-components/*',
                    '@atlassianlabs/jira-metaui-client/*',
                    '@atlassianlabs/jira-metaui-transformer/*',
                    '@atlassianlabs/jira-pi-client/*',
                    '@atlassianlabs/jira-pi-common-models/*',
                    '@atlassianlabs/pi-client-common/*',
                ],
            },
        ],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        curly: 'error',
        eqeqeq: ['error', 'always'],
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        'no-throw-literal': 'error',
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {},
        },
    },
};
