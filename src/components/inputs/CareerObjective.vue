<template>
    <v-layout row wrap>
        <v-flex xs12 my-4>
            <h2 class="text-xs-center">{{title}}</h2>
        </v-flex>
        <v-flex xs12 px-2>
            <v-textarea
                    name="input-7-1"
                    label="Objective"
                    v-model="objective"
                    auto-grow
            ></v-textarea>
        </v-flex>
        <v-flex xs12 px-2>
            <h5 class="body-1 pb-1">Examples:</h5>

            <p class="caption" v-for="(objectiveExample,index) in objectiveExamples" :key="index">
                {{objectiveExample}}
            </p>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "CareerObjective",
        props:['title'],
        data(){
            return{
                objective: null,
                objectiveExamples:[
                    'I am very passionate about computer and programming since my university life. I dream to be an expert software engineer so that I can build professional and useful software that has business value. I am looking for a senior software engineer position in a reputed software company that can help me to achieve my goal',
                    'To obtain a growth oriented job in a reputed organization that provides a fully professional working environment and where my creativity, sincerity and skills are the evaluating factors for recognition and job performance'
                ]

            }

        },
    }
</script>

<style scoped>

</style>
