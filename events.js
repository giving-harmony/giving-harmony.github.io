const events2021 = [
  {
    name: 'The Echo',
    date: 'December 5th',
    desc: '',
    pics: [
      './img/pc055426.jpg',
      './img/pc055453.jpg',
      './img/pc055504.jpg',
      './img/pc055574.jpg',
      './img/pc055649.jpg',
      './img/pc055842.jpg',
      './img/pc055908.jpg',
      './img/pc056011.jpg',
      './img/pc056165.jpg',
      './img/pc056267.jpg',
      './img/pc056359.jpg',
      './img/pc056443.jpg',
      './img/pc056556.jpg',
      './img/pc056617.jpg',
    ]
  },
  {
    name: 'Summer Gathering',
    date: 'August',
    desc: '',
    pics: [
      './img/dsc_0048.jpg',
      './img/dsc_0053.jpg',
      './img/dsc_0069.jpg',
      './img/dsc_9922.jpg',
      './img/dsc_9945.jpg',
      './img/dsc_9997.jpg',
    ]
  },
  {
    name: 'Summer Tutoring',
    date: 'June -- August',
    desc: '',
    pics: [
      './img/cathy01.png',
      './img/cathy02.png',
      './img/ivette01.jpg',
      './img/ivette02.jpg',
      './img/ivette03.jpg',
      './img/ivette04.jpg',
      './img/kerry01.jpg',
      './img/kerry02.jpg',
      './img/anna01.jpg',
      './img/anna02.jpg',
      './img/anna03.png',
    ]
  }
];

const events2019 = [
  {
    name: 'Young Musicians',
    date: 'July',
    desc: '',
    pics: [
      './img/190846.jpg',
      './img/190847.jpg',
      './img/190848.jpg',
    ]
  }
];

function initEventComponents() {
  Vue.component('event-box', {
    props: ['event'],
    template: '<div class="imageitem">' +
              '  <v-card elevation="2" class="gallery">' +
              '    <v-card-title>{{ `${event.name}, ${event.date}` }}</v-card-title>' +
              '    <v-carousel eager>' +
              '      <v-carousel-item' +
              '        v-for="item in event.pics"' +
              '        :src=item' +
              '        reverse-transition="fade-transition"' +
              '        transition="fade-transition"' +
              '        ripple="true"' +
              '      ></v-carousel-item>' +
              '    </v-carousel>' +
              '  </v-card>' +
              '</div>'
  });
};

export { events2021, events2019, initEventComponents };
