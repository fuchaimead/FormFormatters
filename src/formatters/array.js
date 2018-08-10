const ArrayFormatter = {
  format(value) {
    let formatted = value;
    let parsed = value;
    let errors = [];

    return({
      valid: true,
      parsed,
      formatted,
      errors
    });
  }
};

module.exports = ArrayFormatter;
