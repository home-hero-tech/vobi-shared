const fillProtobufferFromObject = (protobuf, object) => {
  Object.keys(object).forEach((key) => {
    const firstLetter = key.charAt(0).toUpperCase();
    const rest = key.slice(1);
    const setter = `set${firstLetter}${rest}`;
    protobuf[setter](object[key]);
  });

  return protobuf;
};

module.exports = {
  fillProtobufferFromObject,
};
