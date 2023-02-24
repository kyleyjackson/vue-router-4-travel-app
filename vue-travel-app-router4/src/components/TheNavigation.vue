<template>
    <div id="nav">
        <router-link id="logo" to="/">Vue School Travel App</router-link>
        <router-link
            v-for="destination in destinations" 
            :key="destination.id"
            :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
            > <!-- v-for loops through each {destination} in {destinations} (kinda like forEach) -->
            <!-- :key attribute tells Vue how {destination} relates to the HTML elements being rendered -->
            {{destination.name}}
        </router-link>
    </div>
</template>

<style lang="css">
    #nav .nav-active-link { /* styles for the created active class */
        color: #FFF;
        opacity: 1;
    } 
</style>

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