const VjsMenuItem = videojs.getComponent('MenuItem');

class QualityMenuItem extends VjsMenuItem {
    handleClick(event) {
        super.handleClick(event);

        this.options_.qualitySwitchCallback(this.options_.id, this.options_.trackType);
    }
}

export default QualityMenuItem;
