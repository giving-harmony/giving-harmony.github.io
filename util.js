function initGalleryComponents() {
  Vue.component('gallery', {
    props: ['event', 'showTitle'],
    template: '<div class="imageitem">' +
              '  <v-card elevation="2" class="gallery">' +
              '    <v-card-title v-if=showTitle>{{ `${event.name}, ${event.date}` }}</v-card-title>' +
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

export { initGalleryComponents };
