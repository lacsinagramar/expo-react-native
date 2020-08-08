# Meditation App

## Environment Setup

- [Node 12.x](https://nodejs.org/en/) (use [NVM](https://github.com/nvm-sh/nvm))
- [Yarn](https://classic.yarnpkg.com/en/)
- [Expo](https://expo.io/)

## Install

```
$ yarn install
```

## Usage

```
$ yarn start
```

### Other Scripts

- `yarn lint`
- `yarn lint:watch`
- `yarn test`
- `yarn android`
- `yarn ios`

#### Commit Message

- Always use **Sentence case** messages on committing on your own branch
- Use proper commit message with title, subject and description when merging your branch to master 
```
eg. feat(Home): Change background color 
```
Notice that the verb used is on **present tense** and **Sentence case** once again on the body. `Home` is the subject which is the container that we modified.

### Directory Structure
```
    📂 src
        📂 assets
            📂 fonts
            📂 images
        📁 components
        📁 logger
        📂 containers
            📂 <Module>
                📂 <SubModule>
                    📄 <extended module files>
                📄 index.js
                📄 style.js
                📄 Form.js
                📄 Modal.js    
                📄 model.js
                📄 actions.js
                📄 reducer.js
        📁 navigation
        📂 constants
        📁 store
        📂 utils
    📁 scripts
```