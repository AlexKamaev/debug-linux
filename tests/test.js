fixture `fixture`
    .page `http://example.com`;

test('test', async t => {
   await t.click('h1');
});
