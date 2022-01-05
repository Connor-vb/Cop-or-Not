// for offline::::::  <span class="oi oi-circle-x"></span>

// for online::::::: <span class="oi oi-circle-check"></span>


// Dropdown toggle for profile
$('.dropdown-toggle').dropdown();













// swipeable functionality example for node 

// pg 1

{/* <script>
import { Vue2InteractDraggable, InteractEventBus } from 'vue2-interact'
const EVENTS = {
  MATCH: 'match',
  SKIP: 'skip',
  REJECT: 'reject'
}

export default {
  name: 'SwipeableCards',
  components: { Vue2InteractDraggable },
  data() {
    return {
      isVisible: true,
      index: 0,
      interactEventBus: {
        draggedRight: EVENTS.MATCH,
        draggedLeft: EVENTS.REJECT,
        draggedUp: EVENTS.SKIP
      },
      cards: [
        { src: 'karina.jpg', name: 'Karina', age: 7 },
        { src: 'alexander.jpg', name: 'Alexander', age: 5 },
        { src: 'bona.jpg', name: 'Bona', age: 3 },
        { src: 'ichi.jpg', name: 'Ichi', age: 7 },
        { src: 'lloyd.jpg', name: 'Lloyd', age: 4 },
        { src: 'luiza.jpg', name: 'Luiza', age: 9 },
        { src: 'max.jpg', name: 'Max', age: 6 },
        { src: 'mona.jpg', name: 'Mona', age: 3 },
        { src: 'naru.jpg', name: 'Naru', age: 7 },
        { src: 'ramdan.jpg', name: 'Ramdan', age: 8 },
        { src: 'rikki-austin.jpg', name: 'Rikki Austin', age: 3 },
        { src: 'tucker.jpg', name: 'Tucker', age: 9 },
        { src: 'uriel.jpg', name: 'Uriel', age: 6 },
        { src: 'zoe.jpg', name: 'Zoe', age: 2 },
      ]
    }
  },
  computed: {
    current() {
      return this.cards[this.index]
    },
    next() {
      return this.cards[this.index + 1]
    }
  },
  methods: {
    match() {
      InteractEventBus.$emit(EVENTS.MATCH)
    },
    reject() {
      InteractEventBus.$emit(EVENTS.REJECT)
    },
    skip() {
      InteractEventBus.$emit(EVENTS.SKIP)
    },
    emitAndNext(event) {
      this.$emit(event, this.index)
      setTimeout(() => this.isVisible = false, 200)
      setTimeout(() => {
        this.index++
        this.isVisible = true
      }, 200)
    }
  }
}
</script> */}

//  PG 2

{/* <script>
import SwipeableCards from './components/SwipeableCards.vue'

export default {
  name: 'app',
  components: { SwipeableCards }
}
</script> */}