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
  <div class="container">
    <h1 v-if="user">{{user.username}}'s profile</h1>
    <div >
      <profile-form
        :user="user"
        :fields="fields"
        v-if="user"
      />
    </div>
    <section >
      <article class="message" :class="profilePicAccordion">
        <div class="message-header" @click="toggleAccordion('profilePic')">
          Multifactor Authentication <div class="arrow"> &nbsp; ></div>    
        </div>
        <div class="message-body">
          <div class="message-content">
            <amplify-set-mfa ></amplify-set-mfa>
          </div>
        </div>
      </article>
      <article class="message" :class="mfaAccordion">
        <div class="message-header" @click="toggleAccordion('mfa')">
          Profile Pic <div class="arrow"> &nbsp; ></div>    
        </div>
        <div class="message-body">
          <div class="message-content">
            <amplify-photo-picker
              :defSrc="'/static/avatar.png'"
              :path="'avatars/' + user"
            />
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { Auth, Storage, Logger } from 'aws-amplify'


import AmplifyStore from '../store/store';

const logger = new Logger('Profile');

export default {
  name: 'Profile',

  data () {
    return {
      profilePic: false,
      mfa: false,
      fields: [
        { type: 'string', name: 'email', label: 'Email' },
        { type: 'string', name: 'phone_number', label: 'Phone Number' }
      ],
    }
  },
  methods: {
    toggleAccordion: function(el) {
      this[el] = !this[el]
    }
  },
  computed: {
    user: function() { return AmplifyStore.state.user },
    profilePicAccordion: function() {
      return {
        'is-closed': !this.profilePic,
        'is-primary': this.profilePic,
        'is-dark': !this.profilePic
      };
    },
    mfaAccordion: function() {
      return {
        'is-closed': !this.mfa,
        'is-primary': this.mfa,
        'is-dark': !this.mfa
      };
    }
  }
}
</script>
