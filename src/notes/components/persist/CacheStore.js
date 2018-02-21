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

import Vue from 'vue'
import { Cache } from 'aws-amplify'
import { JS } from 'fsts'

const CACHE_KEY_PREFIX = 'aws-amplify-vue-sample-notes-'
export default class CacheStore {
  constructor(userId) {
    this.cache_key = CACHE_KEY_PREFIX + userId
    let notes = Cache.getItem(this.cache_key)
    if (!notes) {
      notes = [
        { id: 1, title: 'First from cache', done: true },
        { id: 2, title: 'Second from cache', done: false }
      ]
      Cache.setItem(this.cache_key, notes)
    }
  }

  findAll(filter) {
    let notes = Cache.getItem(this.cache_key)
    if (!filter) { return notes }

    return notes.filter(note => {
      if (filter.done !== undefined && note.done !== filter.done) { return false }
      if (filter.title !== undefined && !note.title.match(filter.title)) { return false }
      return true
    })
  }

  find(id) {
    let notes = Cache.getItem(this.cache_key)
    const found = notes.filter(note => note.id === id)
    return found.length > 0? found[0] : null
  }

  create(title) {
    const note = {
      id: JS.cheapId(),
      title: title,
      done: false
    }

    let notes = Cache.getItem(this.cache_key)
    notes.push(note)
    Cache.setItem(this.cache_key, notes)
  }

  remove(id) {
    let notes = Cache.getItem(this.cache_key)
    notes = notes.filter(note => note.id !== id)
    Cache.setItem(this.cache_key, notes)
  }

  toggle(id) {
    let notes = Cache.getItem(this.cache_key)
    notes.forEach(note => {
      if (note.id === id) { note.done = !note.done }
    })
    Cache.setItem(this.cache_key, notes)
  }
}
