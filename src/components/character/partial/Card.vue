<template>
  <div class="character hvr-glow">
    <div class="character-image" :style="style"></div>
    <a href="#" class="character-preview"></a>

    <div class="character-overlay">
      <router-link
        :to="{ name: 'character.edit', params: { character: character.id }}"
        class="edit hvr-underline-from-left">
        <i class="fa fa-fw fa-edit"></i>
      </router-link>

      <a href="delete" class="delete hvr-underline-from-right">
        <i class="fa fa-fw fa-trash-o"></i>
      </a>
      <div class="character-label">
        <a class="name hvr-underline-from-center" target="_blank">
          {{ character.name }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      style: {
        'background-image': `url('${this.character.avatar}')`
      }
    }
  },
  props: {
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.character {
  height: 320px;
  width: 240px;
  background-color: #fff;
  display: inline-block;
  margin: 3px;
  outline: 1px solid rgba(0, 0, 0, 0.4);
  position: relative;
  text-align: center;
  vertical-align: bottom;
  white-space: normal;

  .character-image,
  .character-preview,
  .character-overlay {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  
  .character-image {
    z-index: 0;
    background-position: center;
    background-size: cover;
    display: block;
  }

  .character-preview {
    cursor: pointer;
    display: block;
    z-index: 1;
  }

  .character-overlay {
    z-index: 2;

    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.75);
    visibility: hidden;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.165);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.3) 100%);
    transition-property: visibility, opacity;
    transition-duration: 0.25s;

    a, button {
      color: inherit;
    }
    
    .character-label {
      position: absolute;
      left: 40px;
      right: 40px;
      bottom: 0;
      vertical-align: bottom;
      word-wrap: break-word;

      .name {
        max-width: 160px;
        padding: 8px 0;
        text-decoration: none;
      }
    }

    .delete,
    .edit {
      border: 0;
      bottom: 0;
      line-height: inherit;
      padding: 8px 9px;
      position: absolute;
      z-index: 1000;
    }
    .delete {
      right: 0;
    }
    .edit {
      left: 0;
    }
  }

  &:hover > .character-overlay,
  &:active > .character-overlay,
  &:focus > .character-overlay {
    opacity: 1;
    visibility: visible;
  }
}
</style>
