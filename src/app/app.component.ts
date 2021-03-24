import {Component, ViewChild, ViewEncapsulation, OnInit} from '@angular/core';
import {
  ConnectorConstraints,
  ConnectorModel,
  ContextMenuSettingsModel,
  DiagramComponent,
  DiagramConstraints,
  NodeModel,
  PointPortModel,
  PortConstraints,
  PortVisibility,
  SnapConstraints,
  SnapSettingsModel,
  LaneModel
} from '@syncfusion/ej2-angular-diagrams';
import {BeforeOpenCloseMenuEventArgs, MenuEventArgs} from '@syncfusion/ej2-splitbuttons';
import {SwimLaneModel} from '@syncfusion/ej2-diagrams/src/diagram/objects/node-model';

const pathData: string = 'M 120 24.9999 C 120 38.8072 109.642 50 96.8653 50 L 23.135' +
    ' 50 C 10.3578 50 0 38.8072 0 24.9999 L 0 24.9999 C' +
    '0 11.1928 10.3578 0 23.135 0 L 96.8653 0 C 109.642 0 120 11.1928 120 24.9999 Z';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'SwimLaneTree';
  @ViewChild('diagram') public diagram!: DiagramComponent;
  lanes!: LaneModel[];
  // public constraints: DiagramConstraints = DiagramConstraints.None;

  constructor() {}

  ngOnInit() {

  }

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
              annotation: {content: ''},
              width: 50,
              style: {fontSize: 11, fill: 'transparent'},
            },
            height: 100,
            children: [
              {
                id: 'node1',
                annotations: [
                  {
                    content: 'START',
                    style: {fontSize: 12, color: 'white', bold: true},
                  },
                ],
                margin: {left: 650, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              }
            ],
          },
          {
            id: 'stackCanvas2',
            header: {
              annotation: {content: 'PolicyDecision'},
              width: 50,
              style: {fontSize: 10, fill: 'transparent'},
            },
            height: 100,
            children: [
              {
                id: 'node2',
                annotations: [{
                  content: 'ByPerson',
                  style: {fontSize: 12, color: 'white', bold: true}
                }],
                margin: {left: 220, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node3',
                annotations: [{
                  content: 'Fail',
                  style: {fontSize: 12, color: 'white', bold: true}
                }],
                margin: {left: 650, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node4',
                annotations: [{
                  content: 'Pass',
                  style: {fontSize: 12, color: 'white', bold: true}
                }],
                margin: {left: 910, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node5',
                annotations: [{
                  content: 'Else',
                  style: {fontSize: 12, color: 'white', bold: true}
                }],
                margin: {left: 1120, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
            ],
          },
          {
            id: 'stackCanvas3',
            header: {
              annotation: {content: 'WorkYear'},
              width: 50,
              style: {fontSize: 11, fill: 'transparent'},
            },
            height: 100,
            children: [
              {
                id: 'node6',
                annotations: [{
                  content: 'LOW...4',
                  style: {fontSize: 12, color: 'white', bold: true}
                }],
                margin: {left: 125, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node7',
                annotations: [{
                  content: '5...19',
                  style: {fontSize: 12, color: 'white', bold: true}
                }],
                margin: {left: 280, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node8',
                annotations: [{
                  content: '20...HIGH',
                  style: {fontSize: 12, color: 'white', bold: true}
                }],
                margin: {left: 385, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node9',
                annotations: [{
                  content: 'LOW...4',
                  style: {fontSize: 12, color: 'white', bold: true}
                }],
                margin: {left: 542.5, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node10',
                annotations: [{
                  content: '5...HIGH',
                  style: {fontSize: 12, color: 'white', bold: true}
                }],
                margin: {left: 750, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
            ],
          },
          {
            id: 'stackCanvas4',
            header: {
              annotation: {content: 'AScore'},
              width: 50,
              style: {fontSize: 11, fill: 'transparent'},
            },
            height: 100,
            children: [
              {
                id: 'node11',
                annotations: [
                  {
                    content: 'LOW...79',
                    style: {fontSize: 12, color: 'white', bold: true}
                  },
                ],
                margin: {left: 50, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node12',
                annotations: [
                  {
                    content: '80...HIGH',
                    style: {fontSize: 12, color: 'white', bold: true}
                  },
                ],
                margin: {left: 175, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node13',
                annotations: [
                  {
                    content: 'LOW...79',
                    style: {fontSize: 12, color: 'white', bold: true}
                  },
                ],
                margin: {left: 490, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node14',
                annotations: [
                  {
                    content: '80...HIGH',
                    style: {fontSize: 12, color: 'white', bold: true}
                  },
                ],
                margin: {left: 595, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node15',
                annotations: [
                  {
                    content: 'LOW...79',
                    style: {fontSize: 12, color: 'white', bold: true}
                  },
                ],
                margin: {left: 700, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node16',
                annotations: [
                  {
                    content: '80...HIGH',
                    style: {fontSize: 12, color: 'white', bold: true}
                  },
                ],
                margin: {left: 805, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node17',
                annotations: [
                  {
                    content: 'LOW...44.99',
                    style: {fontSize: 12, color: 'white', bold: true}
                  },
                ],
                margin: {left: 1015, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node18',
                annotations: [
                  {
                    content: '45...58.99',
                    style: {fontSize: 12, color: 'white', bold: true}
                  },
                ],
                margin: {left: 1120, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
              {
                id: 'node19',
                annotations: [
                  {
                    content: '59...HIGH',
                    style: {fontSize: 12, color: 'white', bold: true}
                  },
                ],
                margin: {left: 1225, top: 20},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#6495ED'}
              },
            ],
          },
          {
            id: 'stackCanvas5',
            header: {
              annotation: {content: 'Assignment'},
              width: 50,
              style: {fontSize: 12, fill: '#BDB76B'},
            },
            height: 100,
            children: [
              {
                id: 'node20',
                annotations: [
                  {
                    content: 'T2',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 50, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
              {
                id: 'node21',
                annotations: [
                  {
                    content: 'T1',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 175, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
              {
                id: 'node22',
                annotations: [
                  {
                    content: 'NOT ASSIGNED',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 280, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
              {
                id: 'node23',
                annotations: [
                  {
                    content: 'NOT ASSIGNED',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 385, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
              {
                id: 'node24',
                annotations: [
                  {
                    content: 'T2',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 490, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
              {
                id: 'node25',
                annotations: [
                  {
                    content: 'T1',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 595, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
              {
                id: 'node26',
                annotations: [
                  {
                    content: 'T2',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 700, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
              {
                id: 'node27',
                annotations: [
                  {
                    content: 'T1',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 805, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
              {
                id: 'node28',
                annotations: [
                  {
                    content: 'NOT ASSIGNED',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 910, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
              {
                id: 'node29',
                annotations: [
                  {
                    content: 'T2',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 1015, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
              {
                id: 'node30',
                annotations: [
                  {
                    content: 'NOT ASSIGNED',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 1120, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
              {
                id: 'node31',
                annotations: [
                  {
                    content: 'NOT ASSIGNED',
                    style: {fontSize: 12, bold: true},
                  },
                ],
                margin: {left: 1225, top: 30},
                height: 40,
                width: 100,
                ports: this.port,
                style: {fill: '#BDB76B'}
              },
            ],
          },
        ]
      },
      offsetX: 620,
      offsetY: 300,
      height: 100,
      width: 1300,
    },
  ];

  // Initializes the connectors for the diagram.
  public connectors: ConnectorModel[] = [
    // Level1
    {
      id: 'connector1',
      sourceID: 'node1',
      targetID: 'node2',
    },
    {
      id: 'connector2',
      sourceID: 'node1',
      targetID: 'node3',
    },
    {
      id: 'connector3',
      sourceID: 'node1',
      targetID: 'node4',
    },
    {
      id: 'connector4',
      sourceID: 'node1',
      targetID: 'node5',
    },
    // Level2
    {
      id: 'connector5',
      sourceID: 'node2',
      targetID: 'node6',
    },
    {
      id: 'connector6',
      sourceID: 'node2',
      targetID: 'node7',
    },
    {
      id: 'connector7',
      sourceID: 'node2',
      targetID: 'node8',
    },
    {
      id: 'connector8',
      sourceID: 'node3',
      targetID: 'node9',
    },
    {
      id: 'connector9',
      sourceID: 'node3',
      targetID: 'node10',
    },
    {
      id: 'connector10',
      sourceID: 'node4',
      targetID: 'node28',
    },
    {
      id: 'connector11',
      sourceID: 'node5',
      targetID: 'node17',
    },
    {
      id: 'connector12',
      sourceID: 'node5',
      targetID: 'node18',
    },
    {
      id: 'connector13',
      sourceID: 'node5',
      targetID: 'node19',
    },
    // Level3
    {
      id: 'connector14',
      sourceID: 'node6',
      targetID: 'node11',
    },
    {
      id: 'connector15',
      sourceID: 'node6',
      targetID: 'node12',
    },
    {
      id: 'connector16',
      sourceID: 'node9',
      targetID: 'node13',
    },
    {
      id: 'connector17',
      sourceID: 'node9',
      targetID: 'node14',
    },
    {
      id: 'connector18',
      sourceID: 'node10',
      targetID: 'node15',
    },
    {
      id: 'connector19',
      sourceID: 'node10',
      targetID: 'node16',
    },
    // Level4
    {
      id: 'connector20',
      sourceID: 'node7',
      targetID: 'node22',
    },
    {
      id: 'connector21',
      sourceID: 'node8',
      targetID: 'node23',
    },
    {
      id: 'connector22',
      sourceID: 'node11',
      targetID: 'node20',
    },
    {
      id: 'connector23',
      sourceID: 'node12',
      targetID: 'node21',
    },
    {
      id: 'connector24',
      sourceID: 'node13',
      targetID: 'node24',
    },
    {
      id: 'connector25',
      sourceID: 'node14',
      targetID: 'node25',
    },
    {
      id: 'connector26',
      sourceID: 'node15',
      targetID: 'node26',
    },
    {
      id: 'connector27',
      sourceID: 'node16',
      targetID: 'node27',
    },
    {
      id: 'connector28',
      sourceID: 'node17',
      targetID: 'node29',
    },
    {
      id: 'connector29',
      sourceID: 'node18',
      targetID: 'node30',
    },
    {
      id: 'connector30',
      sourceID: 'node19',
      targetID: 'node31',
    },
  ];

  public interval = [1, 9, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75, 0.25, 9.75];
  public gridlines = {lineColor: '#e0e0e0', lineIntervals: this.interval};

  public snapSettings: SnapSettingsModel = {
    // horizontalGridlines: this.gridlines,
    // verticalGridlines: this.gridlines,
    // constraints: SnapConstraints.All && SnapConstraints.ShowLines
    constraints: SnapConstraints.None
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
    this.diagram.constraints = DiagramConstraints.None;
    // const nodes = this.diagram.getNodeObject('swimlane');
    // const shape: SwimLaneModel = nodes.shape as SwimLaneModel;
    // this.lanes = shape.lanes as  LaneModel[];
    // this.lanes[1].style = {fill: 'red', strokeColor: 'black', strokeWidth: 10};
  }

  public getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    connector.targetDecorator = {shape : 'None'};
    connector.style = {strokeColor: '#717171', strokeWidth: 4};
    connector.sourceDecorator = {style: {strokeColor: '#717171', fill: '#717171'}};
    connector.targetDecorator = {style: {strokeColor: '#717171', fill: '#717171'}};
    connector.constraints = ConnectorConstraints.None;
    return connector;
  }

  public getNodeDefaults(node: NodeModel) {
    node.style = {strokeColor: '#717171'};
    // node.constraints = NodeConstraints.None;
    return node;
    // const nodeObject: NodeModel = {};
    // nodeObject.shape = {type: 'Basic', shape: 'Rectangle'};
    // nodeObject.style = {strokeWidth: 1};
    // nodeObject.width = 95;
    // nodeObject.height = 30;
    // return nodeObject;
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
    if (args.items.length > 0){
      for (const item of args.items) {
        args.items.push(item);
      }
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
