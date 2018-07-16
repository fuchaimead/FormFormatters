const StringMask = {
  mask(value) {
    return(value.replace(/[^0-9()-\s]+/g, ""));
  }
};

module.exports = StringMask;
