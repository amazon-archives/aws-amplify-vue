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
  <div class="auth-greetings">
    <div>
        <span>{{greeting}}</span>
    </div>
    <div v-if="greeting">
        <button v-on:click="signOut">Sign Out</button>
    </div>
  </div>
</template>

<script>
import { Auth, Logger } from 'aws-amplify'

import AmplifyStore from '../../AmplifyStore'

const logger = new Logger('SignOutComp');

export default {
  name: 'Greetings',
  data () {
    return {
        greeting: 'Hi'
    }
  },
  computed: {
    user() { return AmplifyStore.state.user }
  },
  methods: {
    signOut: function(event) {
        Auth.signOut()
            .then(data => {
                logger.debug('sign out success', data);
                AmplifyStore.commit('setUser', null);
                this.$router.push('/auth/signIn');
            })
            .catch(err => logger.error('sign out error', err))

    }
  }
}
</script>
