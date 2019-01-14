<template>
 <nav>
     <v-toolbar flat app>
         <v-toolbar-side-icon class="grey--text" @click="sideBar = !sideBar"></v-toolbar-side-icon>
         <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">CV</span>
             <span>Generator</span>
         </v-toolbar-title>
         <v-spacer></v-spacer>
         <v-btn flat color="grey">
             <span>Sign Out</span>
             <v-icon right>exit_to_app</v-icon>
         </v-btn>
     </v-toolbar>
     <v-navigation-drawer  v-model="sideBar" app class="primary">
        <v-list>
             <v-list-tile v-for="link in links" :key="link.title" router :to="link.route">
                <v-list-tile-action>
                    <v-icon class="white--text">{{link.icon}}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title class="white--text">
                        {{link.title}}
                    </v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
     </v-navigation-drawer>
 </nav>
</template>

<script>
    export default {
        name: "Navbar",
        data(){
            return{
                sideBar: false,
                links:[
                    { icon:'dashboard', title:'Dashboard', route:'/'},
                    { icon:'folder', title:'My Projects', route:'/projects'},
                    { icon:'folder', title:'Inputs', route:'/inputs'},
                    { icon:'layers', title:'Templates', route:'/templates'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>
