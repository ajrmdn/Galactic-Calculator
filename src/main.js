import { PlanetAge } from './sample-class.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function () {

 $('#galacticYears').submit(function (event) {
   event.preventDefault();
   const userAge = $('#ageInput').val();
   const


   const yearsToLive = ;
   const deathAge = new DoomsDay(yearsToLive);

   $('.output').text(deathAge.returnYearsLeft());
 });
});
