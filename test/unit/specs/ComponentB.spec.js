import Vue from 'vue';
import { mount } from 'vue-test-utils';
import ComponentB from '@/components/ComponentB';

describe('ComponentB.vue', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(ComponentB);
  });

  it('has the expected html structure', () => {
     expect(cmp.element).toMatchSnapshot();
  });

  it('triggers a click event when the button is clicked', () => {
    const stub = jest.fn();
    cmp.vm.$on('click', stub);
    cmp.setData({ value: 'Vue2' });
    const el = cmp.find('button').trigger('click');
  
    expect(stub).toBeCalledWith('Vue2');
  });

})