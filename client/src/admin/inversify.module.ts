import { AsyncContainerModule, interfaces } from 'inversify';
import { SYMBOLS } from './types';
import { getAllNodeSummary } from '../api/post';
import Node from '@/src/data-binding/Model/PostGraph/Node/inversified';
import { ConstructorParam as PostNodeConstructorParam } from '@/src/data-binding/Model/PostGraph/Node';
import PostGraph from '../data-binding/Model/PostGraph/inversified';
import { ParameterizableNewable } from '../inversify';
import EBAdmin from './EBAdmin/inversified';
import EBGraphVis from './EBAdmin/GraphVis';
import PostGraphAppendNodeNotifier from '@/src/data-binding/ModelNotifier/PostGraph/AppendNode';
import PostGraphAppendNodeObserver from '@/src/data-binding/IObserver/EBGraphVis/AppendNode/inversified';
import PostGraphDeleteNodeNotifier from '@/src/data-binding/ModelNotifier/PostGraph/DeleteNode';
import PostGraphDeleteNodeObserver from '@/src/data-binding/IObserver/EBGraphVis/DeleteNode/inversified';
import NewDialogOkTask from '@/src/admin/EBAdmin/EBNewDialogPopup/EBNewDialog/Handler/OkTask';
import NewDialogOkDrawNode from './EBAdmin/EBNewDialogPopup/EBNewDialog/Handler/OkTask/DrawNode';
import NewDialogOkHideNode from './EBAdmin/EBNewDialogPopup/EBNewDialog/Handler/OkTask/HideNode';
import NewDialogOkHandler from './EBAdmin/EBNewDialogPopup/EBNewDialog/Handler/ok';
import NewDialogCloseHandler from './EBAdmin/EBNewDialogPopup/EBNewDialog/Handler/close';
import EBNewDialog from './EBAdmin/EBNewDialogPopup/EBNewDialog';
import EBNewDialogPopup from './EBAdmin/EBNewDialogPopup';
import ContextMenuNewSelection from './EBAdmin/GraphVis/ContextMenuBody/New';
import ContextMenuPopup from '@/src/admin/EBAdmin/ContextMenuPopup';
import ContextMenuHandler from './EBAdmin/GraphVis/Handler/ContextMenu';
import EBNewDialogBody from './EBAdmin/EBNewDialogPopup/EBNewDialog/EBNewDialogBody';
import NewNode from './data-binding/Model/NewNode';
import NewNodeInput from './EBAdmin/EBNewDialogPopup/EBNewDialog/EBNewDialogBody/Input';
import NewNodeInputHandler from './EBAdmin/EBNewDialogPopup/EBNewDialog/EBNewDialogBody/Input/Handler';
// import NodeContextMenuPopup from './EBAdmin/GraphVis/NodeContextMenuPopup';
import NodeContextMenuDeleteSelection from './EBAdmin/GraphVis/NodeContextMenuBody/Delete';
import NodeContextMenuSelectedId from '@/src/data-binding/Model/NodeContextMenuSelectedId';
import EBEditorPopup from './EBAdmin/EBEditorPopup';
import EditingPostId from './data-binding/Model/EditingPostId';
import EditingPostIdNotifier from './data-binding/ModelNotifier/EditingPostId';
import EditingPostIdObserver from './data-binding/Observer/EditingPostId';
import EditingPost from './data-binding/Model/EditingPost';
import EditingPostNotifier from './data-binding/ModelNotifier/EditingPost';
import EditingPostObserver from './data-binding/Observer/EditingPost'
import EBEditor from './EBAdmin/EBEditorPopup/EBEditorPopupBody/Editor';
import AddPostEdgeNotifier from './data-binding/ModelNotifier/AddPostEdge';
import AddPostEdgeObserver from './data-binding/Observer/AddPostEdge';
// import EdgeContextMenuPopup from './EBAdmin/GraphVis/EdgeContextMenuPopup';
import DeletePostEdgeNotifier from './data-binding/ModelNotifier/DeletePostEdge';
import DeletePostEdgeObserver from './data-binding/Observer/DeletePostEdge';
import AddPostEdgeDrawNode from './EBAdmin/GraphVis/visNetworkOptions/manipulation/addEdge/Task/DrawNode';
import EdgeContextMenuSelectedId from '@/src/data-binding/Model/EdgeContextMenuSelectedId';
import AddPostEdgeTask from './EBAdmin/GraphVis/visNetworkOptions/manipulation/addEdge/Task';
import GraphVisContextMenuBody from '@/src/admin/EBAdmin/GraphVis/ContextMenuBody';
import GraphVisNodeContextMenuBody from './EBAdmin/GraphVis/NodeContextMenuBody';
import GraphVisEdgeContextMenuBody from './EBAdmin/GraphVis/EdgeContextMenuBody';
import EdgeContextMenuDeleteSelection from './EBAdmin/GraphVis/EdgeContextMenuBody/Delete';
import ContextMenuEnterEditEdgeModeSelection from './EBAdmin/GraphVis/ContextMenuBody/EnterEditEdgeMode';
import EBEditorPopupBody from './EBAdmin/EBEditorPopup/EBEditorPopupBody/inversified';
import PostGraphChangeNodeTitleObserver from '../data-binding/IObserver/EBGraphVis/ChangeNodeTitle/inversified';
import PostGraphChangeNodeTitleNotifier from '../data-binding/ModelNotifier/PostGraph/ChangeNodeTitle';

const module = new AsyncContainerModule(
  async (
    bind: interfaces.Bind,
  ) => {
    bind<EBAdmin>(SYMBOLS.EBAdmin).to(EBAdmin);
    bind<EBGraphVis>(SYMBOLS.EBGraphVis).to(EBGraphVis).inSingletonScope();
    bind<PostGraphAppendNodeNotifier>(SYMBOLS.PostGraphAppendNodeNotifier).to(PostGraphAppendNodeNotifier).inSingletonScope();
    bind<PostGraphAppendNodeObserver>(SYMBOLS.PostGraphAppendNodeObserver).to(PostGraphAppendNodeObserver).inSingletonScope();
    bind<PostGraphDeleteNodeNotifier>(SYMBOLS.PostGraphDeleteNodeNotifier).to(PostGraphDeleteNodeNotifier).inSingletonScope();
    bind<PostGraphDeleteNodeObserver>(SYMBOLS.PostGraphDeleteNodeObserver).to(PostGraphDeleteNodeObserver).inSingletonScope();
    bind<NewDialogOkTask>(SYMBOLS.NewDialogOkTask).to(NewDialogOkTask);
    bind<NewDialogOkDrawNode>(SYMBOLS.NewDialogOkDrawNode).to(NewDialogOkDrawNode);
    // bind<NewDialogOkHideNode>(SYMBOLS.NewDialogOkHideNode).to(NewDialogOkHideNode);
    bind<ParameterizableNewable<NewDialogOkHideNode, ConstructorParameters<typeof NewDialogOkHideNode>>>(SYMBOLS.NewDialogOkHideNode).toConstructor(NewDialogOkHideNode);
    bind<NewDialogOkHandler>(SYMBOLS.NewDialogOkHandler).to(NewDialogOkHandler);
    bind<NewDialogCloseHandler>(SYMBOLS.NewDialogCloseHandler).to(NewDialogCloseHandler);
    bind<EBNewDialog>(SYMBOLS.EBNewDialog).to(EBNewDialog);
    bind<EBNewDialogBody>(SYMBOLS.EBNewDialogBody).to(EBNewDialogBody);
    bind<EBNewDialogPopup>(SYMBOLS.EBNewDialogPopup).to(EBNewDialogPopup).inSingletonScope();
    bind<ContextMenuNewSelection>(SYMBOLS.ContextMenuNewSelection).to(ContextMenuNewSelection);
    bind<ContextMenuPopup>(SYMBOLS.ContextMenuPopup).to(ContextMenuPopup).inSingletonScope();
    bind<ContextMenuHandler>(SYMBOLS.ContextMenuHandler).to(ContextMenuHandler);
    bind<NewNode>(SYMBOLS.NewNodeModel).to(NewNode).inSingletonScope();
    bind<NewNodeInput>(SYMBOLS.NewNodeInput).to(NewNodeInput).inSingletonScope();
    bind<NewNodeInputHandler>(SYMBOLS.NewNodeInputHandler).to(NewNodeInputHandler).inSingletonScope();
    // bind<NodeContextMenuPopup>(SYMBOLS.NodeContextMenuPopup).to(NodeContextMenuPopup).inSingletonScope();
    bind<NodeContextMenuDeleteSelection>(SYMBOLS.NodeContextMenuDeleteSelection).to(NodeContextMenuDeleteSelection).inSingletonScope();
    // bind<NodeContextMenuHandler>(SYMBOLS.NodeContextMenuHandler).to(NodeContextMenuHandler);
    bind<NodeContextMenuSelectedId>(SYMBOLS.NodeContextMenuSelectedId).to(NodeContextMenuSelectedId).inSingletonScope();
    bind<EBEditorPopup>(SYMBOLS.EBEditorPopup).to(EBEditorPopup).inSingletonScope();
    bind<EBEditorPopupBody>(SYMBOLS.EBEditorPopupBody).to(EBEditorPopupBody).inSingletonScope();
    bind<EditingPostId>(SYMBOLS.EditingPostId).to(EditingPostId).inSingletonScope();
    bind<EditingPostIdNotifier>(SYMBOLS.EditingPostIdNotifier).to(EditingPostIdNotifier).inSingletonScope();
    bind<EditingPostIdObserver>(SYMBOLS.EditingPostIdObserver).to(EditingPostIdObserver).inSingletonScope();
    bind<EditingPost>(SYMBOLS.EditingPost).to(EditingPost).inSingletonScope();
    bind<EBEditor>(SYMBOLS.EBEditor).to(EBEditor).inSingletonScope();
    bind<EditingPostNotifier>(SYMBOLS.EditingPostNotifier).to(EditingPostNotifier).inSingletonScope();
    bind<EditingPostObserver>(SYMBOLS.EditingPostObserver).to(EditingPostObserver).inSingletonScope();
    bind<AddPostEdgeNotifier>(SYMBOLS.AddPostEdgeNotifier).to(AddPostEdgeNotifier).inSingletonScope();
    bind<AddPostEdgeObserver>(SYMBOLS.AddPostEdgeObserver).to(AddPostEdgeObserver).inSingletonScope();
    // bind<EdgeContextMenuPopup>(SYMBOLS.EdgeContextMenuPopup).to(EdgeContextMenuPopup).inSingletonScope();
    bind<DeletePostEdgeNotifier>(SYMBOLS.DeletePostEdgeNotifier).to(DeletePostEdgeNotifier).inSingletonScope();
    bind<DeletePostEdgeObserver>(SYMBOLS.DeletePostEdgeObserver).to(DeletePostEdgeObserver).inSingletonScope();
    bind<AddPostEdgeDrawNode>(SYMBOLS.AddPostEdgeDrawNode).to(AddPostEdgeDrawNode);
    bind<EdgeContextMenuSelectedId>(SYMBOLS.EdgeContextMenuSelectedId).to(EdgeContextMenuSelectedId).inSingletonScope();
    bind<AddPostEdgeTask>(SYMBOLS.AddPostEdgeTask).to(AddPostEdgeTask).inSingletonScope();
    bind<GraphVisContextMenuBody>(SYMBOLS.GraphVisContextMenuBody).to(GraphVisContextMenuBody);
    bind<GraphVisNodeContextMenuBody>(SYMBOLS.GraphVisNodeContextMenuBody).to(GraphVisNodeContextMenuBody);
    bind<GraphVisEdgeContextMenuBody>(SYMBOLS.GraphVisEdgeContextMenuBody).to(GraphVisEdgeContextMenuBody);
    bind<EdgeContextMenuDeleteSelection>(SYMBOLS.EdgeContextMenuDeleteSelection).to(EdgeContextMenuDeleteSelection).inSingletonScope();
    bind<ContextMenuEnterEditEdgeModeSelection>(SYMBOLS.ContextMenuEnterEditEdgeModeSelection).to(ContextMenuEnterEditEdgeModeSelection).inSingletonScope();
    bind<PostGraphChangeNodeTitleObserver>(SYMBOLS.PostGraphChangeNodeTitleObserver).to(PostGraphChangeNodeTitleObserver).inSingletonScope();
    bind<PostGraphChangeNodeTitleNotifier>(SYMBOLS.PostGraphChangeNodeTitleNotifier).to(PostGraphChangeNodeTitleNotifier).inSingletonScope();
  }
);

export default module;
