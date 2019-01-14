<template>
    <div class="team">
        <h1 class="subheading grey--text">Inputs</h1>


        <v-container grid-list-xl text-xs-center>
            <v-layout row wrap>
                <v-flex xs8 offset-xs2>
                    <v-card flat class="pa-5">
                        <Component :is="this.loadComponent"></Component>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
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
            }
        },
        mounted(){
          if(!this.loadComponent)
          {
              this.loadComponent = this.$router.push({
                  path:'inputs/PersonalInfo'
              });
          }
        },
        methods:{
            updateInputSection(){
                this.loadComponent = this.$route.params.input_section;
            }
        },
        watch:{
            $route: 'updateInputSection'
        }
    }
</script>
