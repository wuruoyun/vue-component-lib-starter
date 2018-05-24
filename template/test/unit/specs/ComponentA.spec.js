import { mount } from '@vue/test-utils'
import ComponentA from '@/components/ComponentA'

const createCmp = propsData => mount(ComponentA, { propsData })

describe('ComponentA.vue', () => {
  let wrapper

  it('has a msg property', () => {
    wrapper = createCmp({ msg: 'hey' })
    expect(wrapper.props('msg', 'hey')).toBeTruthy()
  })

  it('has the expected html structure', () => {
    wrapper = createCmp({ msg: 'Greeting' })
    expect(wrapper.element).toMatchSnapshot()
  })
})
