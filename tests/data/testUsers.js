// Users with valid email and valid password
export const validUsers = [
  { email: 'admin@admin.com', password: '2020' },
  { email: 'biancunha@gmail.com', password: '123456' },
  { email: 'growdev@growdev.com.br', password: 'growdev123' },
];

// Users with valid email and invalid password
export const invalidPasswords = [
  { email: 'admin@admin.com', password: '0000' },
  { email: 'admin@admin.com', password: '1' },
  { email: 'admin@admin.com', password: ' ' },
  { email: 'admin@admin.com', password: '@!#$%^&' },
];

// Users with invalid email and valid password
export const invalidEmails = [
  { email: 'admin.com', password: '2020' },
  { email: 'admin@admin', password: '2020' },
  { email: ' ', password: '2020' },
  { email: '@!#$%^&', password: '2020' },
];
