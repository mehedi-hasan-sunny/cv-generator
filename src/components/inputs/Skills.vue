<template>
    <div>
        <v-flex xs12 my-4>
            <h2 class="text-xs-center">{{title}}</h2>
        </v-flex>
        <v-layout row wrap v-for="(skill,index) in skills" :key="index">
            <v-flex xs12 px-2>
                <v-text-field v-model="skill.name" label="Skill Name" required></v-text-field>
            </v-flex>
        </v-layout>
        <v-flex xs-12>
            <v-btn @click="addNewExperience">Add</v-btn>
        </v-flex>
    </div>
</template>

<script>
    export default {
        name: "Skills",
        props:['title'],
        data(){
            return{
               skills:[{
                   name:null,
               }]
            }
        },
        mounted(){
            this.disableNextRoute();
        },
        watch:{
            skills: {
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

            addNewExperience(){
                this.skills.push({
                    name: null,
                })
            }
        }
    }
</script>

<style scoped>

</style>
