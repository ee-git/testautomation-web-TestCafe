import { Selector, ClientFunction } from 'testcafe';
import { validUsers, invalidEmails, invalidPasswords } from './data/testUsers';

fixture('Automate Login').page('../index.html');

const username = Selector('#email');
const password = Selector('#password');
const loginButton = Selector('input#login');
const userIcon = Selector('#user');

// Validate if the header text is visible
test('Validate header is visible', async (t) => {
  await t.expect(Selector('h1').innerText).eql("Automation doesn't stop at testing, it's just a beginning!");
});

// Validate if enter is used for log in
const pressEnterKey = ClientFunction(() => {
  const event = new KeyboardEvent('keydown', { key: 'Enter' });
  document.dispatchEvent(event);
});

for (const validUser of validUsers) {
  test(`Login with valid credential using Enter key: '${validUser.email}' and '${validUser.password}'`, async (t) => {
    // Input username and password
    await t
      .typeText(username, validUser.email)
      .typeText(password, validUser.password);

    // Press Enter key without clicking on login button
    await pressEnterKey();

    // Check if user is not logged in
    await t.expect(userIcon.visible).notOk();
  });
}

// Validate login with valid credentials
for (const validUser of validUsers) {
  test(`Login with valid credential: '${validUser.email}' and '${validUser.password}'`, async (t) => {
    // Login with valid credentials
    await t
      .typeText(username, validUser.email)
      .typeText(password, validUser.password)
      .click(loginButton)

      // Check if user logged in
      .expect(userIcon.visible).ok()

      // Execute logout
      .click(userIcon)
      .click(Selector('#logout'))

      // Validate if logout is successful by checking if login form is visible
      .expect(loginButton.visible).ok();
  });
}

// Validate login with invalid credentials
for (const invalidEmail of invalidEmails) {
  test(`Login with invalid email: ${invalidEmail.email}`, async (t) => {
    // Login with invalid email
    await t
      .typeText(username, invalidEmail.email)
      .typeText(password, validUsers[0].password)
      .click(loginButton)

      // Check if login form is visible
      .expect(loginButton.visible).ok();
  });
}

// Validate login with invalid credentials
for (const invalidPassword of invalidPasswords) {
  test(`Login with invalid password: ${invalidPassword.password}`, async (t) => {
    // Login with invalid password
    await t
      .typeText(username, validUsers[0].email)
      .typeText(password, invalidPassword.password)
      .click('#login')

      // Check if login form is visible
      .expect(loginButton.visible).ok();
  });
}
