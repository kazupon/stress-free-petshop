import ProductCard from './ProductCard'
import { mount } from '@vue/test-utils'

describe('ProductCard', () => {
  it('mounts', () => {
    mount(ProductCard)
  })
  it('renders content in the footer slot', () => {})
  it('renders content in the default slot', () => {})
})
