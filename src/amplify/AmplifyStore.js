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
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    userId: null,
    userInfo: null,   
    userVerification: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setUserId(state, userId) {
      state.userId = userId
    },
    setUserVerification(state, data) {
      state.userVerification = data
    },
    setUserInfo(state, info) {
      state.userInfo = info
      localStorage.setItem('userInfo', JSON.stringify(info));
    },
    loadUserInfo(state) {
      state.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    }
  }
})

export default store
