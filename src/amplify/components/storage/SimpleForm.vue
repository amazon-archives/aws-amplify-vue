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
  <div :style="style.form">
    <div :style="style.inputRow" v-for="field in fields">
      <div v-if="field.type === 'string'">
        <label :style="style.inputLabel">{{field.label || field.name}}</label>
        <input
          :style="style.input"
          v-model="profile[field.name]"
          v-bind:placeholder="field.label || field.name"
        />
      </div>
      <div :style="style.lineBreak" v-if="field.type === 'lineBreak'"></div>
    </div>
    <div :style="style.actionRow">
      <button :style="style.action" v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script>
import { Auth, Storage, Logger } from 'aws-amplify'
import AmplifyStore from '../../AmplifyStore'
import AmplifyTheme from '../../AmplifyTheme'

const logger = new Logger('SimpleForm');

export default {
  name: 'SimpleForm',
  data () {
    return {
      profile: {},
      style: this.theme || AmplifyTheme
    }
  },
  props: ['path', 'fields', 'theme'],
  computed: {
    userId: function() { return AmplifyStore.state.userId }
  },
  created() {
    logger.debug('simple form created...')
    this.load()
  },
  methods: {
    load() {
      Storage.get(this.path, { download: true })
        .then(data => {
          const body = data.Body.toString('utf8')
          this.profile = JSON.parse(body)
        })
        .catch(err => logger.error(err))
    },
    save() {
      if (!this.userId) { return }
      const data = JSON.stringify(this.profile)
      Storage.put(this.path, data, { contentType: 'application/json' })
        .then(data => logger.debug(data))
        .catch(err => logger.error(err))
    }
  }
}
</script>
