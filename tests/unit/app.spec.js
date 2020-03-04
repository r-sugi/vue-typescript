import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue"
import store from "@/store/index"
import { users } from "@/../tests/unit/res"
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import flushPromises from 'flush-promises'

const $axios = axios.create({
  baseURL: 'https://api.github.com'
})
const mock = new MockAdapter($axios);

describe("App.vue", () => {
  it("data test 1", () => {
    const wrapper = shallowMount(App, {
      store
    });
    expect(wrapper.vm.$data.test).toMatch("ff");
  });


  it("computed test 1", () => {
    const localThis = { users }
    expect(App.options.computed.userIds.get.call(localThis))
      .toEqual([1])
  })

  // FIXME:
  xit("computed test 2", async () => {
    mock.onGet('/users').reply(200, {
      users
    });

    const wrapper = shallowMount(App, {
      store
    });
    expect(wrapper.vm.userIds).toEqual([])
    await flushPromises()

    console.log(wrapper.html())
    expect(wrapper.vm.userIds).toEqual([])

  });
});
