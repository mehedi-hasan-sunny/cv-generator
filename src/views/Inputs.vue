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
                <v-flex xs12 sm10 md8 lg6 pa-5>
                    <v-card ref="form">
                        <v-card-text>
                            <Component :is="componentChecker()" :title="searchInSidebarNavigation().title"></Component>
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

    export default {
        name: "inputs",
        components: {
            PersonalInfo,
            CareerObjective,
        },
        data(){
            return{
                loadComponent: this.$route.params.input_section,
                sidebarNavigations: [
                    { title:'Personal Information', icon: 'account_box', component:'PersonalInfo'},
                    { title:'Career Objective', icon: 'directions_run', component:'CareerObjective'},
                ],
                items: [
                    { title: 'Home', icon: 'dashboard' },
                    { title: 'About', icon: 'question_answer' }
                ],
                right: null
            }
        },
        mounted(){
          if(!this.loadComponent)
          {
              this.loadComponent = this.$router.push({
                  name:'inputs',
                  params:{input_section:'PersonalInfo'}
              });
          }
          else if(!this.componentChecker() )
          {
              this.loadComponent = this.$router.push({
                 path:'/error'
              });
          }
        },
        methods:{
            updateInputSection(){
                this.loadComponent = this.$route.params.input_section;
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
            }
        },
        watch:{
            $route: 'updateInputSection'
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
