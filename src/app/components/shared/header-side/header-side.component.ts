import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Observable, of as observableOf } from 'rxjs';
import { fastFadeInAnimation } from '../../../animations/animations';
import { HeaderService } from '../../../services/shared/header.service';
import { SideMenuNode, SideMenuFlatNode } from '../../../models/sideMenuNode';

@Component({
  selector: 'app-header-side',
  templateUrl: './header-side.component.html',
  styleUrls: ['./header-side.component.scss'],
  animations: [fastFadeInAnimation]
})
export class HeaderSideComponent implements OnInit {
  private isOpen: boolean;
  private isMobile: boolean;
  private menuItems: any[] = [];

  treeControl: FlatTreeControl<SideMenuFlatNode>;
  treeFlattener: MatTreeFlattener<SideMenuNode, SideMenuFlatNode>;
  dataSource: MatTreeFlatDataSource<SideMenuNode, SideMenuFlatNode>;

  private transformer = (node: SideMenuNode, level: number) => {
    return new SideMenuFlatNode(!!node.sideNodes, node.title, level, node.id);
  }

  private _getLevel = (node: SideMenuFlatNode) => node.level;

  private _isExpandable = (node: SideMenuFlatNode) => node.expandable;

  private _getChildren = (node: SideMenuNode): Observable<SideMenuNode[]> => observableOf(node.sideNodes);

  private hasChild = (_: number, _nodeData: SideMenuFlatNode) => _nodeData.expandable;

  constructor(
    private headerService: HeaderService) {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<SideMenuFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  }

  ngOnInit() {
    this.headerService.getIsSidenavOpened()
      .subscribe(s => {
        this.isOpen = s as boolean;
      });

    this.headerService.getIsMobile()
      .subscribe(s => {
        this.isMobile = s as boolean;
      });

    this.headerService.getSideMenuNodes()
      .subscribe(s => {
        this.dataSource.data = s;
      });

    this.menuItems = this.headerService.getMenuItems();
  }
}
