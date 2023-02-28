<template>
    <section v-if="destination" class="destination">
        <h1>{{destination.name}}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" alt="destination.name">
            <p>{{destination.description}}</p>
        </div>
    </section>
    <section class="experiences">
        <h2>Top Experiences in {{destination.name}}</h2>
        <router-link
            v-for="experience in destination.experiences"
            :key="experience.slug"
            :to="{name: 'experience.show', params:{experienceSlug: experience.slug}}"
        >
            <div class="cards">
                <ExperienceCard
                    :experience="experience"
                />
            </div>
        </router-link>
    </section>
</template>

<script>
import sourceData from '../data.json'
import ExperienceCard from '../components/ExperienceCard.vue'

export default {
    components: {
        ExperienceCard
    },

    props: {
        id: {
            type: Number, 
            required: true
        }
    },

    computed: {
        destination() {
            return sourceData.destinations.find((destination) => destination.id === this.id)
        }
    }
}
</script>
