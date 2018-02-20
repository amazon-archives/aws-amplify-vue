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
    <a-photo-picker
      :defSrc="'/static/avatar.png'"
      :path="'avatars/' + userId"
      :theme="theme"
      v-if="userId"
    />

    <div v-if="user">{{user.username}}</div>

    <a-simple-form
      :path="'profiles/' + userId"
      :fields="fields"
      :theme="theme"
      v-if="userId"
    />
  </div>
</template>

<script>
import { Auth, Storage, Logger } from 'aws-amplify'

import { AmplifyStore, AmplifyTheme } from '../amplify'

const logger = new Logger('Profile');

export default {
  name: 'Profile',
  data () {
    return {
      fields: [
        { type: 'string', name: 'firstName', label: 'FirstName' },
        { type: 'string', name: 'lastName', label: 'LastName' },
        { type: 'lineBreak' },
        { type: 'string', name: 'nickname', label: 'Nickname' }
      ],
      theme: AmplifyTheme
    }
  },
  computed: {
    user: function() { return AmplifyStore.state.user },
    userId: function() { return AmplifyStore.state.userId }
  }
}
</script>
