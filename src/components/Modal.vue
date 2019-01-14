<template>
    <v-layout row justify-center>
        <v-dialog v-model="dialog" width="700px">
            <v-btn slot="activator" color="primary" dark flat width="100%">
                <v-icon class="pr-3">pageview</v-icon> Preview
            </v-btn>
            <v-card>
                <v-card-title>
                  <!--<span class="headline">-->
                    <!--Use Google's location service?-->
                  <!--</span>-->
                </v-card-title>

                <Component :is="componentName"></Component>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat="flat" @click="dialog = false">
                        Disagree
                    </v-btn>
                    <v-btn color="green darken-1" flat="flat" @click="dialog = false">
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-layout>
</template>

<script>
    export default {
        name: "Modal",
        props:['componentName'],
        data(){
            return{
                dialog: false,
            }
        }
    }
</script>

<style scoped>

</style>
