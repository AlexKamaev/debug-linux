fixture `fixture`
    .page `http://example.com`;

test('test 1', async t => {
   await t.click('h1');
});

test('test 2', async t => {
   await t.click('h1');
});
