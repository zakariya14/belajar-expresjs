const log = (req, resp, next) => {
  console.log(new Date().toLocaleDateString(), "=>", req.method, req.originalUrl);
  next();
};

module.exports = log;
