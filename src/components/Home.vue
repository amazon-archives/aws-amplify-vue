/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

<template>
  <div :style="theme.container">
    <h1 :style="theme.h1">
      AWS Amplify Vue Sample
    </h1>

    <div :style="theme.section">
      <h2 :style="theme.h2">Sample Structure</h2>
      <pre :style="theme.pre">
        src/
        ├── App.vue
        ├── amplify
        │   ├── AmplifyStore.js
        │   ├── AmplifyTheme.js
        │   ├── AuthRouter.js
        │   ├── AuthView.js
        │   ├── components
        │   │   ├── auth
        │   │   │   ├── ConfirmSignUp.vue
        │   │   │   ├── ForgotPassword.vue
        │   │   │   ├── Greetings.vue
        │   │   │   ├── SignIn.vue
        │   │   │   ├── SignOut.vue
        │   │   │   ├── SignUp.vue
        │   │   │   ├── VerifyContact.vue
        │   │   │   └── index.js
        │   │   ├── index.js
        │   │   └── storage
        │   │       ├── PhotoPicker.vue
        │   │       ├── SimpleForm.vue
        │   │       └── index.js
        │   └── index.js
        ├── assets
        │   └── logo.png
        ├── aws-exports.js
        ├── components
        │   ├── Home.vue
        │   ├── Menu.vue
        │   ├── Profile.vue
        │   └── index.js
        ├── main.js
        ├── notes
        │   ├── NotesTheme.js
        │   ├── components
        │   │   ├── Note.vue
        │   │   ├── Notes.vue
        │   │   ├── index.js
        │   │   └── persist
        │   │       ├── CacheStore.js
        │   │       ├── InMemoryStore.js
        │   │       └── index.js
        │   └── index.js
        └── router
            └── index.js
      </pre>
      <h3 :style="theme.h3">Config</h3>
      <ol>
        <li>Download 'aws-exports.js' to 'src/'</li>
        <li>Modify 'src/App.vue' to config aws-amplify</li>
      </ol>
      <h3 :style="theme.h3">Router</h3>
      <p>Router is created inside 'src/router/index.js'</p>
      <h3 :style="theme.h3">AWS Amplify</h3>
      <p>AWS Amplify related code under 'src/amplify'</p>
      <p>Auth views are under 'src/amplify/components/auth'</p>
      <h3 :style="theme.h3">Notes Sample</h3>
      <p>Notes related code under 'src/notes'</p>
      <p>Two persist store: InMemoryStore and CacheStore</p>
      <p>CacheStore built on top of aws-amplify 'Cache' library</p>
    </div>

    <div :style="theme.section">
      <h2 :style="theme.h2">AWS Amplify Links</h2>
      <a :style="theme.link" href="https://github.com/aws/aws-amplify">GitHub</a>
    </div>
  </div>
</template>

<script>
import { AmplifyTheme } from '../amplify'

export default {
  name: 'Home',
  data () {
    return {
      theme: AmplifyTheme
    }
  }
}
</script>
