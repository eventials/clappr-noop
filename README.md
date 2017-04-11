```html
<head>
  <script type="text/javascript" src="http://cdn.clappr.io/latest/clappr.min.js"></script>
  <script type="text/javascript" src="dist/clappr-noop-plugin.js"></script>
</head>
```

```javascript
var player = new Clappr.Player({
  source: "http://your.video/here.m3u8",
  playbackNotSupportedMessage: "O seu navegador não pode reproduzir este vídeo. Instale o flashPlayer.<a href='#' target='_blank'>flashPlayer</a>",
  plugins: {
    'core': [NoOp],
  }
});
```
