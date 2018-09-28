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
      v-model="note"
      v-on:keyup.enter="create"
    />
    <ul :style="theme.list">
      <a-note
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :theme="theme"
        v-on:toggle="toggle"
        v-on:remove="remove"
      />
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Logger } from 'aws-amplify'
import { JS } from 'fsts'

import AmplifyStore from '../../store/store'

import  { CreateTodo, ListTodos, UpdateTodo, DeleteTodo }  from './persist/graphqlActions';

import NotesTheme from '../NotesTheme'
import Note from './Note'

Vue.component('a-note', Note)

export default {
  name: 'Notes',
  data () {
    return {
      theme: NotesTheme || {},
      note: '',
      todos: [],
      filter: 'all',
      logger: {},
      actions: {
        create: CreateTodo,
        list: ListTodos,
        update: UpdateTodo,
        delete: DeleteTodo, 
      },
    }
  },
  created() {
    this.logger = new this.$Amplify.Logger('NOTES_component')
    this.list();
  },
  computed: {
    userId: function() { return AmplifyStore.state.userId }
  },
  methods: {
    list() {
      this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.list, {}))
      .then((res) => {
        this.todos = res.data.listTodos.items;
        this.logger.info(`Todos successfully listed`, res)
      })
      .catch((e) => {
        this.logger.error(`Error listing Todos`, e)
      });
    },
    toggle(todo) {
      this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.update, {id: todo.id, note: todo.note, done: !todo.done}))
        .then((res) => {
          todo.done = !todo.done
          this.logger.info(`Todo ${todo.id} done status toggled`, res);
        })
        .catch((e) => {
          this.logger.error(`Error toggling Todo ${todo.id} done status`, e)
        })
    },
    remove(id) {
      this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.delete, {id}))
      .then((res) => {
        this.logger.info(`Todo ${id} removed`, res);
        this.list();
      })
      .catch((e) => {
        this.logger.error(`Error removing Todo ${id}`, e)
      })
    },
    create() {
      this.$Amplify.API.graphql(this.$Amplify.graphqlOperation(this.actions.create, {note: this.note, done: true}))
      .then((res) => {
        this.logger.info(`Todo created`, res);
        this.list();
        this.note = '';
      })
      .catch((e) => {
        this.logger.error(`Error creating Todo`, e)
      })
    }
  }
}
</script>
