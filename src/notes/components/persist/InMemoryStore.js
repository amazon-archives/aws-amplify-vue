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

import { JS } from 'fsts'

export default class InMemoryStore {
  constructor() {
    this.notes = [
      { id: 1, title: 'First', done: true },
      { id: 2, title: 'Second', done: false }
    ]
  }

  findAll(filter) {
    if (!filter) { return this.notes }

    return this.notes.filter(note => {
      if (filter.done !== undefined && note.done !== filter.done) { return false }
      if (filter.title !== undefined && !note.title.match(filter.title)) { return false }
      return true
    })
  }

  find(id) {
    const found = this.notes.filter(note => note.id === id)
    return found.length > 0? found[0] : null
  }

  // For force update rendering of the note
  replace(id, note) {
    for (var i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        this.notes[i] = Object.assign({}, note)
        break
      }
    }
  }

  create(title) {
    const note = {
      id: JS.cheapId(),
      title: title,
      done: false
    }

    this.notes.push(note)
  }

  remove(id) {
    this.notes = this.notes.filter(note => note.id !== id)
  }

  toggle(id) {
    const note = this.find(id)
    if (note) {
      note.done = !note.done
      this.replace(id, note)
    }
  }
}
