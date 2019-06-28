import { PlanetYears } from './sample-class.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

 $('#yearForm').submit(function (event) {
   event.preventDefault();
   const userAge = $('#ageInput').val();
 }
});
