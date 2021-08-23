var shell = require('shelljs');

shell.cd('~/Library/Android/sdk');
shell.exec('emulator/emulator -avd Nexus_S_API_28 -no-window');