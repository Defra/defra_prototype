describe("stick-at-top-when-scrolling",function(){var t,e;beforeEach(function(){t=$('<div class="stick-at-top-when-scrolling"></div>'),e=$("<div>").append(t),$("body").append(e)}),afterEach(function(){e.remove()}),it("should add fixed class on stick",function(){expect(!t.hasClass("content-fixed")).toBe(!0),GOVUK.stickAtTopWhenScrolling.stick(t),expect(t.hasClass("content-fixed")).toBe(!0)}),it("should remove fixed class on release",function(){t.addClass("content-fixed"),GOVUK.stickAtTopWhenScrolling.release(t),expect(!t.hasClass("content-fixed")).toBe(!0)}),it("should insert shim when sticking content",function(){expect($(".shim").length).toBe(0),GOVUK.stickAtTopWhenScrolling.stick(t),expect($(".shim").length).toBe(1)}),it("should insert shim with minimum height",function(){GOVUK.stickAtTopWhenScrolling.stick(t),expect($(".shim").height()).toBe(1)})});