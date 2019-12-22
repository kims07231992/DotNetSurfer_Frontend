export class SideMenuNode {
  sideNodes: SideMenuNode[];
  id: number;
  title: string;
}

/** Flat node with expandable and level information */
export class SideMenuFlatNode {
  constructor(
    public expandable: boolean, public title: string, public level: number, public id: any) { }
}
