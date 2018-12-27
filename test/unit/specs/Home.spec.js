import Vue from 'vue';
import { mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

describe('Home.vue', () => {
  let wrapper;
  let vm;
  beforeAll(() => {
    wrapper = mount(Home)
    vm = wrapper.vm
  })
  it('should render correct header', () => {
    expect(wrapper.html()).toContain(`<h1 class="h1">
    AWS Amplify Vue Sample
  </h1>`)
  })
})
