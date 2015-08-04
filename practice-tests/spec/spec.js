var code = require('../js/riffle.js');



describe('shuffle', function() {
  it('randomly shuffles cards', function() {
    expect(code.shuffleCards(code.cardArray)).not.toBe(code.cardArray);
  });
});
