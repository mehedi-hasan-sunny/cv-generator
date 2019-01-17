<template>
    <v-layout row wrap>
        <v-flex xs12 my-4>
            <h2 class="text-xs-center">{{title}}</h2>
        </v-flex>
        <v-flex xs12 px-2>
            <v-text-field v-model="instituteName" label="Institute Name" required></v-text-field>
        </v-flex>
        <v-flex xs12 px-2>
            <v-text-field v-model="curriculumName" label="Curriculum / Course Name" required></v-text-field>
        </v-flex>
        <v-flex xs12 md6 px-2>
            <v-menu
                    :close-on-content-click="false"
                    v-model="menu2"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
            >
                <v-text-field
                        slot="activator"
                        v-model="date"
                        label="Start Date"
                        prepend-icon="event"
                        readonly
                ></v-text-field>
                <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
            </v-menu>
        </v-flex>
        <v-flex xs12 md6 px-2>
            <v-menu
                    :close-on-content-click="false"
                    v-model="menu"
                    :nudge-right="40"
                    lazy
                    transition="scale-transition"
                    offset-y
                    full-width
                    min-width="290px"
                    :disabled="presentChecker()"
            >
                <v-text-field
                        slot="activator"
                        v-model="date2"
                        label="End Date"
                        prepend-icon="event"
                        readonly
                ></v-text-field>
                <v-date-picker v-model="date2" @input="menu = false"></v-date-picker>
            </v-menu>
            <v-checkbox
                    label="Present"
                    v-model="present"
                    class="ma-0 pa-0"
            ></v-checkbox>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "Education",
        props:['title'],
        data(){
            return{
                instituteName: null,
                curriculumName: null,
                date2: new Date().toISOString().substr(0, 10),
                menu2:false,
                menu:false,
                date:null,
                present:false,

            }
        },
        mounted(){

        },
        methods:{
            presentChecker(){
                if(this.present)
                {
                    this.date2 = null;
                }
                return this.present;
            }
        }
    }
</script>

<style scoped>

</style>
