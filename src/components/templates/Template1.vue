<template>
    <div class="template-size mx-auto">
        <v-layout row wrap>
            <v-flex md8 class="mt-auto">
                <h1 class="text-uppercase">{{name}}</h1>
                <p class="mb-0 caption">E-mail: {{email}}</p>
                <p class="mb-0 caption"> {{phone}}</p>
                <p class="caption">Address: {{address}}</p>
            </v-flex>
             <v-flex md4>
                 <img class="text-lg-right" height="207.87401575px" width="170.07874016px" src="https://scontent.fdac26-1.fna.fbcdn.net/v/t1.0-9/44305362_2049799538416982_6346028021966700544_n.jpg?_nc_cat=109&_nc_ht=scontent.fdac26-1.fna&oh=a8b7774d95a989dc253a588ff8219a7c&oe=5CCF7BC1" alt="">
            </v-flex>
        </v-layout>
        <v-divider class="primary" height="2px !important"></v-divider>

    </div>
</template>

<script>
    export default {
        name: "Template1",
        data(){
            return{
                name: 'Mehedi Hasan',
                email: 'mhs2197@gmail.com',
                phone: '01686662976',
                address: 'House: 29, Road: Girls school road, Dakshinkhan, Uttara, Dhaka'
            }
        }
    }
</script>

<style scoped>
    .template-size{
        max-width: 700px;
        height: 2256px;
    }
</style>
