import { shallow } from 'vue-test-utils'
import DrawingTile from './DrawingTile'

describe('DrawingTile.vue', () => {
  it('renders', () => {
    const wrapper = shallow(DrawingTile, {
      propsData: {
        imageLink: { href: '', ext: '' }
      }
    })
  })
})
