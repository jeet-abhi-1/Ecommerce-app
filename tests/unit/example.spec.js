import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/.vue'
import Cart from '@/components/Cart.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('Cart.vue', () => {
  it('renders props.msg when passed', () => {
    const cartItems = [{ title: 'title', price: 1000 }]
    const wrapper = shallowMount(Cart, {
      propsData: { cartItems }
    })
    expect(wrapper.contains).toContain(cartItems)
  })
})
