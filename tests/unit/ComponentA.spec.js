import { mount } from '@vue/test-utils'
import ComponentA from '@/components/ComponentA'

describe('ComponentA.vue', () => {
  const wrapper = mount(ComponentA)

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('button click should increment the count', () => {
    expect(wrapper.vm.count).toBe(0)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.count).toBe(1)
  })
})
