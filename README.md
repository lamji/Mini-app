# ADD TO CART Mini-app

## Changelogs

```sh
- v1.0.1 - Add Sample Card and Storybook
- v1.0.1 - Add styles and postcss
- v1.0.0 - Button Component
```

## Installation

```sh
npm install serino-mapp-admin-table-list
```

For manual installation

```sh
npm install --registry http://miniapp.serino.com:4873/ serino-mapp-admin-table-list
```

## Usage

```sh
import { AdminTableListMApp, exampleData } from "serino-mapp-admin-table-list"

// ...
// log exampleData to see the requirements

<TableList {...exampleData} />
```

## Types

```sh
{
  dataLoad: {
    // Table
    rows: { [key: string]: any }[];
    rowsTotal: number;
    subtotal: number | string;
    grandTotal: number | string;
    // Filter List
    filterList: {
      [key: string]: any[];
    };
  };
  dataIn: {
    // View List Title
    title: string;
    tabs: {
      options?: {
        label: string | number;
        value: string | number;
      }[];
    };
    filterSection?: {
      filterProps?: {
        show?: Boolean;
        icons?: { startIcon?: HTMLElement | string, endIcon?: HTMLElement | string }
        label: string;
        options?: {
          name: string;
          key: string[] | string;
          type: "date" | "daterange" | "select";
        }[];
      };
      searchProps?: {
        show?: Boolean;
        placeholder: string;
        string?: number;
      };
      actionProps?: {
        show?: Boolean;
        icons?: { startIcon?: HTMLElement | string, endIcon?: HTMLElement | string }
        label: string;
        options?: {
          name: string;
          action: void;
        }[];
        autoClose?: Boolean;
      };
      redirectionProps?: {
        show?: Boolean;
        icons?: { startIcon?: HTMLElement | string, endIcon?: HTMLElement | string }
        label: string;
        action: void;
      };
    };
    table: {
       importCSV?: {
        show?: Boolean;
        label: string;
        icons?: {
          startIcon?: HTMLElement | string;
          endIcon?: HTMLElement | string;
        };
        action: () => void;
        add: () =>  void;
        import: () =>  void;
      };
      overrideProps: { [key: string]: any };  // override all props of table
      selectionKey?: string;
      columns: GridColDef;
      actionBars: {
        label: string;
        action: void;
      }[];
      rowActions: {
        label: string;
        action: void;
        divider?: Boolean;
        autoClose?: Boolean;
      }[];
    };
    styles: {
      [key: string]: CSSProperties;
    };
  };
  dataOut: (arg0: any) => void;
}
```

## Peer Dependecies

```sh
"react": "^18.2.0",
"react-dom": "^18.2.0"
```

## Node Version

```sh
v16.15.0
```
