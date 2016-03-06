/*
Usually when you buy something, you're asked whether your credit card number,
phone number or answer to your most secret question is still correct. However,
since someone could look over your shoulder, you don't want that shown on your
screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four
characters into '#'. */


function maskify(cc) {
  if (cc.length >= 4) {
  var maskedString = Array(cc.length - 3).join("#");
  } else {
  var maskedString = "";
  }

  maskedString += cc.slice(-4);
  return maskedString;
}

// alternatively:

function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}
