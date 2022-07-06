// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import Mirador from "mirador/dist/es/src/index.js"
import miradorImageToolsPlugin from "mirador-image-tools/es/plugins/miradorImageToolsPlugin.js";


Rails.start()
Turbolinks.start()
ActiveStorage.start()

window.Mirador = Mirador;
window.miradorImageToolsPlugin = miradorImageToolsPlugin;
