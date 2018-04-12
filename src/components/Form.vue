<template>
    <div>
        <h1>{{ txt }}</h1>
        <v-app>
        <v-container fluid>
            <v-switch
                :label="`${msg.toString()}`" 
                v-model="switch1"
                color="blue"
                :disabled="loading"
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
            loading: false
        }
    },
    computed: {
        switch1: {
            get () {
                return TestStore.state.autoApprove
            },
            set (newValue) {
                this.loading = !this.loading;

                callUpdate(newValue)
                .then((data) => {
                    TestStore.commit('setParam', data)
                    console.log("return : " + data)
                    this.loading = !this.loading;
                })
                .catch((error) => {
                    console.log(error)
                    this.loading = !this.loading;
                })

            }   
        }
    }
}

var callUpdate = function(newValue) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 2000, newValue);
    })
}
</script>

