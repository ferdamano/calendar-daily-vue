<template>
  <div class="events">This file will list all the events.</div>
</template>

<script>
// import EventsService from '@/services/EventsService';

export default {
  name: 'Events',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  // beforeCreate() {
  //   // eslint-disable-next-line
  //   console.log('boom boom');
  // },
  // methods: {
  //   async getEvents() {
  //     const events = await EventsService.fetchEvents();
  //     // eslint-disable-next-line
  //     console.log(events);
  //     return [];
  //   },
  // },
};
</script>
