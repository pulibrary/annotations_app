window.onload = function(){

  const config = {
    annotation: {
      adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
      exportLocalStorageAnnotations: true, // display annotation JSON export button
    },
    id: 'viewer',
    window: {
      defaultSideBarPanel: 'annotations',
      sideBarOpenByDefault: true,
    },
    windows: [{
      loadedManifest: 'https://figgy.princeton.edu/concern/scanned_resources/11d9dd2b-6b28-42cd-b628-734763667e25/manifest',
    }],
  };

  Mirador.viewer(config, [...annotationPlugin]);

  alert(canvasId);
}
