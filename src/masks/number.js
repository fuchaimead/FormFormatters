const NumberMask = {
  mask(value) {
    return(value.toString().replace(/[^0-9,.]+/g, ""));
  }
};

module.exports = NumberMask;
