import { createServer } from "miragejs"
import { products } from '../test/mocks'

export default function () {
  createServer({
    routes() {
      this.get("/api/products", () => ({
        products,
      }))
    },
  })
}
