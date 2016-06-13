#!/usr/bin/env node

'use strict';

try{
    var gfswatcher = require('gfswatcher');
    gfswatcher.watch();
} catch (e) {
    process.stdout.write(e.message+"\n");
}
