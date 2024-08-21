// Use ES module syntax in event.js

// Import necessary functions from rxjs and rxjs/operators
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Import logValues from your logger
import { logValues } from '../rxcommon/logger.js';

// Create an observable
let users = of(3, 2, 1);

// Pipe the observable through mergeMap and ajax call
let result = users.pipe(
    mergeMap((user) => ajax.getJSON(`https://reqres.in/api/users/${user}`))
);

// Subscribe to the result and log the values
result.subscribe(
    resp => logValues(JSON.stringify(resp.data)),
    err => console.error(JSON.stringify(err))
);
