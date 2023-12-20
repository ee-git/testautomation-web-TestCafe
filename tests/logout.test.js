import { Selector } from 'testcafe';

fixture('Automate Login').page('http://127.0.0.1:5500/');

test('Login with valid username and password', async (t) => {
  await t
    .typeText(Selector('#email'), 'admin@admin.com')
    .typeText(Selector('#password'), '2020')
    .click('#login');

  await t.eval(() => {
    document.querySelector('.content').style.display = 'flex';
  });

  const contentDisplay = await Selector('.content').getStyleProperty('display');

  await t.expect(contentDisplay).eql('flex');
});
