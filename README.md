# AWS Amplify Vue Starter

A VueJs starter app integrated with [aws-amplify](https://github.com/aws/aws-amplify). **Please submit issues to the [aws-amplify](https://github.com/aws/aws-amplify/issues) repository**.

* [Getting Started](#getting-started)
* [AWS Amplify Integration Explained](#aws-amplify-integration-explained)
  - [Setup AWS Amplify](#setup-aws-amplify)
  - [Auth Routing](#auth-routing)
  - [Storage Components](#storage-components)
* [License](#license)

## Getting Started

1. Clone project and install dependencies    

```bash
$ git clone https://github.com/aws-samples/aws-amplify-vue.git
$ cd aws-amplify-vue-sample
$ npm install
```

2. Copy your `aws-exports` file into the src directory, or intialize a new AWS Mobile project:

```bash
$ npm install -g awsmobile-cli
$ awsmobile init
$ awsmobile user-signin enable
$ awsmobile user-files enable
$ awsmobile push
```

3. Start the project    

```bash
$ npm start
```

Check http://localhost:8080/

## AWS Amplify Integration Explained

This sample demostrate some of the AWS Amplify integration with VueJs. Most of the Amplify logics are contained inside `src/amplify` folder.

### Setup AWS Amplify

It is recommended to configure Amplify library at the entry point of application. Here we choose `main.js`

```js
import Amplify, { Auth, Logger } from 'aws-amplify'
import aws_exports from './aws-exports'

...

Amplify.configure(aws_exports)
```

To have a quick test of the library, we added this piece of code.

```js
Amplify.Logger.LOG_LEVEL = 'DEBUG' // to show detailed logs from Amplify library

const logger = new Logger('main')

Auth.currentUserInfo()
  .then(user => logger.debug(user))
  .catch(err => logger.debug(err))
```

### Auth Routing

There are two major auth routing concerns in an application, 1) Auth UI routing; 2) Access Control to application.

#### Auth UI routing

Just add AuthRouter to router.

```js
import { AuthRouter } from '../amplify'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    ...

    AuthRouter
  ]
})

```

#### Access Control

Just add AuthFilter to router

```js
import { AuthFilter } from '../amplify'

...

router.beforeEach(AuthFilter);
```

### Storage Components

In this sample, `src/amplify` package register a group of Amplify related components. Other than Auth components, there are two storage related components:

* [PhotoPicker](https://github.com/aws-samples/aws-amplify-vue-sample/blob/master/src/amplify/components/storage/PhotoPicker.vue)
  - registered as a-photo-picker
  - showcase usage of Amplify Storage on binary data
* [SimpleForm](https://github.com/aws-samples/aws-amplify-vue-sample/blob/master/src/amplify/components/storage/SimpleForm.vue)
  - registered as a-simple-form
  - showcase usage of Amplify Storage on text data

[Profile.vue](https://github.com/aws-samples/aws-amplify-vue-sample/blob/master/src/components/Profile.vue) uses the two components to store user avatar and attributes.

## License

This library is licensed under the Apache 2.0 License. 
