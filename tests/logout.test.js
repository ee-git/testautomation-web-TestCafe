import { Selector } from 'testcafe';

fixture('Automate Logout').page('../index.html');

const username = Selector('#email');
const password = Selector('#password');
const loginButton = Selector('input#login');
const userIcon = Selector('#user');
const logoutButton = Selector('#logout');

test('Logout with valid username and password', async (t) => {
  await t
    // Login with valid credentials
    .typeText(username, 'admin@admin.com')
    .typeText(password, '2020')
    .click(loginButton)

    // Check if user logged in
    .expect(userIcon.visible).ok()

    // Execute logout
    .click(userIcon)
    .click(logoutButton)

    // Validate if logout is successful
    .expect(loginButton.visible).ok();
});
