const { expect } = require('chai');
const { AxiosElements } = require('../../app/api/axiosWrapper');
const { use } = require('chai');
const chaiJsonSchemaAjv = require('chai-json-schema-ajv');
const responseBodySchema = require('../../app/api/responseSchema.js');
const chai = require('chai');

use(chaiJsonSchemaAjv);
chai.use(chaiJsonSchemaAjv, responseBodySchema);

describe('api testing of "Oz.by" website', () => {
    const axiosElements = new AxiosElements();
    it('check status code results of adding item to the cart _api', async () => {
        const url =
            'https://oz.by/goods/ajax/html_box.php?idGoods=10275829&type=html&sm=true&searchToken=57a9a1f9cd2ce56c9489c17696d68b96&secondGoodsFromSet=10354879';
        const response = await axiosElements.get(url);
        const responseStatus = await axiosElements.checkStatus(response, 200);
        expect(responseStatus).to.be.true;
    });
    it('check status code for opening map with shops on the item page _api', async () => {
        const url =
            'https://oz.by/goods/ajax/html_box.php?idGoods=101036204&type=html&sm=true&searchToken=&secondGoodsFromSet=101036207';
        const response = await axiosElements.get(url);
        const responseStatus = await axiosElements.checkStatus(response, 200);
        expect(responseStatus).to.be.true;
    });
    it('check status code for opening personal account _api', async () => {
        const url = 'https://oz.by/personal/';
        const response = await axiosElements.get(url);
        const responseStatus = await axiosElements.checkStatus(response, 200);
        expect(responseStatus).to.be.true;
    });
    it('should return a valid response body', async function () {
        const url =
            'https://oz.by/goods/ajax/html_box.php?idGoods=10506403&type=html&sm=true&searchToken=&secondGoodsFromSet=10967153';
        const response = await axiosElements.get(url);
        const responseBody = response.data;
        expect(responseBody).not.to.be.undefined;
        expect(responseBody).to.be.jsonSchema(responseBodySchema);
    });
});
