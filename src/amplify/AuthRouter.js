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

import * as Components from './components'
import AmplifyStore from './AmplifyStore'
import AuthView from './AuthView'

import { Auth, Logger } from 'aws-amplify'

const logger = new Logger('AuthRouter');

const AuthRouter = {
  path: '/auth',
  name: 'auth',
  component: AuthView,
  children: [
    {
      path: 'signIn',
      name: 'auth_SignIn',
      component: Components.SignIn
    },
    {
      path: 'signUp',
      name: 'auth_SignUp',
      component: Components.SignUp
    },
    {
      path: 'signOut',
      name: 'auth_SignOut',
      component: Components.SignOut
    },
    {
      path: 'confirmSignUp',
      name: 'auth_ConfirmSignUp',
      component: Components.ConfirmSignUp
    },
    {
      path: 'verifyContact',
      name: 'auth_VerifyContact',
      component: Components.VerifyContact
    },
    {
      path: 'forgotPassword',
      name: 'auth_ForgotPassword',
      component: Components.ForgotPassword
    }
  ]
}

const AuthFilter = (to, from, next) => {
  logger.debug('before routing ', to, from)
  Auth.currentAuthenticatedUser()
    .then(user => {
      logger.debug('...has user', user)
      AmplifyStore.commit('setUser', user)
      Auth.currentCredentials()
        .then(credentials => {
          AmplifyStore.commit('setUserId', credentials.identityId)
        })
        .catch(err => logger.debug('get current credentials err', err))
      next()
    })
    .catch(err => {
      logger.debug('...no user', err)
      AmplifyStore.commit('setUser', null)
      if (!to.name.startsWith('auth')) {
        next('/auth/signIn')
      } else {
        next()
      }
    })
}

export default AuthRouter
export { AuthFilter }
