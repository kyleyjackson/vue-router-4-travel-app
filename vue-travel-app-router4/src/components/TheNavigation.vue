<template>
    <div id="nav">
        <AppLink id="logo" to="/">Vue School Travel App</AppLink>
        <AppLink
            v-for="destination in destinations" 
            :key="destination.id"
            :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
            > <!-- v-for loops through each {destination} in {destinations} (kinda like forEach) -->
            <!-- :key attribute tells Vue how {destination} relates to the HTML elements being rendered -->
            {{destination.name}}
        </AppLink>
        <AppLink :to="{name: 'protected'}">Dashboard</AppLink>
        <AppLink to="http://chihuahuaspin.com/">Spin</AppLink>
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