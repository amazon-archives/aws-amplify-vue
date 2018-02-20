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
import Router from 'vue-router'
import { Menu, Home, Profile } from '@/components'
import { Notes } from '@/notes'

import { AuthRouter, AuthFilter } from '../amplify'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    AuthRouter
  ]
})

router.beforeEach(AuthFilter);

export default router
