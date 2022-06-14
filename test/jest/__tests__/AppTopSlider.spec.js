import { describe, expect, it } from "@jest/globals";
import { installQuasarPlugin } from "@quasar/quasar-app-extension-testing-unit-jest";
import { mount, shallowMount } from "@vue/test-utils";
import { QBtn } from "quasar";
import AppTopSlider from "components/AppTopSlider";

installQuasarPlugin();

describe("AppTopSlider", () => {
  const propsData = {
    items: [
      {
        title: 'title1',
        text: 'text1',
        icon: 'icon1'
      },
      {
        title: 'title2',
        text: 'text2',
        icon: 'icon2'
      },
      {
        title: 'title3',
        text: 'text3',
        icon: 'icon3'
      }
    ]
  }

  it("should show slide 1 by default", () => {
    const wrapper = mount(AppTopSlider, {
      propsData
    });

    expect(wrapper.text()).toContain('1');
  });

  it("should title", () => {
    const wrapper = mount(AppTopSlider, {
      propsData
    });

    expect(wrapper.text()).toContain('title');
  });

  it("should show text", () => {
    const wrapper = mount(AppTopSlider, {
      propsData
    });

    expect(wrapper.text()).toContain('text');
  });

  it("should show icon", () => {
    const wrapper = mount(AppTopSlider, {
      propsData
    });

    expect(wrapper.text()).toContain('icon');
  });

  it("should show 2nd slide when click on right arrow", async() => {
    const wrapper = mount(AppTopSlider, {
      propsData
    });

    const rightArrowBtn = wrapper.find('.q-carousel__next-arrow>button');
    await rightArrowBtn.trigger('click');

    expect(wrapper.text()).toContain('2');
  });

  it("should show 3rd slide when click on left arrow", async() => {
    const wrapper = mount(AppTopSlider, {
      propsData
    });

    const leftArrowBtn = wrapper.find('.q-carousel__prev-arrow>button');
    await leftArrowBtn.trigger('click');

    expect(wrapper.text()).toContain('3');
  });
});
