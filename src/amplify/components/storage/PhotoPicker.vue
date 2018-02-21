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
  <div :style="pickerStyle.picker">
    <img
      :src="src"
      :style="pickerStyle.img"
      v-on:error="imageError"
    />
    <input
      title="Pick"
      type="file" accept="image/*"
      :style="pickerStyle.input"
      v-on:change="pick"
    />
  </div>
</template>

<script>
import { Auth, Storage, Logger } from 'aws-amplify'
import AmplifyTheme from '../../AmplifyTheme'

const logger = new Logger('SignOutComp');

const pickerStyle = {
  picker: {
    position: 'relative'
  },
  preview: {
    maxWidth: '100%'
  },
  img: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    fontSize: '1.2em',
    textAlign: 'center'
  },
  input: {
    width: '100%',
    height: '100%',
    display: 'inline-block',
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0,
    cursor: 'pointer'
  }
}

export default {
  name: 'PhotoPicker',
  data () {
    return {
      src: this.defSrc,
      style: this.theme || AmplifyTheme
    }
  },
  props: ['defSrc', 'path', 'theme'],
  computed: {
    pickerStyle() {
      return Object.assign({}, this.style.picker, pickerStyle)
    }
  },
  created: function() {
    this.getPhoto()
  },
  methods: {
    getPhoto: function() {
      Storage.get(this.path)
        .then(url => this.src = url)
    },
    pick: function(e) {
      const file = e.target.files[0];
      const { name, size, type } = file;
      logger.debug(file);

      logger.debug('upload photo to ' + this.path)
      Storage.put(this.path, file, { contentType: type })
        .then(data => {
          logger.debug(data)
          this.getPhoto()
        })
        .catch(err => logger.error(err));
    },
    imageError: function(e) {
      this.src = this.defSrc
    }
  }
}
</script>
