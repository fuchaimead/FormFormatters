const CurrencyMask = {
  mask(value) {
    return(value.replace(/[^0-9.,]/g, ""));
  }
};

module.exports = CurrencyMask;
