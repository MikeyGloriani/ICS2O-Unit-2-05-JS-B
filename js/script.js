// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates your salary
 */
 
function calculate() {
  // input
  const hours = parseInt(document.getElementById("hours-worked").value)
  const money = parseInt(document.getElementById("hourly-rate").value)

  // process
  const payment = (hours * money) * (1.00-0.18)
  const taxes = (hours * money) * 0.18

  // output
  document.getElementById('pay').innerHTML = `Your pay will be: $ ${payment.toFixed(2)}`
  document.getElementById('taxes').innerHTML = `The Government will take: $ ${taxes.toFixed(2)}`
}