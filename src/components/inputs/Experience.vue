<template>
    <div>
        <v-flex xs12 my-4>
            <h2 class="text-xs-center">{{title}}</h2>
        </v-flex>
        <v-layout row wrap v-for="(experience,index) in experiences" :key="index">
            <v-flex xs12 px-2>
                <v-text-field v-model="experience.instituteName" label="Institute Name" required></v-text-field>
            </v-flex>
            <v-flex xs12 px-2>
                <v-text-field v-model="experience.position" label="Designation / Position" required></v-text-field>
            </v-flex>
            <v-flex xs12 md6 px-2>
                <v-menu
                        :close-on-content-click="false"
                        v-model="experience.startDateMenu"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                >
                    <v-text-field
                            slot="activator"
                            v-model="experience.startDate"
                            label="Start Date"
                            prepend-icon="event"
                            readonly
                    ></v-text-field>
                    <v-date-picker v-model="experience.startDate" @input="experience.startDateMenu = false"></v-date-picker>
                </v-menu>
            </v-flex>
            <v-flex xs12 md6 px-2>
                <v-menu
                        :close-on-content-click="false"
                        v-model="experience.endDateMenu"
                        :nudge-right="40"
                        lazy
                        transition="scale-transition"
                        offset-y
                        full-width
                        min-width="290px"
                        :disabled="presentChecker(experience)"
                >
                    <v-text-field
                            slot="activator"
                            v-model="experience.endDate"
                            label="End Date"
                            prepend-icon="event"
                            readonly
                    ></v-text-field>
                    <v-date-picker v-model="experience.endDate" @input="experience.endDateMenu = false"></v-date-picker>
                </v-menu>
                <v-checkbox
                        label="Currently Working"
                        v-model="experience.present"
                        class="ma-0 pa-0"
                ></v-checkbox>
            </v-flex>
        </v-layout>
        <v-flex xs-12>
            <v-btn @click="addNewExperience">Add</v-btn>
        </v-flex>
    </div>
</template>

<script>
    export default {
        name: "Experience",
        props:['title'],
        data(){
            return{
                experiences:[
                    {
                        instituteName: null,
                        position: null,
                        startDate: null,
                        endDate: null,
                        present: false,
                        startDateMenu:false,
                        endDateMenu:false,
                        //date:new Date().toISOString().substr(0, 10)
                    }
                ]
            }
        },
        mounted(){
            this.disableNextRoute();
        },
        watch:{
            experiences: {
                handler() {
                    this.disableNextRoute(false)
                },
                deep: true
            }
        },
        methods:{
            disableNextRoute(value=true){
                this.$emit('disableNextRoute',value);
            },
            presentChecker(value){
                if(value.present)
                {
                    value.endDate = null;
                }
                return value.present;
            },
            addNewExperience(){
                this.experiences.push({
                    instituteName: null,
                    position: null,
                    startDate: null,
                    endDate: null,
                    present: false,
                    startDateMenu:false,
                    endDateMenu:false,
                })
            }
        }
    }
</script>

<style scoped>

</style>
