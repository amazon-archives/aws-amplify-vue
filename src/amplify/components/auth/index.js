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

import SignIn from './SignIn'
import SignUp from './SignUp'
import SignOut from './SignOut'
import ConfirmSignUp from './ConfirmSignUp'
import VerifyContact from './VerifyContact'
import ForgotPassword from './ForgotPassword'
import Greetings from './Greetings'

Vue.component('a-sign-in', SignIn)
Vue.component('a-sign-up', SignUp)
Vue.component('a-sign-out', SignOut)
Vue.component('a-confirm-sign-up', ConfirmSignUp)
Vue.component('a-verify-contact', VerifyContact)
Vue.component('a-forgot-password', ForgotPassword)
Vue.component('a-greetings', Greetings)

export {
  SignIn,
  SignUp,
  SignOut,
  ConfirmSignUp,
  VerifyContact,
  ForgotPassword,
  Greetings
}
