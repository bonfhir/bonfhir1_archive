/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  RendererTableColum,
  RendererTablePagination,
  RendererTableProps,
} from "@bonfhir/ui-components/r4b";
import {
  Table,
  TableColumnProps as FullAntdTableColumnProps,
  TableProps as FullAntdTableProps,
} from "antd";
import { ColumnType, TablePaginationConfig } from "antd/es/table";
import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
} from "antd/es/table/interface";
import { ReactElement, useState } from "react";

export type AntdTableProps<RecordType = unknown> = Omit<
  FullAntdTableProps<RecordType>,
  "data" | "columns" | "pagination"
>;

export type AntdTableColumnProps = Omit<
  FullAntdTableColumnProps<unknown>,
  "title" | "render"
>;

export function AntdTable<AntdTableProps, AntdTableColumnProps>(
  props: RendererTableProps<AntdTableProps, AntdTableColumnProps>
): ReactElement | null {
  const { data, columns, pagination, onChange, ...renderedProps } =
    props as any;

  const [pageNumber, setPageNumber] = useState(1);

  const managedOnChange = (
    antdPagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<unknown> | SorterResult<unknown>[],
    extra: TableCurrentDataSource<unknown>
  ) => {
    if (antdPagination.current && antdPagination.current !== pageNumber) {
      if (antdPagination.current > pageNumber) {
        (pagination as RendererTablePagination).onPageChange("next");
      } else {
        (pagination as RendererTablePagination).onPageChange("previous");
      }
      setPageNumber(antdPagination.current || 1);
    }

    onChange?.(antdPagination, filters, sorter, extra);
  };

  return (
    <Table
      dataSource={data as any}
      columns={columns.map(
        (
          column: RendererTableColum<AntdTableColumnProps>
        ): ColumnType<object> => {
          const { title, render, ...columnRenderProps } = column;
          return {
            title: title,
            render: (_value: any, _record: unknown, index: number) =>
              render(index),
            ...columnRenderProps,
          };
        }
      )}
      pagination={{
        current: pageNumber,
        pageSize: pagination.pageSize,
        total: pagination.total,
        hideOnSinglePage: true,
        simple: true,
        showTotal: () => pagination.total,
      }}
      onChange={managedOnChange}
      {...renderedProps}
    />
  );
}
