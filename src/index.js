import readlineSync from 'readline-sync';

function greet() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Welcome, ${userName}!`);
  return userName;
}

export default greet;
