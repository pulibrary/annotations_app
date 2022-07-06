window.onload = function(){
  const config = {
    id: 'viewer',
    windows: [{ manifestId: 'https://figgy.princeton.edu/concern/scanned_resources/802207a4-4185-4e3c-8cc2-f882965a009a/manifest',
  }],
  theme: { palette: { primary: { main: '#1967d2', }, }, },
};

Mirador.viewer(config, [
  ...miradorImageToolsPlugin,
]);
}
