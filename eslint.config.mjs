import eslint from '@eslint/js';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import prettierPlugin from 'eslint-plugin-prettier';
import ngrxPlugin from '@ngrx/eslint-plugin';

export default [
    {
        ignores: ['projects/**/*', '**/stub-data/**'],
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            '@angular-eslint': angular.tsPlugin,
            prettier: prettierPlugin,
            '@ngrx': ngrxPlugin,
            'unused-imports': unusedImports,
        },
        rules: {
            eqeqeq: 'warn',
            '@ngrx/prefer-concat-latest-from': 'warn',
            '@ngrx/no-multiple-actions-in-effects': 'warn',
            '@ngrx/prefer-effect-callback-in-block-statement': 'warn',
            '@ngrx/updater-explicit-return-type': 'warn',
            '@ngrx/avoid-combining-selectors': 'warn',
            '@ngrx/avoid-dispatching-multiple-actions-sequentially': 'warn',
            '@ngrx/select-style': 'warn',
            '@ngrx/on-function-explicit-return-type': 'warn',
            '@typescript-eslint/no-unnecessary-template-expression': 'warn',
            '@typescript-eslint/array-type': 'warn',
            '@typescript-eslint/prefer-readonly': 'warn',
            '@typescript-eslint/no-unnecessary-condition': 'warn',
            '@typescript-eslint/prefer-optional-chain': 'warn',
            '@typescript-eslint/restrict-template-expressions': 'warn',
            '@typescript-eslint/member-ordering': [
                'warn',
                {
                    default: ['signature', 'field', ['get', 'set'], 'constructor', 'method'],
                },
            ],
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-inferrable-types': 'warn',
            '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
            '@typescript-eslint/require-await': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'warn',
            '@typescript-eslint/no-unsafe-return': 'warn',
            '@typescript-eslint/no-unsafe-member-access': 'warn',
            '@typescript-eslint/no-unsafe-call': 'warn',
            '@typescript-eslint/no-unsafe-assignment': 'warn',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/explicit-member-accessibility': [
                'warn',
                {
                    accessibility: 'no-public',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/unbound-method': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            '@angular-eslint/no-lifecycle-call': 'warn',
            '@angular-eslint/no-output-on-prefix': 'warn',
            '@angular-eslint/prefer-output-readonly': 'warn',
            '@angular-eslint/directive-selector': [
                'warn',
                {
                    type: 'attribute',
                    prefix: ['app'],
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'warn',
                {
                    type: 'element',
                    prefix: ['app'],
                    style: 'kebab-case',
                },
            ],
            'prettier/prettier': ['warn', { trailingComma: 'all', arrowParens: 'always' }],
        },
        // processor: angular.processInlineTemplates,
        ...eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic,
        ...angular.configs.tsRecommended,
        ...prettierPlugin.configs,
        ...ngrxPlugin.configs.all,
    },
    {
        files: ['**/*.spec.ts'],
        rules: {
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
        },
    },
    {
        files: ['**/*.html'],
        languageOptions: {
            parser: angular.templateParser,
        },
        plugins: {
            '@angular-eslint/template': angular.templatePlugin,
            prettier: prettierPlugin,
        },
        rules: {
            '@angular-eslint/template/attributes-order': 'warn',
            '@angular-eslint/template/prefer-control-flow': 'warn',
            '@angular-eslint/template/no-interpolation-in-attributes': 'warn',
            '@angular-eslint/template/no-duplicate-attributes': 'warn',
            '@angular-eslint/template/no-any': 'warn',
            '@angular-eslint/template/interactive-supports-focus': 'warn',
            '@angular-eslint/template/click-events-have-key-events': 'warn',
            '@angular-eslint/template/label-has-associated-control': 'off',
            'no-trailing-spaces': 'warn',
            'prettier/prettier': [
                'error',
                {
                    parser: 'angular',
                },
            ],
        },
        ...angular.configs.templateRecommended,
        ...angular.configs.templateAccessibility,
        ...prettierPlugin.configs,
    },
];
