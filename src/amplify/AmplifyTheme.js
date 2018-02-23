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

const AppTheme = {
  h1: {
    fontWeight: '400'
  },
  h2: {
    fontWeight: '400',
    textAlign: 'left'
  },
  h3: {
    fontWeight: '400',
    textAlign: 'left'
  },
  h4: {
    fontWeight: '400',
    textAlign: 'left'
  },
  h5: {
    fontWeight: '400',
    textAlign: 'left'
  },
  pre: {
    background: '#f8f8f8'
  },
  container: {
    textAlign: 'center'
  },
  section: {
    textAlign: 'left',
    padding: '0 1em'
  },
  lineBreak: {
    height: '0',
    borderBottom: '1px solid #ededed',
    margin: '1em 10%'
  },
  form: {
    display: 'inline-block',
    width: '320px'
  },
  inputRow: {
    display: 'block',
    marginTop: '0.5em'
  },
  input: {
    width: '100%',
    fontSize: '1em',
    padding: '0.5em',
    boxSizing: 'border-box',
    outline: 'none',
    border: 'none',
    borderBottom: '2px solid #2196F3'
  },
  inputLabel: {
    display: 'block',
    textAlign: 'left'
  },
  actionRow: {
    display: 'flex',
    marginTop: '0.5em',
    textAlign: 'right'
  },
  action: {
    fontSize: '1em',
    border: 'none',
    outline: 'none',
    padding: '12px 50px',
    backgroundColor: '#ededed',
    cursor: 'pointer'
  },
  footer: {
    marginTop: '1em'
  },
  footerLeft: {
    float: 'left'
  },
  footerRight: {
    float: 'right'
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer'
  },
  error: {
    background: 'orange',
    padding: '0.5em'
  },

  nav: {
    marginBottom: '1em',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#2196F3',
    color: '#fff',
    padding: '1em',
    item: {
      fontWeight: '500',
      padding: '0 0.5em',
      cursor: 'pointer'
    },
    greeting: {
      fontWeight: '500',
      color: '#000',
      padding: '0 0.5em'
    },

    main: {
      flexGrow: '1',
      textAlign: 'left'
    },
    right: {
      fontSize: '0.8em'
    }
  }
}

export default AppTheme
