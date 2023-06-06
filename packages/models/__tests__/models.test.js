import models from '../src/models.js';
import { strict as assert } from 'assert';

assert.strictEqual(models(), 'Hello from models');
console.info('models tests passed');
