const StringMask = {
  mask(value) {
    return(value.replace(/[^0-9.%]+/g, ""));
  }
};

module.exports = StringMask;
