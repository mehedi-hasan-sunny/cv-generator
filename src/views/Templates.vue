<template>
    <div>
        <p>Choose a template</p>
        <v-layout row wrap>
            <v-flex xs4 md3 v-for="template in templates" :key="template.title">
                <v-hover>
                    <v-card flat slot-scope="{ hover }" :class="`elevation-${hover ? 4 : 0}`" class="text-xs-center ma-3">
                        <v-responsive>
                            <v-img :src="template.link"></v-img>
                        </v-responsive>
                        <v-card-text class="py-1">
                            {{template.title}}
                        </v-card-text>
                        <v-divider></v-divider>

                        <v-card-actions class="pa-0">
                            <Modal :componentName="template.componentName"></Modal>
                        </v-card-actions>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        name: "templates",
        data(){
            return{
                templates:[
                    { title: 'Template 1', link: '/images/Template1.jpg', componentName:'Template1'},
                    { title: 'Template 2', link: '/images/Template2.jpg', componentName:'Template2'},
                ],
            }
        }
    }
</script>

<style scoped>
    .elevation-4:hover {
        cursor: pointer;
    }
</style>
