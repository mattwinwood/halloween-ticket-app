<template>
  <div>
  <header>
    <Navigation/>
  </header>
  <main class="p-8">
    <Steps class="py-8" v-if="this.$store.state.tickets.activeStep !== 4"/>
    <PersonalInformation class="py-12" v-if="this.$store.state.tickets.activeStep === 1"/>
    <TicketDate class="py-12" v-if="this.$store.state.tickets.activeStep === 2" />
    <TicketTimes class="py-12" v-if="this.$store.state.tickets.activeStep === 2"/>
    <Payment class="py-12" v-if="this.$store.state.tickets.activeStep === 3"/>
  </main>
  </div>
</template>

<script>
  import Navigation from "../components/Navigation.vue";
  import PersonalInformation from "../components/Form/PersonalInformation.vue";
  import Steps from "../components/Steps.vue";
  import TicketTimes from "../components/Form/TicketTimes.vue";
  import TicketDate from "../components/Form/TicketDate.vue";
  import Payment from "../components/Form/Payment.vue";

export default {
    components: {
        Payment,
        TicketTimes,
        TicketDate,
        Navigation,
        PersonalInformation,
        Steps
    }
    }
</script>
