<template>
  <div>
    <div class="artwork-collection">
      <DrawingTile :imageLink="{ href: '/static/image_1', ext: 'jpg' }" />
      <DrawingTile :imageLink="{ href: '/static/image_2', ext: 'jpg' }" />
      <DrawingTile :imageLink="{ href: '/static/image_3', ext: 'jpg' }" />
    </div>
  </div>
</template>

<script>
  import DrawingTile from '../../shared/DrawingTile'
  export default {
    name: 'LargeOverlay',

    components: {
      DrawingTile
    }
  }
</script>

<style scoped>
.artwork-collection {
  text-align: center;
}
</style>
