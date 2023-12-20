import { Selector } from 'testcafe';
// import users from '../js/users';

fixture('Automate Login').page('../index.html');

/* test('Login with valid username and password', async (t) => {
  await t
    .typeText(Selector('#email'), 'admin@admin.com')
    .typeText(Selector('#password'), '2020')
    .click('#login')
    .expect(Selector('#content').exists)
    .ok()
    .click(Selector('#user'))
    .click(Selector('#logout'))
    await t.wait(2000)
    .expect(Selector('#login').visible)
    .ok();
}); */

const usernameSelector = Selector('#email');
const passwordSelector = Selector('#password');

const users = [
  { email: 'admin@admin.com', password: '2020' },
  { email: 'biancunha@gmail.com', password: '123456' },
  { email: 'growdev@growdev.com.br', password: 'growdev123' },
];

for (const user of users) {
  test(`Login with valid ${user.email}`, async (t) => {
    await t
      .typeText(usernameSelector, user.email)
      .typeText(passwordSelector, user.password)
      .click('#login')
      .expect(Selector('#content').exists)
      .ok();
  });
}
