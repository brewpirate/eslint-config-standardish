# eslint-config-standardish
[![JavaScript Style Guide - Standard Style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)
The ESLint config of [JavaScript Standard Style](http://standardjs.com) with support for Eslint 9

## Usage
1. Install eslint-config-standardish:
    ```bash
    npm install --save-dev eslint-config-standardish
    ```

2. Add eslint-config-standardish to your ESLint [Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files).
     `eslint.config.js`
     ```js
     
     import standardishConfig from "eslint-config-standardish";

     export default [
       standardishConfig,
     ];
     ```


### Why?
I really like [eslint-config-standard](https://github.com/standard/eslint-config-standard) but I also prefer no dramas and Eslint 9's flatconfig. Hold my beer.

### Changes from eslint-config-standard
- Migrate all deperecated formatting/stylistic-related rules to [@stylistic/eslint-plugin](https://eslint.style/packages/default)
- Use [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) instead of [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) 
- No builds or tests. Just javascript. Raw doggin it. Good luck! // TODO: Lets do it!



### Links
- [StandardJs Rules](https://standardjs.com/rules)
- [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) 
- [@stylistic/eslint-plugin](https://eslint.style/packages/default)