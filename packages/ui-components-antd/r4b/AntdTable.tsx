/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableProps } from "@bonfhir/ui-components/r4b";
import {
  Table,
  TableColumnProps as FullAntdTableColumnProps,
  TableProps as FullAntdTableProps,
} from "antd";
import { ReactElement } from "react";

export type AntdTableProps = Omit<
  FullAntdTableProps<unknown>,
  "data" | "columns"
>;

export type AntdTableColumnProps = Omit<
  FullAntdTableColumnProps<unknown>,
  "title" | "render"
>;

export function AntdTable<AntdTableProps, AntdTableColumnProps>(
  props: TableProps<AntdTableProps, AntdTableColumnProps>
): ReactElement | null {
  const { data, columns, ...renderedProps } = props;
  return (
    <Table
      dataSource={data as any}
      columns={columns.map((column) => {
        const { title, render, ...columnRenderProps } = column;
        return {
          title: title,
          render: (_value: any, _record: unknown, index: number) =>
            render(index),
          ...columnRenderProps,
        };
      })}
      {...renderedProps}
    />
  );
}
