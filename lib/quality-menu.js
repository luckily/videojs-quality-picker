const VjsMenu = videojs.getComponent('Menu');

class QualityMenu extends VjsMenu {

  addItem(component) {
    super.addItem(component);

    let switchHanlder = () => {
      let children = this.children();

      for (let i=0; i < children.length; i++) {
        let child = children[i];
        if (component !== child) {
          child.selected(false);
        }
      }
    };

    component.on('click', switchHanlder);
    component.on('tap', switchHanlder);
  }

}

export default QualityMenu;
