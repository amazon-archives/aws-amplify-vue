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
      <article class="message" :class="mfaAccordion">
        <div class="message-header" @click="toggleAccordion('mfa')">
          Multifactor Authentication <div class="arrow"> &nbsp; ></div>    
        </div>
        <div class="message-body">
          <div class="message-content">
            <amplify-set-mfa v-bind:mfaConfig="mfaConfig"></amplify-set-mfa>
          </div>
        </div>
      </article>
      <article class="message" :class="profilePicAccordion">
        <div class="message-header" @click="toggleAccordion('profilePic')">
          Profile Pic <div class="arrow"> &nbsp; ></div>    
        </div>
        <div class="message-body">
          <div class="message-content">
            <amplify-photo-picker v-bind:photoPickerConfig="photoPickerConfig"/>
            <amplify-s3-image :imagePath="imagePath" />
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { Auth, Storage, Logger } from 'aws-amplify'


import AmplifyStore from '../store/store';


export default {
  name: 'Profile',

  data:  () => {
    const that = this;
    return {
      profilePic: false,
      imagePath: `${AmplifyStore.state.user.username}/avatar`,
      photoPickerConfig: {
        header: 'Upload Profile Pic',
        accept: 'image/*',
        path: `${AmplifyStore.state.user.username}/`,
        defaultName: 'avatar'
      },
      mfa: false,
      fields: [
        { type: 'string', name: 'email', label: 'Email' },
        { type: 'string', name: 'phone_number', label: 'Phone Number' }
      ],
    };
  },
  methods: {
    toggleAccordion: function(el) {
      this[el] = !this[el]
    },
  },
  computed: {
    mfaConfig: function() {
      let that = this;
      return {
        mfaDescription: 'My app\'s mfa description!!',
        mfaTypes: ['TOTP', 'SMS', 'None'],
        cancelHandler: function() {
          that.toggleAccordion('mfa')
        },
      }
    },
    user: function() { 
      return AmplifyStore.state.user 
    },
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
