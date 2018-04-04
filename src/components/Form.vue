<template>
    <div>
        <h1>{{ msg }}</h1>

        <v-container fluid class=enabled>
            <v-switch 
                :label="`${msgreturn.toString()}`" 
                v-bind:style="{ color : savedColor }" 
                v-model="switch1" 
                v-on:click="toggle"
            ></v-switch>
        </v-container>
        
    </div>
  
</template>


<script>

import { AmplifyStore, AmplifyTheme } from '../amplify'

export default {
  name: 'Form',
  data () {
    return {
        msg: "Sample form",
        msgreturn: "Click to save",
        switch1: false,
        savedColor: "gray",
    }
  },

    methods: {
      toggle: function() {
        setTimeout(function () { 
            this.msgreturn = "Change saved"
            this.savedColor = "green"
            this.class = disabled
        }.bind(this), 1000)
        
      }
    }
}
</script>

