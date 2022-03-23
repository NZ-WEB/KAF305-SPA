import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { mount } from '@vue/test-utils';
import { QBtn } from 'quasar';
import AppPageTitle from '../../../src/components/AppPageTitle';

installQuasarPlugin();

describe('AppPageTitle', () => {
  let wrapper;

  const propsData = {
    title: 'title',
    description: 'desc',
  };

  it('prop title is current', () => {
    wrapper = mount(AppPageTitle, { propsData });

    expect(wrapper.props().title).toBe(propsData.title);
  });

  it('prop description is current', () => {
    wrapper = mount(AppPageTitle, { propsData });

    expect(wrapper.props().description).toBe(propsData.description);
  });

  it.each`
  title    | description
  ${'title1'} | ${'desc1'} 
  ${'title2'} | ${'desc2'} 
  ${'testing 3'} | ${'Desc 3'} 
`('component currectly rendered with title - $title and description - $description', ({ title, description }) => {
    wrapper = mount(AppPageTitle, { propsData: { title, description } });

    expect(wrapper.text()).toContain(title);
    expect(wrapper.text()).toContain(description);
  });

  it('component renders with currect title', () => {
    wrapper = mount(AppPageTitle, { propsData });

    expect(wrapper.text()).toContain(propsData.title);
  });
});