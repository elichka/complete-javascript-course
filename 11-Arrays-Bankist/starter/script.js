'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${i} ${type}</div>
    
          <div class="movements__value">${mov}€</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${outcomes} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      //console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//const user = 'Elmira Hajiba Alimova';

const createUserName = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const updateUI = function (acc) {
  //display balance
  calcDisplayBalance(acc);
  //display summary
  calcDisplaySummary(acc);
  //display movement
  displayMovements(acc.movements);
};

createUserName(accounts);
//console.log('Accounts Array: ', accounts);
// event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();
  console.log('Login');
  console.log('Accounts Array: ', accounts);
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGGED IN');
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;

    containerApp.style.opacity = 100;
    updateUI(currentAccount);

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  console.log(amount, receiverAccount);
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    console.log(
      `receiverAccount?.username value is ${receiverAccount.username} and currentAccount.username is ${currentAccount.username}`
    );
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    console.log(
      `Withdrawing from ${currentAccount.owner} amount of ${amount} and transferring to ${receiverAccount.owner}`
    );
    updateUI(currentAccount);
  } else {
    console.log(`User not found or transfer is not possible. `);
  }
});

// REQUEST LOAN
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov > amount / 10)) {
    console.log(Number(inputLoanAmount.value));
    // add movement to current account = to amount
    currentAccount.movements.push(Number(inputLoanAmount.value));
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});
// SORT
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('SORTING');
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

//CLOSE ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault(e);

  if (
    currentAccount?.username === inputCloseUsername.value &&
    currentAccount?.pin === Number(inputClosePin.value)
  ) {
    console.log(
      `Current account ok to delete:  ${
        currentAccount?.username === inputCloseUsername.value &&
        currentAccount?.pin === Number(inputClosePin.value)
      }`
    );
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //delete account
    accounts.splice(index, 1);
    console.log(accounts);
    inputCloseUsername.value = inputClosePin.value = '';

    // Hide UI
    containerApp.style.opacity = 0;
  } else {
    console.log(
      `Current account IS NOT ok to delete:  ${
        currentAccount?.username === inputCloseUsername.value &&
        currentAccount?.pin === Number(inputClosePin.value)
      }`
    );
  }
});

// LECTURE 174. More Ways of Creating and Filling Arrays
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  ).map(el => Number(el.textContent.replace('€', '')));

  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2);
});
