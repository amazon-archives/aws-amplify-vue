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
    <h1 v-if="!confirmView">Sign In</h1>
    <h1 v-if="confirmView">Confirm Sign In</h1>

    <div v-if="error">
        {{ error }}
    </div>
    <a v-on:click="googleIt">
      <img class="googlebtn" src="https://s3.amazonaws.com/gopuff/googleLogo.svg" onclick="this.src='https://s3.amazonaws.com/gopuff/googleLogoPressed.svg'">
    </a>
  </div>
  
</template>

<script>
import { Auth, Logger, JS } from 'aws-amplify'
import AmplifyStore from '../../AmplifyStore'
import Vue from 'vue'
const logger = new Logger('SignInComp');
export default {
  name: 'SignIn',
  data () {
    return {
        username: '',
        password: '',
        user: null,
        confirmView: false,
        code: '',
        error: ''
    }
  },
  methods: {
    googleIt: function(){
    const t = this;
    Vue.googleAuth().signIn(function (googleUser) { 
        let response = window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse()
        response.token = response.id_token
        Auth.federatedSignIn('google',response, {}).then(user => {
          console.log("~~~>", user);
          logger.debug('sign in success', user);
          AmplifyStore.commit('setUser', user);
          //get user info
          var Auth = window.gapi.auth2.getAuthInstance();
          var userInfo = Auth.currentUser.get();
          console.log('->', userInfo.w3);
          AmplifyStore.commit('setUserInfo', userInfo.w3);

          t.$router.push('/#/'); //go home after successful sign in
          return user
        })
      }, function (error) {
         logger.debug('sign in fail', error);
        console.log(error)
      }
      )
    },
    signIn: function(event) {
      const that = this
      Auth.signIn(this.username, this.password)
        .then(user => {
          logger.debug('sign in success', user);
          AmplifyStore.commit('setUser', user);
          return user
        })
        .then(user => {
          that.user = user
          if (user.challengeName === 'SMS_MFA') {
            that.confirmView = true
            return
          }
          this.checkUser()
        })
        .catch(err => this.setError(err))
    },
    checkUser: function() {
      const user = this.user;
      if (!user) { return }
      Auth.verifiedContact(user)
        .then(data => {
          logger.debug('verify result', data);
          AmplifyStore.commit('setUserVerification', data);
          if (!JS.isEmpty(data.verified)) {
            this.$router.push('/');
          } else {
            this.$router.push('/auth/verifyContact');
          }
        });
    },
    confirm: function() {
      Auth.confirmSignIn(this.user, this.code)
        .then(() => {
          this.$router.push('/');
        })
        .catch(err => this.setError(err));
    },
    forgot: function() {
        this.$router.push('/auth/forgotPassword');
    },
    signUp: function() {
        this.$router.push('/auth/signUp');
    },
    setError: function(err) {
        this.error = err.message || err;
    }
  }
}
</script>

<style>
  .googlebtn {
    width: 50%;
    height: auto;
  }

</style>