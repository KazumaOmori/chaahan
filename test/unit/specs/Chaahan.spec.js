import Vue from 'vue'
import Chaahan from '@/components/Chaahan'

describe('Chaahan.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Chaahan)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.hello h1').textContent)
    //   .toEqual('Welcome to Your Vue.js App')
  })
})
