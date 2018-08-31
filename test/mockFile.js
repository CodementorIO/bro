import standard from '../'

export default class Hello {
  world () {
    const foo = () => {
      console.log('YOYO', typeof standard);
    }
    foo()
  }
}
