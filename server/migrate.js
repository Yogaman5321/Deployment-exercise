import '@dotenvx/dotenvx/config';
import migrations from './config/migrations.js';
migrations.runAsCLI()