import EBElement, { ConstructorParam as ParentConstructorParam } from '@/src/EBElement';
import { injectable } from 'inversify';
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';

@injectable()
export default class Post extends EBElement {
  viewer: Viewer;

  constructor() {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.viewer = new Viewer({ el: this.rootElement });
  }

  initialRender (payload: ParentConstructorParam) {
    super.initialRender(payload);
  }
}

customElements.define('eb-app-post', Post);