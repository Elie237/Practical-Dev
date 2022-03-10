// //Question 1:
// 'use strict';
// // fill in the blanks to pass the assertions
// const user = {
//   userName: 'flount',
//   password: '1234safe',
// };
// // --- begin blanks ---
// const key = 'password';
// const newValue = '12345safer';
// user['password'] =newValue;
// // --- end blanks ---
// const expectedUser = {
//   userName: 'flount',
//   password: '12345safer',
// };
// console.assert(
//   deepCompare(user, expectedUser),
//   'the password is updated correctly'
// );
// // prettier-ignore
// function deepCompare(actual, expect) {
//   return actual === expect ||
//     Object.is(actual, expect) || (Object(actual) === actual && Object(expect)
//       === expect) && (Array.isArray(actual) && Array.isArray(expect) &&
//         actual.length === expect.length && expect.every((expect, index) =>
//           deepCompare(actual[index], expect)) || Object.keys(actual).length ===
//           Object.keys(expect).length && Object.keys(expect).every((key) =>
//             deepCompare(actual[key], expect[key])));
// }


console.assert(b === aReference, 'b references the array with numbers');





