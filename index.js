global.request = require('request');
global.CONFIG = require('./config');
global.DICTIONARY = require('./helper/dictionary');

global.BOT = new (require('./bot/telegram'))();
global.SERVER = new (require('./serverHandler/index'))();

(require('mongoose')).connect('mongodb://localhost/db');

require('./service/eventService');
require('./helper/array');