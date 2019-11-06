export default {
  created () {
    this.hello()
  },
  methods: {
    hello () {
      console.log('hello from mixin!')
    }
  }
}