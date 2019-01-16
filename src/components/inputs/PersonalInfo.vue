<template>
    <v-layout row wrap>
        <v-flex xs12 my-4>
            <h2 class="text-xs-center">{{ title }}</h2>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 sm12 md6 px-2>
            <v-text-field v-model="firstName" label="First Name" required></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md6 px-2>
            <v-text-field v-model="LastName" label="Last Name" required></v-text-field>
        </v-flex>
        <v-flex xs12 px-2>
            <v-text-field v-model="email" label="E-mail" required></v-text-field>
        </v-flex>
        <v-flex xs12 px-2>
            <v-text-field type="number" v-model="phone" label="Phone" required></v-text-field>
        </v-flex>
        <v-flex xs12 px-2>
            <v-textarea
                    name="input-7-1"
                    label="Address"
                    auto-grow
                    v-model="address"
            ></v-textarea>
        </v-flex>
        <v-flex xs12 px-2>
            <img :src="image.url" height="150" v-if="image.url"/>
            <v-text-field label="Choose Image" @click='imageSelect' v-model='image.name' prepend-icon='attach_file'></v-text-field>
            <input
                    type="file"
                    style="display: none"
                    ref="image"
                    accept="image/*"
                    @change="chooseImage"
            >
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        name: "PersonalInfo",
        props:['title'],
        $_veeValidate: {
            validator: 'new'
        },
        data(){
            return{
                firstName: null,
                LastName: null,
                email: null,
                phone: null,
                image:{
                    name: null,
                    url: null,
                    file: null,
                },
                address: null,
            }
        },
        methods:{
            imageSelect(){
                this.$refs.image.click ();
            },
            chooseImage (event) {
                const files = event.target.files
                if(files[0] !== undefined) {
                    this.image.name = files[0].name
                    if(this.image.name.lastIndexOf('.') <= 0) {
                        return
                    }
                    const fr = new FileReader ()
                    fr.readAsDataURL(files[0])
                    fr.addEventListener('load', () => {
                        this.image.url = fr.result
                        this.image.file = files[0] // this is an image file that can be sent to server...
                    })
                } else {
                    this.image.name = ''
                    this.image.url = ''
                    this.image.file = ''
                }
            }
        }
    }
</script>

<style scoped>

</style>
