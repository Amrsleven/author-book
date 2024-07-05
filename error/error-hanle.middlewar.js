import { ErrorClass } from "./error-class.js";

export const errorHandler = (API) => {
  return (req, res, next) => {
    API(req, res, next).catch((err) => {
      console.log("Error in async handler scope", err);
      next(new ErrorClass(err.message, 500, err.stack));
    });
  };
};

export const globalResponse = (err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status(err.status || 500).json({
      message: "Fail response",
      err_msg: err.message,
      err_stack: err.stack
    });
  }
};
