import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies : [
      {
        id: 1,
        name: 'Heat',
        director: 'Michael Mann',
        year: 1995,
        actors: [
          'Robert de Niro',
          'Al Pacino',
          'Val Kilmer'
        ],
        category: 'action',
        image: 'https://imgc.allpostersimages.com/img/print/u-g-F4S6Z30.jpg?w=304&h=450'
      },
      {
        id: 2,
        name: 'Hets',
        director: 'Ingemar Bergman',
        year: 1944,
        actors: [
          'Stig Järrel',
          'Alf Sjöberg'
        ],
        category: 'action',
        image: 'http://www.ingmarbergman.se/sites/default/files/styles/gallery/public/images/0/BA97821FDB414E9D82681A69EBB20140.JPEG?itok=CjzRs2jR'
      },
      {
        id: 3,
        name: 'Eat',
        director: 'Jimmy Weber',
        year: 2014,
        actors: [
          'Ali Francis',
          'Meggie Maddock'
        ],
        category: 'horror',
        image: 'http://www.gstatic.com/tv/thumb/v22vodart/11277860/p11277860_v_v8_aa.jpg'
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
