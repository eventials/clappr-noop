import { Playback, Styler } from "Clappr"
import pluginStyle from "./public/style.scss"

export default class NoOp extends Playback {
  get name() { return "no-op" }

  render() {
    const style = Styler.getStyleFor(pluginStyle)
    const playbackNotSupported = this.options.playbackNotSupportedMessage || this.i18n.t("playback_not_supported")

    this.$el.html(`<div data-no-op><p data-no-op-msg>${playbackNotSupported}</p></div>`)
    this.$el.append(style)

    return this
  }

}

NoOp.canPlay = function(source) {
  return true;
}
