const ph = require("../app/pageHolder");




before(async function() {
  await ph.initBrowser();
});
beforeEach(async function () {
 await ph.openPage();
});
  // afterEach(async function() {
  //   await ph.closePage();
  // });
  // after(async function() {
  //   await ph.closeBrowser();
  // });








// exports.mochaHooks = {
//   page:null,
//   before: async function() {
//     await ph.initBrowser();
//   },
//   beforeEach: async function() {
//    this.page = await ph.openPage();
//   },
// };


// console.log(page);