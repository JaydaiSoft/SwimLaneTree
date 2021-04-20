import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {
  ConnectorConstraints,
  ConnectorModel,
  ContextMenuSettingsModel,
  DiagramComponent,
  DiagramConstraints,
  DiagramTools,
  LaneModel,
  NodeConstraints,
  NodeModel,
  PointPortModel,
  PortConstraints,
  PortVisibility,
  SelectorConstraints,
  SnapConstraints,
  SnapSettingsModel,
  ZoomOptions,
  DiagramBeforeMenuOpenEventArgs
} from '@syncfusion/ej2-angular-diagrams';
import {BeforeOpenCloseMenuEventArgs, MenuEventArgs} from '@syncfusion/ej2-splitbuttons';
import {ChangeEventArgs} from '@syncfusion/ej2-angular-buttons';
import {DiagramTooltipModel} from '@syncfusion/ej2-diagrams/src/diagram/objects/tooltip-model';
import {SelectorModel} from '@syncfusion/ej2-diagrams/src/diagram/objects/node-model';

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
  ports!: PointPortModel[];
  snapSettings!: SnapSettingsModel;
  nodes!: NodeModel[];
  connectors!: ConnectorModel[];
  isSwitchChecked = false;
  contextMenuSettings!: ContextMenuSettingsModel;
  tooltip!: DiagramTooltipModel;
  tool!: DiagramTools;
  selectedItems!: SelectorModel;

  constructor() {}

  ngOnInit(): void {
    this.ports = this.getPortConfig();
    this.snapSettings = this.getSnapSettings();
    this.nodes = this.bindingNodesData();
    this.connectors = this.getConnectorConfig();
    this.contextMenuSettings = this.getContextMenu();
    this.tooltip = this.getTooltip();
    this.setDiagramTools();
    this.selectedItems = {constraints: SelectorConstraints.None};
  }

  getConnectorConfig(): ConnectorModel[]{
    return [
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
  }
  bindingNodesData(): NodeModel[]{
    return [
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('START'),
                    position: 'BottomCenter'
                  }
                }
              ],
              canMove: false
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('ByPerson'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('Fail'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('Pass'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('Else'),
                    position: 'BottomCenter'
                  }
                },
              ],
              canMove: false
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('LOW...4'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('5...19'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('20...HIGH'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('LOW...4'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('5...HIGH'),
                    position: 'BottomCenter'
                  }
                },
              ],
              canMove: false
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('LOW...79'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('80...HIGH'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('LOW...79'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('80...HIGH'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('LOW...79'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('80...HIGH'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('LOW...44.99'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('45...58.99'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#6495ED'},
                  tooltip: {
                    content: this.getTooltipContent('59...HIGH'),
                    position: 'BottomCenter'
                  }
                },
              ],
              canMove: false
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('T2'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('T1'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('NOT ASSIGNED'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('NOT ASSIGNED'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('T2'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('T1'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('T2'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('T1'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('NOT ASSIGNED'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('T2'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('NOT ASSIGNED'),
                    position: 'BottomCenter'
                  }
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
                  ports: this.ports,
                  style: {fill: '#BDB76B'},
                  tooltip: {
                    content: this.getTooltipContent('NOT ASSIGNED'),
                    position: 'BottomCenter'
                  }
                },
              ],
              canMove: false
            },
          ]
        },
        offsetX: 620,
        offsetY: 300,
        height: 100,
        width: 1300,
      },
    ];
  }
  getSnapSettings(): SnapSettingsModel {
    const snapConfig: SnapSettingsModel = {};
    snapConfig.constraints = SnapConstraints.None;
    return snapConfig;
  }
  getPortConfig(): PointPortModel[]{
    return [
      // Set Disable Port
      {
        id: 'Port1',
        offset: {x: 0, y: 0.5},
        visibility: PortVisibility.Hidden,
        constraints: PortConstraints.None,
      },
      {
        id: 'Port2',
        offset: {x: 0.5, y: 0},
        visibility: PortVisibility.Hidden,
        constraints: PortConstraints.None,
      },
      {
        id: 'Port3',
        offset: {x: 1, y: 0.5},
        visibility: PortVisibility.Hidden,
        constraints: PortConstraints.None,
      },
      {
        id: 'Port4',
        offset: {x: 0.5, y: 1},
        visibility: PortVisibility.Hidden,
        constraints: PortConstraints.None,
      },
    ];
  }
  setDiagramTools(): void {
    this.tool = DiagramTools.SingleSelect;
  }

  getContextMenu(): ContextMenuSettingsModel {
    return {
      show: true,
      items: [
        {text: 'Change Decision Value', id: 'change-decision-value', target: '.e-diagramcontent'},
        {text: 'Insert Decision Value', id: 'insert-decision-value', target: '.e-diagramcontent'},
        {text: 'Delete Decision Value', id: 'delete-decision-value', target: '.e-diagramcontent'},
        {text: 'Expand', id: 'expand', target: '.e-diagramcontent'},
        {text: 'Collapse', id: 'collapse', target: '.e-diagramcontent'},
        {separator: true},
        {text: 'Copy selected node and subtree', id: 'copy-selected-node-subtree', target: '.e-diagramcontent'},
        {text: 'Paste Subtree', id: 'paste-subtree', target: '.e-diagramcontent'},
        {text: 'Paste selected node and subtree', id: 'paste-selected-node-subtree', target: '.e-diagramcontent'},
        {separator: true},
        {text: 'Edit Children Set of Values', id: 'edit-children-set-values', target: '.e-diagramcontent'},
        {text: 'Change Break Values', id: 'change-break-values', target: '.e-diagramcontent'},
        {text: 'Delete Children', id: 'delete-children', target: '.e-diagramcontent'},
        {text: 'Edit Range', id: 'edit-range', target: '.e-diagramcontent'},
        {text: 'Edit Values', id: 'edit-values', target: '.e-diagramcontent'},
        {text: 'Insert Node (before)', id: 'insert-node-before', target: '.e-diagramcontent'},
        {text: 'Remove Node', id: 'remove-node', target: '.e-diagramcontent'},
        {text: 'Tree Assignment Definition', id: 'tree-assignment-definition', target: '.e-diagramcontent'},
      ],
      showCustomMenuOnly: true
    };
  }

  created(): void {
    this.diagram.fitToPage();
    // this.diagram.constraints = DiagramConstraints.Default &DiagramConstraints.Zoom |DiagramConstraints.Pan;
    this.diagram.constraints = (DiagramConstraints.Default | DiagramConstraints.Zoom
      | DiagramConstraints.Pan);
    // const nodes = this.diagram.getNodeObject('swimlane');
    // const shape: SwimLaneModel = nodes.shape as SwimLaneModel;
    // this.lanes = shape.lanes as  LaneModel[];
    // this.lanes[1].style = {fill: 'red', strokeColor: 'black', strokeWidth: 10};
  }

  getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    connector.targetDecorator = {shape : 'None'};
    connector.style = {strokeColor: '#717171', strokeWidth: 4};
    connector.sourceDecorator = {style: {strokeColor: '#717171', fill: '#717171'}};
    connector.targetDecorator = {style: {strokeColor: '#717171', fill: '#717171'}};
    connector.constraints = ConnectorConstraints.None;
    return connector;
  }

  getNodeDefaults(node: NodeModel): NodeModel {
    node.style = {strokeColor: '#717171'};
    node.constraints = (NodeConstraints.Default | NodeConstraints.Tooltip | NodeConstraints.ReadOnly | NodeConstraints.Select)
      & ~NodeConstraints.Drag & ~NodeConstraints.Resize;
    return node;
  }

  // zoom operation at runtime
  zoomIn(): void {
    const zoomOptions: ZoomOptions = {
      type: 'ZoomIn',
      // Sets the factor by which we can zoom in or zoom out
      zoomFactor: 0.1
    };
    // zoomin the diagram
    this.diagram.zoomTo(zoomOptions);
  }

  zoomOut(): void {
    const zoomOptions: ZoomOptions = {
      type: 'ZoomOut',
      // Sets the factor by which we can zoom in or zoom out
      zoomFactor: 0.1
    };
    // zoomout the diagram
    this.diagram.zoomTo(zoomOptions);
  }

  contextMenuOpen(args: DiagramBeforeMenuOpenEventArgs): void {
    const headerMenus = args.items.filter(({id}) => {
      // @ts-ignore
      return ['change-decision-value', 'insert-decision-value', 'delete-decision-value'].includes(id);
    }).map(item => item.id);

    const nodeMenus = args.items.filter(({id}) => {
      // @ts-ignore
      return !['change-decision-value', 'insert-decision-value', 'delete-decision-value'].includes(id);
    }).map(item => item.id);

    // @ts-ignore
    const selectedItems: any = this.diagram.selectedItems.nodes[0];
    for (const item of args.items) {
      if (selectedItems) {
        if (selectedItems.isLane) {
          // @ts-ignore
          if (selectedItems.id.includes('header') && nodeMenus.includes(item.id)) {
            // @ts-ignore
            args.hiddenItems.push(item.id);
          }
          if (!selectedItems.id.includes('header')) {
            // @ts-ignore
            args.hiddenItems.push(item.id);
          }
        } else {
          if (selectedItems.id.includes('node') && headerMenus.includes(item.id)) {
            // @ts-ignore
            args.hiddenItems.push(item.id);
          }
        }
      } else {
        // @ts-ignore
        args.hiddenItems.push(item.id);
      }
    }
  }

  contextMenuClick(args: MenuEventArgs): void {
    if (args.item.id === 'collapse') {
      alert('Do collapse function');
    }
    else if (args.item.id === 'expand') {
      alert('Do expand function');
    }
    else if (args.item.id === 'copy-selected-node-subtree') {
      alert('Do Copy selected node and subtree function');
    }
    else if (args.item.id === 'paste-subtree') {
      alert('Do Paste Subtree function');
    }
    else if (args.item.id === 'paste-selected-node-subtree') {
      alert('Do Paste selected node and subtree function');
    }
    else if (args.item.id === 'edit-children-set-values') {
      alert('Do Edit Children Set of Values function');
    }
    else if (args.item.id === 'change-break-values') {
      alert('Do Change Break Values function');
    }
    else if (args.item.id === 'delete-children') {
      alert(' Do Delete Children function');
    }
    else if (args.item.id === 'edit-range') {
      alert('Do Edit Range function');
    }
    else if (args.item.id === 'edit-values') {
      alert('Do Edit Values function');
    }
    else if (args.item.id === 'insert-node-before') {
      alert('Do Insert Node (before) function');
    }
    else if (args.item.id === 'remove-node') {
      alert('Do Remove Node function');
    }
    else if (args.item.id === 'tree-assignment-definition') {
      alert('Do Tree Assignment Definition function');
    }
    else if (args.item.id === 'change-decision-value') {
      alert('Do Change Decision value function');
    }
    else if (args.item.id === 'insert-decision-value') {
      alert('Do Insert Decision value function');
    }
    else if (args.item.id === 'delete-decision-value') {
      alert('Do Delete Decision value function');
    }
  }

  switchOnChange(args: ChangeEventArgs): void {
    if (args.checked != null){
      this.isSwitchChecked = args.checked;
    }
  }

  getTooltip(): DiagramTooltipModel {
    return  {
      content: this.getTooltipContent(''),
      position: 'BottomCenter',
      relativeMode: 'Object',
      animation: {
        open: { effect: 'FadeZoomIn', delay: 0 },
        close: { effect: 'FadeZoomOut', delay: 0 }
      }
    };
  }

  getTooltipContent(nodeContent: string): HTMLElement {
    const tooltipContent: HTMLElement = document.createElement("div");
    tooltipContent.innerHTML =
      `<div style="background-color: #f4f4f4; color: black; border-width:1px;border-style: solid;border-color: #d3d3d3; white-space: nowrap;"> <span style="margin: 10px;">${nodeContent}</span> </div>`;
    return tooltipContent;
  }

}
