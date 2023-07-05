const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  console.log(err);

  if (err.code === 11000)
    err.message = `This ${Object.keys(err.keyValue)[0]} already exists`;
  res.status(status);
  res.send({
    error: true,
    status,
    message: err.message || "Internal Server error",
  });
};
module.exports = errorHandler;
