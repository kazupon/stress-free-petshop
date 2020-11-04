import axios from 'axios'
import ProductDetails from './ProductDetails'
import makeStore from '../store'
import { mount } from '@vue/test-utils'
import { products } from '../../test/mocks'

// You can refactor this test to use mount utils,
// which does not require stubbing the store every time
import { mount as mountUtils } from '../../test/mount-utils'

jest.mock('axios')

describe('ProductDetails', () => {
  it('mounts with the mount utils helper', () => {
    axios.get.mockResolvedValue({ data: { products } });
    const wrapper = mountUtils(ProductDetails, { props: { productId: 1 }})
    expect(wrapper.exists()).toBeTruthy()
  })

  it('renders the product details', async () => {
    axios.get.mockResolvedValue({ data: { products } });

    const wrapper = mount({
      template: `
        <Suspense>
          <ProductDetails :productId="${products[0].id}" />
        </Suspense>`,
      components: { ProductDetails },
    }, {
      global: {
        plugins: [ makeStore() ]
      }
    })

    await retry(() => expect(wrapper.html()).toContain(products[0].name))
  })

  it('count the total number of products in the cart', () => {})
})
