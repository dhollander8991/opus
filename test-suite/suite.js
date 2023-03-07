const utils = require("../global/utils.js");
const testcases = require("./testcases/testcase.js");


fixture(`Testing entities manager API`)

testcases.forEach((ele) => {
    test('Creating entity', async t => {
        const res = await utils.setEntity();
        await t.expect(res).ok(`Couldn't set entity on server - check log to see what went wrong`);
        ele = res.data.id;
    });

    test('Checking entity exists by id', async t => {
        const res = await utils.getEntityById(ele);
        await t.expect(res).ok(`Couldn't get entity from server - check log to see what went wrong`);
    });

    test('Checking Entity exists in all entities', async t => {
        const res = await utils.getEntityById();
        await t.expect(res.data.find((e) => e.id == ele)).ok(`Couldn't get entities from server - check log to see what went wrong`);
    });
})