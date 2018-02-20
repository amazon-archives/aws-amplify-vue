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
  <li :style="itemStyle">
    <div :style="itemStyle.toggle" v-on:click="toggle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        enable-background="new 0 0 20 20"
        height="20px" width="20px"
        viewBox="0 0 32 32"
        version="1.1"
        xml:space="preserve"
      >
        <path
          clip-rule="evenodd"
          d="M27.704,8.397c-0.394-0.391-1.034-0.391-1.428,0  L11.988,22.59l-6.282-6.193c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414l6.999,6.899  c0.39,0.386,1.039,0.386,1.429,0L27.704,9.811C28.099,9.421,28.099,8.787,27.704,8.397C27.31,8.006,28.099,8.787,27.704,8.397z"
          fill="#888"
          fill-rule="evenodd"
          :fill-opacity="toggleOpacity"
        />
      </svg>
    </div>
    <div :style="itemStyle.title">{{note.title}}</div>
    <div :style="itemStyle.remove" v-on:click="remove">x</div>
  </li>
</template>

<script>
import { JS } from 'fsts'

export default {
  name: 'Note',
  props: ['note', 'theme'],
  computed: {
    toggleOpacity: function() { return this.note.done? 1 : 0 },
    itemStyle: function () {
      return this.note.done
        ? JS.deepAssign({}, this.theme.item, this.theme.item.done)
        : this.theme.item
    }
  },
  methods: {
    toggle() {
      this.$emit('toggle', this.note.id)
    },
    remove() {
      if (this.note.done) {
        this.$emit('remove', this.note.id)
      }
    }
  }
}
</script>
