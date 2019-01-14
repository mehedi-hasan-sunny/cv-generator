<template>
    <form>
        <v-layout row>
            <v-flex xs12 md6>
                <v-text-field v-model="firstName" label="First Name"  :error-messages="errors.collect('name')" required></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
                <v-text-field v-model="LastName" label="Last Name" required></v-text-field>
            </v-flex>
        </v-layout>
        <v-text-field v-model="email" label="E-mail" required></v-text-field>
        <v-text-field type="number" label="Phone" required></v-text-field>
    </form>
</template>

<script>
    export default {
        name: "PersonalInfo",
        $_veeValidate: {
            validator: 'new'
        },
        data(){
            return{
                firstName: null,
                LastName: null,
                email: null,
                phone: null,
                dictionary: {
                    attributes: {
                        email: 'E-mail Address'
                        // custom attributes
                    },
                    custom: {
                        name: {
                            required: () => 'Name can not be empty',
                            max: 'The name field may not be greater than 10 characters'
                            // custom messages
                        },
                        select: {
                            required: 'Select field is required'
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
