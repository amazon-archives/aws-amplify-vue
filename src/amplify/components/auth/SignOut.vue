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
  <div>
    <div>Are you sure you want sign out?</div>
    <div>
      <v-btn class="center" color="error" v-on:click="signOut">Sign Out</v-btn>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { Auth, Logger, JS } from 'aws-amplify'

const logger = new Logger('SignOutComp');

export default {
  name: 'SignOut',
  data () {
    return {
        error: '' 
    }
  },
  methods: {
    signOut: function(event) {
        Auth.signOut()
            .then(() => {
                logger.debug('sign out success');
                this.$router.push('/auth/signIn');
            })
            .catch(err => this.setError(err))
    },
    setError: function(err) {
        this.error = err.message || err;
    }
  }
}
</script>

<style>
  .center {
    width: 100%;
  }
</style>
