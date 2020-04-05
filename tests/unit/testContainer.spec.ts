import { mount } from "@vue/test-utils";
import vuetify from "@/plugins/vuetify.js";
import testContainer from "@/containers/testContainer.vue";
(window as any).globalThis = window;
globalThis.innerWidth = 1200;

describe("WIP", () => {
  it("should render", async () => {
    const wrapper = mount(testContainer, {
      vuetify
    });
    expect(true).toBeTruthy();
    expect(wrapper.element).toMatchSnapshot();
  });
});
