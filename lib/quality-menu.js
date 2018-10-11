const VjsMenu = videojs.getComponent('Menu');

class QualityMenu extends VjsMenu {

  addItem(component) {
    super.addItem(component);

    let switchHandler = () => {
      let children = this.children();

      for (let i=0; i < children.length; i++) {
        let child = children[i];
        if (component !== child) {
          child.selected(false);
        }
      }
    };

    component.on('click', switchHandler);
    component.on('tap', switchHandler);
  }

}

export default QualityMenu;
