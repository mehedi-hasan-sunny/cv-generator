<template>
    <div class="team">
        <v-navigation-drawer permanent absolute class="hidden-sm-and-down">
            <v-toolbar flat>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-title class="title">
                            Inputs
                        </v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list class="pt-0">
                <v-list-tile v-for="sidebarNavigation in sidebarNavigations" :key="sidebarNavigation.title" router :to="{name:'inputs',params: { input_section: sidebarNavigation.component}}">
                    <v-list-tile-action>
                        <v-icon>{{ sidebarNavigation.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ sidebarNavigation.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <div class="left-panel">
            <v-layout justify-center>
                <v-flex xs12 sm10 md8 lg6 :class="{'pa-5': $vuetify.breakpoint.mdAndUp, 'pa-3': $vuetify.breakpoint.smAndDown}">
                    <v-card ref="form">
                        <v-card-text>
                            <Component :is="loadComponent" :title="title"></Component>
                        </v-card-text>
                        <v-divider class="mt-5"></v-divider>
                        <v-card-actions>
                            <v-flex text-xs-left>
                                <v-btn v-if="navigateToComponent('back')" color="grey" flat route :to="navigateToComponent('back')">
                                    <v-icon>navigate_before</v-icon> Back
                                </v-btn>
                            </v-flex>
                            <v-flex text-xs-right>
                                <v-btn color="primary" flat route :to="navigateToComponent('next')">
                                    Next <v-icon right>navigate_next</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>
    import PersonalInfo from "../components/inputs/PersonalInfo";
    import CareerObjective from "../components/inputs/CareerObjective";
    import Education from "../components/inputs/Education";

    export default {
        name: "inputs",
        components: {
            PersonalInfo,
            CareerObjective,
            Education,
        },
        data(){
            return{
                loadComponent: this.$route.params.input_section,
                sidebarNavigations: [
                    { title:'Personal Details', icon: 'perm_identity', component:'PersonalInfo'},
                    { title:'Career Objective', icon: 'directions_run', component:'CareerObjective'},
                    { title:'Education', icon: 'school', component:'Education'},
                ],
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' }
                ],
                right: null,
                title: null,
            }
        },
        beforeMount(){
            this.inputRouteCheck();
        },

        methods:{

            inputRouteCheck(){
                if(!this.loadComponent)
                {
                    this.$router.push({
                        name:'inputs',
                        params:{input_section:'PersonalInfo'}
                    });
                    this.loadComponent = this.$route.params.input_section;

                }
                else if(!this.componentChecker() )
                {
                    this.loadComponent=null;
                    this.$router.push({
                        path:'/error'
                    });
                }
                else{
                    if(!this.title){
                        console.log('from mounted')
                        this.title = this.searchInSidebarNavigation().title;
                    }
                }
            },
            searchInSidebarNavigation(){
                let instance = this;
                return this.sidebarNavigations.find(element => element.component === instance.loadComponent);
            },
            componentChecker()
            {
                if(typeof this.searchInSidebarNavigation() === 'object'){
                    return this.loadComponent;
                }
            },
            navigateToComponent(check){
                let navigateComponent = null, instance = this;
                this.sidebarNavigations.forEach(function (element,index,array) {
                   if(element.component===instance.loadComponent){
                       if(check === 'next')
                       {
                           if(index+1 == array.length)
                           {
                               navigateComponent = { name:'templates'}
                           }
                           else {
                               navigateComponent ={ name:'inputs',params:{ input_section: array[index+1].component}}
                           }
                       }
                       else if (check === 'back'){
                           if(index-1 == -1)
                           {
                               navigateComponent = false
                           }
                           else {
                               navigateComponent = { name:'inputs',params:{ input_section: array[index-1].component}}
                           }
                       }
                   }
                });
                return navigateComponent;
            },
            updateInputSection(){
                this.loadComponent = this.$route.params.input_section;

                if(!this.loadComponent)
                {
                    this.inputRouteCheck();
                }
                else
                {
                    this.title = this.searchInSidebarNavigation().title;
                }
            },
        },
        watch:{
            $route: 'updateInputSection',
        }
    }
</script>
<style>
    @media only screen and (min-width: 961px) {
        .left-panel{
            margin-left: 300px;
        }
    }
</style>
