import EBGraphVis from '@/src/EBGraphVis';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import * as VisNetwork from 'vis-network/standalone';
import VisNetworkWrapper from '@/src/VisNetworkWrapper';
import { SYMBOLS as BasicSYMBOLS } from '@/src/types';
import { SYMBOLS } from '@/src/types';
import Style from '@/src/EBAttribute/Style';
import styles from './index.scss';
import PostGraphModel from '@/src/data-binding/Model/PostGraph';
import ClickHandler from './ClickHandler';

@injectable()
export default class GraphVis extends EBGraphVis {
  nodes: VisNetwork.DataSet<VisNetwork.Node>;
  edges: VisNetwork.DataSet<VisNetwork.Edge>;
  network: VisNetworkWrapper;

  constructor (
    @inject(SYMBOLS.PostGraph) postGraph: PostGraphModel,
  ) {
    super({
      attributes: [
        new Style({ styles: styles.toString()}),
      ],
    });
    this.nodes = new VisNetwork.DataSet(
      Array.from(postGraph.data.nodes.values()).map((v) => {
        return { id: v.data.id, label: v.data.title };
      }),
    );
    this.edges = new VisNetwork.DataSet(
      Array.from(postGraph.data.edges.values()).map((v) => {
        return { id: v.data.id, from: v.data.fromId, to: v.data.toId, arrows: { to: { enabled: true, type: 'arrow' } } };
      }),
    );
    this.network = new VisNetworkWrapper({
      container: this.rootElement,
      data: {
        nodes: this.nodes,
        edges: this.edges,
      },
      attributes: [
        new ClickHandler(),
      ],
    });
  }
}

customElements.define('app-graph-vis', GraphVis);
