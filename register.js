import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

register('./loader/sql-loader.js', pathToFileURL('./'));
