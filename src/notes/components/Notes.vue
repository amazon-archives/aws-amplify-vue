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
    <h2 :style="theme.header">Notes</h2>
    <input
      :style="theme.input"
      autofocus
      v-model="title"
      v-on:keyup.enter="create"
    />
    <ul :style="theme.list">
      <a-note
        v-for="note in notes"
        :key="note.id"
        :note="note"
        :theme="theme"
        v-on:toggle="toggle"
        v-on:remove="remove"
      />
    </ul>
    <footer :style="theme.footer">
      <div :style="theme.footer.filter">
        <span :style="theme.footer.filter.mainItem" v-on:click="filter = 'all'">All</span>
        <span :style="theme.footer.filter.item" v-on:click="filter = 'active'">Active</span>
        <span :style="theme.footer.filter.item" v-on:click="filter = 'completed'">Completed</span>
      </div>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { Logger } from 'aws-amplify'
import { JS } from 'fsts'

import { AmplifyStore } from '../../amplify'

import NotesStore from './persist'
import NotesTheme from '../NotesTheme'
import Note from './Note'

Vue.component('a-note', Note)

const logger = new Logger('NotesComp')

export default {
  name: 'Notes',
  data () {
    return {
      theme: NotesTheme || {},
      title: '',
      filter: 'all',
      ts: 0 // for force refresh notes after actions
    }
  },
  computed: {
    userId: function() { return AmplifyStore.state.userId },
    notesStore: function() { return new NotesStore(this.userId) },
    notes() {
      if (this.filter === 'active') {
        return this.notesStore.findAll({ done: true }, this.ts)
      }
      if (this.filter === 'completed') {
        return this.notesStore.findAll({ done: false }, this.ts)
      }
      return this.notesStore.findAll({}, this.ts)
    }
  },
  methods: {
    toggle(id) {
      logger.debug('toggle ' + id)
      this.notesStore.toggle(id)
      this.ts = new Date().getTime()
    },
    remove(id) {
      logger.debug('remove ' + id)
      this.notesStore.remove(id)
      this.ts = new Date().getTime()
    },
    create() {
      logger.debug('create ' + this.title)
      this.notesStore.create(this.title)
      this.ts = new Date().getTime()
      this.title = ''
    }
  }
}
</script>
