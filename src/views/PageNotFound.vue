<template>
    <v-container fill-height>
        <v-layout align-center>
            <v-flex class="text-xs-center white--text">
                <div class="ma-5">
                    <h1 class="display-2">Whoops, <span class="display-4 font-weight-bold">404</span></h1>
                    <h5 class="subheading">The page you were looking for does not exist</h5>
                </div>
                <v-btn outline color="white" @click.prevent="goHome">Get Me Out of Here</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "PageNotFound",
        methods:{
            goHome(){
                this.$router.push({name:'dashboard'})
            }
        }
    }
</script>

