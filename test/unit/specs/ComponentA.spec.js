import Vue from 'vue';
import { mount } from 'vue-test-utils';
import ComponentA from '@/components/ComponentA';

const createCmp = propsData => mount(ComponentA, { propsData });

describe('ComponentA.vue', () => {
  let cmp;

  it('has a msg property', () => {
    cmp = createCmp({ msg: 'hey' });
    expect(cmp.props('msg', 'hey')).toBeTruthy();
  });

  it('has the expected html structure', () => {
    cmp = createCmp({ msg: 'Greeting' });
    expect(cmp.element).toMatchSnapshot();
  });
})