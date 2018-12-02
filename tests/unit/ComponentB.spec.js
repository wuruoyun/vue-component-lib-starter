import { mount } from '@vue/test-utils'
import ComponentB from '@/components/ComponentB'

describe('ComponentB.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(ComponentB)
  })

  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('triggers a click event when the button is clicked', () => {
    wrapper.setData({ value: 'Vue2' })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
    expect(wrapper.emitted().click[0]).toEqual(['Vue2'])
  })
})
