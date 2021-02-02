const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const SHA256 = require('crypto-js/sha256');
const bitcoinMessage = require('bitcoinjs-message');
const hex2ascii = require('hex2ascii');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT,
  express,
  morgan,
  bodyParser,
  SHA256,
  bitcoinMessage,
  hex2ascii
};