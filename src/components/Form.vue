<template>
    <div>
        <h1>{{ txt }}</h1>

        <v-app>
        <v-container fluid>
            <v-switch v-if="!switch1"
                :label="`${msgClick.toString()}`" 
                v-model="switch1" 
                v-on:click="toggle"
            ></v-switch>
            <v-switch v-else
                :label="`${msgClick.toString()}`" 
                v-model="switch1" 
                color="blue"
            ></v-switch>
        </v-container>
        </v-app>
    </div>
  
</template>


<script>

import { AmplifyStore, AmplifyTheme } from '../amplify'

export default {
  name: 'Form',
  data () {
    return {
        txt: "Sample form",
        msgClick: "Click me",
        mgsSaved: "Change saved",
        switch1: false,
    }
  },

    methods: {
      toggle: function() {
        setTimeout(function () { 
            alert("change saved")
        }.bind(this), 1000)
        
      }
    }
}
</script>

