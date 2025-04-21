// src/app/app.ts

import * as angular from 'angular';
import { controller } from './controller';
import './styles.css';


const app = angular.module('myApp', []);

app.controller('MyController', controller);
