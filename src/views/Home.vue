<template>
    <div>
        <HomeHeader/>
        <AboutEvent/>
        <Workshops/>
        <calendar/>
<!--        <Sponsor />-->
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HomeContent from '@/components/HomeContent.vue'

    import AboutEvent from "@/components/HomeComponents/AboutEvent";
    import Workshops from "@/components/HomeComponents/Workshops";
    import HomeHeader from "@/components/HomeComponents/HomeHeader";
    import Sponsor from "@/components/HomeComponents/Sponsor";
    import calendar from "@/components/calendar.vue";

    export default {
        name: 'home',
        components: {
            HomeHeader, AboutEvent, Workshops, Sponsor,calendar
        },
        mounted() {
            console.log("home route mounted.")
        }
    }
</script>
