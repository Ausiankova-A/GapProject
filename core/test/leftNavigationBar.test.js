// const { expect } = require("chai");
// const { PageFactory } = require("../app/pageobjects/pageFactory");

// const pageFactory = new PageFactory();

// describe('Testing Left Navigation Bar for "Oz" website', () => {
//   const testData = [
//     { number: "1", linkText: "Акции и скидки" },
//     { number: "2", linkText: "Подарки для каждого" },
//     { number: "3", linkText: "Дом, сад, зоотовары" },
//     { number: "4", linkText: "Книги" },
//     { number: "5", linkText: "Косметика, парфюмерия" },
//     { number: "6", linkText: "Развлечения, творчество" },
//     { number: "7", linkText: "Детям и мамам" },
//     { number: "8", linkText: "Сувениры, галантерея" },
//     { number: "9", linkText: "Здоровье, медтехника" },
//     { number: "10", linkText: "Канцтовары, учёба" },
//     { number: "11", linkText: "Продукты, деликатесы" },
//     { number: "12", linkText: "Туризм, отдых, спорт" },
//     { number: "13", linkText: "Техника, электроника" },
//     { number: "14", linkText: "Магазины OZ" },
//   ];

//   testData.forEach((data) => {
//     it(`Check names of left navigation menu links - ${data.number}`, async () => {
//       await pageFactory.mainPage.navigate("https://oz.by/");
//     //   const navLinks = await pageFactory.leftNavBar.getText("navigationLinks");
//       const navLinks = await pageFactory.leftNavBar.getRole("navigationLinks");
//       console.log(navLinks);
//     //   console.log(navLinks[data.number-1]);
//       expect(navLinks).to.equal(data.linkText);
//     });
//   });
// });
