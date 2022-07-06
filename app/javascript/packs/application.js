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
import annotationPlugin from "mirador-annotations/es";
import LocalStorageAdapter from 'mirador-annotations/es/LocalStorageAdapter.js';
import SimpleAnnotationServerV2Adapter from 'mirador-annotations/es/SimpleAnnotationServerV2Adapter.js';

Rails.start()
Turbolinks.start()
ActiveStorage.start()

window.Mirador = Mirador;
window.miradorImageToolsPlugin = miradorImageToolsPlugin;
window.annotationPlugin = annotationPlugin;
window.LocalStorageAdapter = LocalStorageAdapter;
window.SimpleAnnotationServerV2Adapter = SimpleAnnotationServerV2Adapter;
