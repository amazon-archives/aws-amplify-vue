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
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app>

      <v-list dense>
         <v-toolbar-title>goPuff Admin </v-toolbar-title>
          <v-spacer></v-spacer>
        <v-list-tile @click="home" @click.stop="drawer = !drawer">
          <v-list-tile-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="form" @click.stop="drawer = !drawer">
          <v-list-tile-action>
            <v-icon>fas fa-file-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Form</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
          <v-list-tile @click="" @click.stop="drawer = !drawer">
          <v-list-tile-action>
            <v-icon>fas fa-money-bill-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Cash Sheets</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </v-list-tile>
          <v-list-tile @click="" @click.stop="drawer = !drawer">
          <v-list-tile-action>
            <v-icon>fas fa-book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Directory</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>
        <v-list-tile @click="" @click.stop="drawer = !drawer">
          <v-list-tile-action>
            <v-icon>fas fa-info-circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>FAQ</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="light-blue accent-3" dark fixed app>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>fas fa-bars</v-icon>
      </v-btn>
      <v-toolbar-title>goPuff Admin</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>fas fa-search</v-icon>
      </v-btn>

      <v-menu offset-y transition="slide-y-transition">
        <v-btn icon slot="activator">
          <v-icon>fas fa-user-circle</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile @click="signOut">
            <v-list-tile-title>
              <v-icon>fas fa-sign-out-alt</v-icon> Sign out
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="profile">
            <v-list-tile-title>
              <v-icon>fas fa-user</v-icon> View profile
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn icon>
        <v-icon>fas fa-ellipsis-v</v-icon>
      </v-btn>
    </v-toolbar>

    <div class="menu-spacer"></div>
  </div>
</template>

<script>
import { Auth, Hub } from 'aws-amplify'

import { AmplifyStore } from '../amplify'

function getImg() {
  if(AmplifyStore.state.userInfo.Paa.length < 5) {
    return "http://www.thelawofattraction.org/wp-content/uploads/2013/05/James_Allen-96x96.jpg"
  } else {
    return AmplifyStore.state.userInfo.Paa
  }
}

export default {
  name: 'goMenu',
  data () {
    return {
      drawer: null,
      userImg: getImg()
    }
  },
  props: {
    source: String
  },
  computed: {
    user() { return AmplifyStore.state.user }
  },
  methods: {
    home: function() {
        this.$router.push('/')
    },
    notes: function() {
        this.$router.push('/notes')
    },
    form: function() {
        this.$router.push('/form')
    },
    profile: function() {
        this.$router.push('/profile')
    },
    signOut: function() {
        this.$router.push('/auth/signOut')
    }
  }
}
</script>

<style>
  .menu-spacer {
    height: 70px;
    width: 100%;
  }

  .user-img {
    border-radius: 50%; 
    width: 80%;
    height: 80%;
  }
</style>