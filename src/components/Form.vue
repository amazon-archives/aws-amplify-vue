<template>
    <div>
        <h1>{{ txt }}</h1>
        <v-app>
        <v-container fluid>
            <v-switch
                :label="`${msg.toString()}`" 
                v-model="switch1"
                color="blue"
            ></v-switch>
        </v-container>
        </v-app>
    </div>
  
</template>


<script>

import TestStore from './TestStore'

export default {
    name: 'Form',
    data () {
        return {
            txt: "Sample form",
            msg: "Click to save",
        }
    },
    computed: {
        switch1: {
            get () { // get the value of state and update the switch accordingly
                return TestStore.state.autoApprove
            },
            set (newValue) { // set the newValue to state
                // return a promise
                callUpdate()
                .then(function(data) { // if resolve, continue on
                    TestStore.commit('setParam', data)
                    console.log("return : " + data)
                    alert("change saved")
                })
                .catch(function(error) { // if reject, console the error
                    console.log(error)
                })
            }   
        }
    }
}

var callUpdate = function() {
    return new Promise(function(resolve, reject) {
        // evaluate data or whatever
        // this could be either resolve or reject
        // to simplify just set a time out for this
        // and return the value 'true'
        setTimeout(resolve, 2000, true);
    })
}
</script>

