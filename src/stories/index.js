/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';
import ArtworkTile from '../components/ArtworkTile.vue'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

const gridStyle = `style="
  display: grid; 
  grid-template-columns: 150px;
  grid-auto-rows: minmax(150px, auto);"
`

const imageLinkCoffee = 'https://assets.vogue.com/photos/5876ed67d75797c43edeb105/master/pass/2-crop-coffeeisthenectarofthegods-how-to-master-the-cafe-instagram.jpg'
const imageLink = '/static/image_2.jpg'

storiesOf('ArtworkTile', module)
  .add('with image', () => ({
    components: { ArtworkTile },
    template: `<div ${gridStyle}>
    <ArtworkTile 
      :imageLink="'https://scontent.cdninstagram.com/t51.2885-15/e35/23160894_127524934619646_765868964675846144_n.jpg'"/>
    </div>`,
    props: { imageLink }
  }))

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>;
    },
    methods: { action: linkTo('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));

/* eslint-enable react/react-in-jsx-scope */
