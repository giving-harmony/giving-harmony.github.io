const dawn = {
  title: '2022 The Dawn',
  datetime: 'Sunday, May 22, 2022 6:00 pm',
  venue: [ 'Campus Theatre, Fullerton College',
           '321 E Chapman Ave, Fullerton, CA 92832' ],
  beneficiary: [ "Children's Health Orange County", 'https://raiseup.choc.org/event/ghthedawnconcert' ],
  poster: 'img/dawn.jpg',
};

const echo = {
  title: '2021 The Echo',
  datetime: 'Sunday, Dec 5, 2021 6:30 pm',
  venue: [ 'Forum Theatre, Yorba Linda High School',
           '4175 Fairmont Blvd, Yorba Linda, CA 92886' ],
  beneficiary: ['Malala Foundation', 'https://malala.org'],
  poster: 'img/echo.jpg',
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
  ],
  video: 'https://www.youtube.com/embed/98-eAkatJSY',
  program: [
    [ 'River Flows in You', 'Yiruma', 'Tina Hou, piano' ],
    [ 'Safe and Sound', 'Swift, Williams, White, and Burnett', 'Samantha Huang & Nadia Wang, soprano · Evelyn Wu, flute · Cathy Chen, guitar' ],
    [ 'Octet', 'Schubert; arr: Brown', 'Tina Hou & Cathy, piano' ],
    [ 'Carnivale', 'Roubos', 'Tina Hou & Cathy, piano' ],
    [ 'Canon in D', 'Pachelbel', 'Evelyn, flute · Ievtte Chen, cello · Vella Feng, piano' ],
    [ 'Rhythm in Northern Country', 'Walker', 'Cathy Chen, piano' ],
    [ 'What a Wonderful World', 'Thiele and Weiss', 'Samantha Huang & Nadia Wang, soprano · Evelyn Wu, flute · Vella Feng, piano' ],
    [ 'Impromptu', 'Reinhold', 'Anna Huang, piano' ],
    [ 'A Thousand Years', 'Perri and Hodges', 'Ivette Chen, cello · Cathy Chen, piano' ],
    [ 'Unravel Tokyo Ghoul', 'Kitajima', 'Vella Feng, piano' ],
    [ "Fisherman's Song at Eventide", 'Young', 'Evelyn Wu, flute · Anna Huang, piano' ],
    [ "Can't Help Fall in Love", 'Peretti, Creatore, and Weiss', 'Samantha Huang & Nadia Wang, soprano · Ivette Chen, cello · Cathy Chen, guitar · Tina Hou, piano' ],
    [ 'Concert Etude No. 3 Un Sospiro', 'Liszt', 'Nadia Wang, piano' ],
    [ 'Pezzo Cariccioso', 'Tchaikovsky', 'Ivette Chen, cello · Anna Huang, piano' ],
    [ 'Starlight', 'Bellamy; arr: Chow', 'Samantha Huang & Nadia Wang, soprano · Evelyn Wu & Anna Huang, flute · Ivette Chen, cello · Cathy Chen, guitar · Vella Feng & Tina Hou, piano' ],
  ]
};

function initConcertComponents() {
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
                '<img class="concert-poster figure-img img-fluid rounded" :src="concert.poster">' +
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

export { dawn, echo, initConcertComponents };
