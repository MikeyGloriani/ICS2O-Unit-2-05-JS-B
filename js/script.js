// Created by: Mikey Gloriani
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area of a triangle
 */
function calculate() {
  // input
  const base = parseInt(document.getElementById("base-of-triangle").value)
  const height = parseInt(document.getElementById("height-of-triangle").value)

  // process
  const area = (base * height) / 2

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
}
