<template>
  

      <div class="list">
        <playlist :intracks="this.tracks" listname="main"></playlist>

      </div> 
</template>
<script>
import { mapState , mapActions } from 'vuex'
import playmix from '../mixin/functions'
import playlist from './playlist.vue'

export default {
  name:'list',
  mixins:[playmix],
  components:{
    playlist
  },
  methods:{
    ...mapActions([
      'Play'
    ])
  },
 computed: {
      ...mapState([
        'tracks',
        'currentTrack'
      ])
    },
}
</script>