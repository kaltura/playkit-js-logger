# PlayKit JS AVPLAY - [AVPLAY] Adapter for the [PlayKit JS Player] for samsung devices

[![Build Status](https://travis-ci.com/kaltura/playkit-js-avplay.svg?branch=master)](https://travis-ci.org/kaltura/playkit-js-avplay)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![](https://img.shields.io/npm/v/@playkit-js/playkit-js-avplay/latest.svg)](https://www.npmjs.com/package/@playkit-js/playkit-js-avplay)
[![](https://img.shields.io/npm/v/@playkit-js/playkit-js-avplay/canary.svg)](https://www.npmjs.com/package/@playkit-js/playkit-js-avplay/v/canary)

PlayKit JS AVPlay is written in [ECMAScript6], statically analysed using [Flow] and transpiled in ECMAScript5 using [Babel].

[flow]: https://flow.org/
[ecmascript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials
[babel]: https://babeljs.io

## Getting Started

### Prerequisites

The adapter requires [PlayKit JS Player] to be loaded first.

The adapter uses the [AVPlay] tizen library.

[playkit js player]: https://github.com/kaltura/playkit-js

### Installing

First, clone and run [yarn] to install dependencies:

[yarn]: https://yarnpkg.com/lang/en/

```
git clone https://github.com/kaltura/playkit-js-AVPlay.git
cd playkit-js-AVPlay
yarn install
```

### Building

Then, build the player

```javascript
yarn run build
```

### Embed the library in your test page

Finally, add the bundle as a script tag in your page, and initialize the player

```html
<script type="text/javascript" src="/PATH/TO/FILE/playkit.js"></script>
<script type="text/javascript" src="/PATH/TO/FILE/playkit-js-logger.js"></script>
<div id="player-placeholder"" style="height:360px; width:640px">
<script type="text/javascript">
  var playerContainer = document.querySelector("#player-placeholder");
  var config = {...};
  var player = playkit.core.loadPlayer(config);
  playerContainer.appendChild(player.getView());
  player.play();
</script>
```
## Running the tests

Tests can be run locally via [Karma], which will run on Chrome, Firefox and Safari

[karma]: https://karma-runner.github.io/1.0/index.html

```
yarn run test
```

You can test individual browsers:

```
yarn run test:chrome
yarn run test:firefox
yarn run test:safari
```

### And coding style tests

We use ESLint [recommended set](http://eslint.org/docs/rules/) with some additions for enforcing [Flow] types and other rules.

See [ESLint config](.eslintrc.json) for full configuration.

We also use [.editorconfig](.editorconfig) to maintain consistent coding styles and settings, please make sure you comply with the styling.

## Compatibility

target for IE11 on windows 7&8 to allow HLS (Live & Vod)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/kaltura/playkit-js-AVPlay/tags).

## License

This project is licensed under the AGPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details
