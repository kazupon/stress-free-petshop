import axios from 'axios'
import ProductGrid from './ProductGrid'
import { mount } from '@vue/test-utils'
import { products } from '../../test/mocks'

// You can refactor this test to use mount utils, which does not require stubbing the store every time
import {mount as mountUtils, mountWithRouter} from '../../test/mount-utils'

jest.mock('axios')

describe('ProductGrid', () => {
  xit('mounts with the mount utils helper', () => {
    axios.get.mockResolvedValue({ data: { products } });
    const wrapper = mountUtils(ProductGrid)

    expect(wrapper.exists()).toBeTruthy()
  })

  it('formats the product price properly using i18n', async () => {

  })

  it('renders the product details', async () => {
    axios.get.mockResolvedValue({data: {products}});

    // You can choose to mock the router or use the real one
    const wrapper = await mountWithRouter(ProductGrid)

    await retry(() => expect(wrapper.html()).toContain(products[0].name))
  })
})
