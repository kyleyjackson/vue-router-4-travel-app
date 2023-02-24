<template>
    <div class="home">
        <h1>All Destinations</h1>
        <div class="destinations"> 
            <router-link
            v-for="destination in destinations" 
            :key="destination.id"
            :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
            > <!-- v-for loops through each {destination} in {destinations} (kinda like forEach) -->
            <!-- :key attribute tells Vue how {destination} relates to the HTML elements being rendered -->
                <h2>{{destination.name}}</h2>
                <img :src="`/images/${destination.image}`" alt="destination.name">
            </router-link>
        </div>
        
    </div>
</template>

<script>
import sourceData from '../data.json'

export default {
    data() {
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>