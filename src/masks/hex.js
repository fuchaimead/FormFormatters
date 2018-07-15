const HexMask = {
  mask(value) {
    return(value.toUpperCase().replace(/[^#A-F0-9]+/g, ""));
  }
};

module.exports = HexMask;
