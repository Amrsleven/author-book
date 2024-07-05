export class ErrorClass {
    constructor(message, statusCode, stack) {
      this.message = message;
      this.statusCode = statusCode;
      this.stack = stack;
    }
  }
  