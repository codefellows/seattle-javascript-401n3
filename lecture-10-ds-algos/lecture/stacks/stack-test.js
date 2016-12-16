

describe('stack module', function() {
  describe('.push()', function() {
    it('should add a new node to the top of the stack', function() {
      let st = new Stack(1)
      st.push(25)
      assert(st.top.val).to.equal(25)
      assert(st.top.prev).to.equal(null)
    })
    it('should throw error when max size exceeded', function() {
      let st = new Stack(1)
      st.push(25)
      expect(st.push(24)).to.equal(Error)
    })
  })
})
