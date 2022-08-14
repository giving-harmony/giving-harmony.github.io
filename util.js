function initVue() {
  Vue.component('concert-box', {
    props: ['concert'],
    template: '<div class="concert-box">' +
                '<table class="concert-table">' +
                '<tr>' + 
                '  <th>Date and Time</th>' +
                '  <td>{{ concert.datetime }}</td>' +
                '</tr><tr>' +
                '  <th>Venue</th>' +
                '  <td>{{ concert.venue[0] }}<br>{{ concert.venue[1] }}</td>' +
                '</tr><tr>' +
                '  <th>Beneficiary</th>' +
                '  <td><a :href=concert.beneficiary[1] target="_blank">{{ concert.beneficiary[0] }}</a></td>' +
                '</tr>' +
                '</table>' +
                '<img class="concert-poster figure-img img-fluid rounded mb-5" :src="concert.poster">' +
                '<slot></slot>' +
              '</div>'
  });

  Vue.component('concert-video', {
    props: ['url'],
    template: '<div class="video-wrap mb-5"><div class="video-container">' +
                '<iframe :src="url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
              '</div></div>'
  });

  Vue.component('concert-program', {
    props: ['program'],
    template: '<div class="concert-program">' +
                '<h3>Concert Program</h3>' +
                '<v-card v-for="(item,i) in program" :key="i" class="mx-auto my-3">' +
                  '<v-card-title>{{item[0]}}</v-card-title>' +
                  '<v-card-subtitle>composer(s): {{item[1]}}</v-card-subtitle>' +
                  '<v-card-text>performer(s): {{item[2]}}</v-card-text>' +
                '</v-card>' +
              '</div>'
  });
}

export { initVue };
