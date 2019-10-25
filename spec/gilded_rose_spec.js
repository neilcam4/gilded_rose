describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });
  it("should reduce in quality after each day by 1 ", function(){
    const gildedRose = new Shop([new Item("foo", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9)
  })
  it('should reduce in quantity by 1 when update quality', function(){
    const gildedRose = new Shop([new Item("foo", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4)
  })
  it('should ensure the quality is never a negative number', function(){
    const gildedRose = new Shop([new Item("foo", 50, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  })
});
