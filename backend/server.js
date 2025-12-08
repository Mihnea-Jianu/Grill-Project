const express = require('express');
const app = epxress();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users');

app.listen(3000, () => console.log('hello'));