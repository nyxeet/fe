
var devConfig = require("C:\\Users\\Дмитрий\\Desktop\\unicorn-proj-be\\tga_uuappdev_repo8436-5543-1\\uu_test_maing01-hi\\env\\development.json").uu5Environment;
var config = require("C:\\Users\\Дмитрий\\Desktop\\unicorn-proj-be\\tga_uuappdev_repo8436-5543-1\\uu_test_maing01-hi\\env\\production.json").uu5Environment || {};
if (devConfig) for (var k in devConfig) config[k] = devConfig[k];
window.UU5 = { Environment: config };
