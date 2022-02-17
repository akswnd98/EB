import { SYMBOLS } from '@/src/admin/types';
import Node from '@/src/data-binding/Model/PostGraph/Node';
import { injectable, inject } from 'inversify';
import ModelNotifier from '../..';
import PostGraph, { DataType } from '../../../Model/PostGraph';
import PostGraphDeleteNodeObserver from '@/src/data-binding/IObserver/EBGraphVis/DeleteNode/inversified';

@injectable()
export default class DeleteNode extends ModelNotifier<DataType> {
  constructor (
    @inject(SYMBOLS.PostGraph) postGraph: PostGraph,
    @inject(SYMBOLS.PostGraphDeleteNodeObserver) observer: PostGraphDeleteNodeObserver,
  ) {
    super({
      model: postGraph,
    });
    this.attachObserver(observer);
  }

  notify (event: number) {
    try {
      super.notify(event);
    } catch (e) {
      console.log('PostGraphAppendNotifier.notify failed');
      throw e;
    }
  }

  delete (id: number) {
    this.model.data.nodes.delete(id);
    this.notify(id);
  }
}