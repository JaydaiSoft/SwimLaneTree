import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  DiagramComponent, NodeModel, ConnectorModel, PaletteModel,
  SnapSettingsModel, SnapConstraints, SymbolPaletteComponent, PointPortModel, PortVisibility,
  PortConstraints, ContextMenuSettingsModel, IDragEnterEventArgs, DiagramBeforeMenuOpenEventArgs,
  SwimLaneModel, Node,
  SymbolInfo,
  LaneModel,
  randomId,
  cloneObject, ShapeStyleModel,
  HeaderModel,
} from '@syncfusion/ej2-angular-diagrams';
import {BeforeOpenCloseMenuEventArgs, MenuEventArgs} from '@syncfusion/ej2-splitbuttons';

const pathData: string = 'M 120 24.9999 C 120 38.8072 109.642 50 96.8653 50 L 23.135' +
    ' 50 C 10.3578 50 0 38.8072 0 24.9999 L 0 24.9999 C' +
    '0 11.1928 10.3578 0 23.135 0 L 96.8653 0 C 109.642 0 120 11.1928 120 24.9999 Z';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'SwimLaneTree';
  @ViewChild('diagram') public diagram!: DiagramComponent;

  constructor() {}

  public port: PointPortModel[] = [
    {
      id: 'Port1',
      offset: {x: 0, y: 0.5},
      visibility: PortVisibility.Connect | PortVisibility.Hover,
      constraints: PortConstraints.Default | PortConstraints.Draw,
    },
    {
      id: 'Port2',
      offset: {x: 0.5, y: 0},
      visibility: PortVisibility.Connect | PortVisibility.Hover,
      constraints: PortConstraints.Default | PortConstraints.Draw,
    },
    {
      id: 'Port3',
      offset: {x: 1, y: 0.5},
      visibility: PortVisibility.Connect | PortVisibility.Hover,
      constraints: PortConstraints.Default | PortConstraints.Draw,
    },
    {
      id: 'Port4',
      offset: {x: 0.5, y: 1},
      visibility: PortVisibility.Connect | PortVisibility.Hover,
      constraints: PortConstraints.Default | PortConstraints.Draw,
    },
  ];

  // Initializes the nodes for the diagram.
  public nodes: NodeModel[] = [
    {
      id: 'swimlane',
      shape: {
        type: 'SwimLane',
        orientation: 'Horizontal',
        header: {
          annotation: {content: '', style: {fill: 'transparent'}},
          height: 0,
          style: {fontSize: 11},
        },
        lanes: [
          {
            id: 'stackCanvas1',
            header: {
              annotation: {content: 'Consumer'},
              width: 50,
              style: {fontSize: 11},
            },
            height: 100,
            children: [
              {
                id: 'node1',
                annotations: [
                  {
                    content: 'Consumer learns \n of product',
                    style: {fontSize: 11},
                  },
                ],
                margin: {left: 60, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
              },
              {
                id: 'node2',
                shape: {type: 'Flow', shape: 'Decision'},
                annotations: [
                  {
                    content: 'Does \nConsumer want \nthe product',
                    style: {fontSize: 11},
                  },
                ],
                margin: {left: 200, top: 20},
                height: 60,
                width: 120,
                ports: this.port,
              },
              {
                id: 'node3',
                annotations: [
                  {
                    content: 'No sales lead',
                    style: {fontSize: 11},
                  },
                ],
                margin: {left: 370, top: 30},
                shape: {type: 'Path', data: pathData},
                height: 40,
                width: 100,
                ports: this.port,
              },
              {
                id: 'node4',
                annotations: [
                  {
                    content: 'Sell to consumer',
                    style: {fontSize: 11},
                  },
                ],
                margin: {left: 510, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
              },
            ],
          },
          {
            id: 'stackCanvas2',
            header: {
              annotation: {content: 'Marketing'},
              width: 50,
              style: {fontSize: 11},
            },
            height: 100,
            children: [
              {
                id: 'node5',
                annotations: [{content: 'Create marketing campaigns'}],
                margin: {left: 60, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
              },
              {
                id: 'node6',
                annotations: [{content: 'Marketing finds sales leads'}],
                margin: {left: 210, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
              },
            ],
          },
          {
            id: 'stackCanvas3',
            header: {
              annotation: {content: 'Sales'},
              width: 50,
              style: {fontSize: 11},
            },
            height: 100,
            children: [
              {
                id: 'node7',
                annotations: [{content: 'Sales receives lead'}],
                margin: {left: 210, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
              },
            ],
          },
          {
            id: 'stackCanvas4',
            header: {
              annotation: {content: 'Success'},
              width: 50,
              style: {fontSize: 11},
            },
            height: 100,
            children: [
              {
                id: 'node8',
                annotations: [
                  {
                    content:
                      'Success helps \n retain consumer \n as a customer',
                  },
                ],
                margin: {left: 510, top: 20},
                height: 50,
                width: 100,
                ports: this.port,
              },
            ],
          },
        ]
      },
      offsetX: 390,
      offsetY: 320,
      height: 100,
      width: 650,
    },
  ];

  // Initializes the connectors for the diagram.
  public connectors: ConnectorModel[] = [
    {
      id: 'connector1',
      sourceID: 'node1',
      targetID: 'node2',
    },
    {
      id: 'connector2',
      sourceID: 'node2',
      targetID: 'node3',
      annotations: [{content: 'No', style: {fill: 'white'}}],
    },
    {
      id: 'connector3',
      sourceID: 'node4',
      targetID: 'node8',
    },
    {
      id: 'connector4',
      sourceID: 'node2',
      targetID: 'node6',
      annotations: [{content: 'Yes', style: {fill: 'white'}}],
    },
    {
      id: 'connector5',
      sourceID: 'node5',
      targetID: 'node1',
    },
    {
      id: 'connector6',
      sourceID: 'node6',
      targetID: 'node7',
    },
    {
      id: 'connector7',
      sourceID: 'node4',
      targetID: 'node7',
      sourcePortID: 'Port1',
      targetPortID: 'Port3',
    },
  ];

  public interval = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
  public gridlines = {lineColor: '#e0e0e0', lineIntervals: this.interval};

  public snapSettings: SnapSettingsModel = {
    horizontalGridlines: this.gridlines,
    verticalGridlines: this.gridlines,
    constraints: SnapConstraints.All && SnapConstraints.ShowLines
  };

  public contextMenuSettings: ContextMenuSettingsModel = {
    // show: true, items: [
    //   {
    //     text: 'Clone', id: 'Clone', target: '.e-diagramcontent',
    //   },
    //   {
    //     text: 'Cut', id: 'Cut', target: '.e-diagramcontent',
    //   },
    //   {
    //     text: 'InsertLaneBefore', id: 'InsertLaneBefore', target: '.e-diagramcontent',
    //   },
    //   {
    //     text: 'InsertLaneAfter', id: 'InsertLaneAfter', target: '.e-diagramcontent',
    //   }],
    // showCustomMenuOnly: true,

    show: true,
    items: [
      {text: 'Clone', id: 'Clone', target: '.e-diagramcontent'},
      {text: 'Cut', id: 'Cut', target: '.e-diagramcontent'}
    ],
    showCustomMenuOnly: true
  };

  public created(): void {
    this.diagram.fitToPage();
  }

  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    connector.style = {strokeColor: '#717171'};
    connector.sourceDecorator = {style: {strokeColor: '#717171', fill: '#717171'}};
    connector.targetDecorator = {style: {strokeColor: '#717171', fill: '#717171'}};
    return connector;
  }

  public getNodeDefaults(node: NodeModel) {
    node.style = {strokeColor: '#717171'};
    return node;
  }

  // public dragEnter(arg: IDragEnterEventArgs): void {
  //   if (arg.element instanceof Node) {
  //     const shape: SwimLaneModel = arg.element.shape as SwimLaneModel;
  //     if (shape.isLane) {
  //       if (shape.orientation === 'Horizontal') {
  //         shape.lanes[0].height = 100;
  //         shape.lanes[0].width = 500;
  //       } else if (shape.orientation === 'Vertical') {
  //         shape.lanes[0].height = 500;
  //         shape.lanes[0].width = 100;
  //       }
  //     }
  //   }
  // }

  // public contextMenuOpen(args: DiagramBeforeMenuOpenEventArgs): void {
  //   for (const item of args.items) {
  //     if (item.text != null) {
  //       args.hiddenItems.push(item.text);
  //     }
  //   }
  // }

  // public contextMenuClick(args: MenuEventArgs): void {
  //   if (args.item.id === 'Cut') {
  //     this.diagram.cut();
  //   } else if (args.item.id === 'Clone') {
  //     this.diagram.copy();
  //     this.diagram.paste();
  //   }
  // }

  contextMenuOpen(args: BeforeOpenCloseMenuEventArgs): void {
    // do your custom action here.
    for (const item of args.items) {
      // if (item.text === 'delete') {
      //   if (!this.diagram.selectedItems.nodes?.length && !this.diagram.selectedItems.connectors?.length) {
      //     args.hiddenItems.push(item.text);
      //   }
      // }
      args.items.push(item);
    }
  }

  contextMenuClick(args: MenuEventArgs): void {
    if (args.item.id === 'Cut') {
      this.diagram.cut();
    } else if (args.item.id === 'Clone') {
      this.diagram.copy();
      this.diagram.paste();
    }
  }
}
