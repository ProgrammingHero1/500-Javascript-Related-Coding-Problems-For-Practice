// Problem 1: Friend class to store friend ID securely
class Friend {
  #ssn; // Private field to store friend's SSN securely

  constructor(name, ssn) {
    this.name = name; // Public field
    this.#ssn = ssn; // Private field
  }

  getSSN() {
    return this.#ssn; // Method to access private SSN
  }
}

const friend = new Friend("Alice", "123-45-6789");
console.log(friend.name); // Expected Output: Alice
console.log(friend.getSSN()); // Expected Output: 123-45-6789

// Problem 2: BankAccount class with private account number
class BankAccount {
  #accountNumber; // Private field

  constructor(accountNumber, balance) {
    this.#accountNumber = accountNumber; // Private
    this.balance = balance; // Public field
  }

  checkBalance() {
    return `Balance: $${this.balance}`;
  }
}

const account = new BankAccount("1234567890", 500);
console.log(account.checkBalance()); // Expected Output: Balance: $500

// Problem 3: Car class with private serial number
class Car {
  #serialNumber; // Private field

  constructor(serialNumber, model) {
    this.#serialNumber = serialNumber; // Private
    this.model = model; // Public field
  }

  getSerialNumber() {
    return this.#serialNumber; // Method to access private serial number
  }
}

const car = new Car("SN12345", "Toyota");
console.log(car.model); // Expected Output: Toyota
console.log(car.getSerialNumber()); // Expected Output: SN12345

// Problem 4: Student class with private ID
class Student {
  #id; // Private field

  constructor(id, name) {
    this.#id = id; // Private
    this.name = name; // Public field
  }

  getId() {
    return this.#id; // Method to access private ID
  }
}

const student = new Student("S123", "John");
console.log(student.name); // Expected Output: John
console.log(student.getId()); // Expected Output: S123

// Problem 5: Locker class with private password
class Locker {
  #password; // Private field

  constructor(password) {
    this.#password = password; // Private
  }

  unlock(inputPassword) {
    return inputPassword === this.#password ? "Unlocked" : "Incorrect password";
  }
}

const locker = new Locker("secret123");
console.log(locker.unlock("secret123")); // Expected Output: Unlocked

// Problem 6: EmailAccount class with private inbox
class EmailAccount {
  #inbox; // Private field

  constructor() {
    this.#inbox = ["Hello!", "Welcome to our service."]; // Private inbox array
  }

  readInbox() {
    return this.#inbox.join(", ");
  }
}

const email = new EmailAccount();
console.log(email.readInbox()); // Expected Output: Hello!, Welcome to our service.

// Problem 7: LibraryCard class with private card number
class LibraryCard {
  #cardNumber; // Private field

  constructor(cardNumber, name) {
    this.#cardNumber = cardNumber; // Private
    this.name = name; // Public field
  }

  getCardNumber() {
    return this.#cardNumber;
  }
}

const card = new LibraryCard("L123456", "Jane");
console.log(card.name); // Expected Output: Jane
console.log(card.getCardNumber()); // Expected Output: L123456

// Problem 8: Phone class with private IMEI
class Phone {
  #IMEI; // Private field

  constructor(IMEI, model) {
    this.#IMEI = IMEI; // Private
    this.model = model; // Public field
  }

  getIMEI() {
    return this.#IMEI;
  }
}

const phone = new Phone("IMEI123456789", "Samsung Galaxy");
console.log(phone.model); // Expected Output: Samsung Galaxy
console.log(phone.getIMEI()); // Expected Output: IMEI123456789

// Problem 9: Movie class with private rating
class Movie {
  #rating; // Private field

  constructor(title, rating) {
    this.title = title; // Public field
    this.#rating = rating; // Private field
  }

  getRating() {
    return this.#rating;
  }
}

const movie = new Movie("Inception", "9.5");
console.log(movie.title); // Expected Output: Inception
console.log(movie.getRating()); // Expected Output: 9.5

// Problem 10: School class with private student records
class School {
  #studentRecords; // Private field

  constructor() {
    this.#studentRecords = ["Alice", "Bob", "Charlie"]; // Private array
  }

  viewRecords() {
    return this.#studentRecords.join(", ");
  }
}

const school = new School();
console.log(school.viewRecords()); // Expected Output: Alice, Bob, Charlie
