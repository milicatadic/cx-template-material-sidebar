import {FlexCol, FlexRow, Section, Grid, TextField, DateField, MonthField, Pagination, Select} from "cx/widgets";

import Controller from "./Controller";

export default (
    <cx>
        <h2 putInto="header">Grid</h2>
        <Section mod="card" style="height: 100%" bodyStyle="display: flex">
            <FlexCol controller={Controller} style="flex: 1 1 0"  spacing="large">
                <FlexRow spacing>
                    <TextField
                        placeholder="Search..."
                        value-bind="$page.filter.search"
                        showClear
                    />
                    <DateField
                        placeholder="Date"
                        value-bind="$page.filter.date"
                    />
                    <MonthField
                        placeholder="Period"
                        range
                        from-bind="$page.filter.fromDate"
                        to-bind="$page.filter.toDate"
                    />
                </FlexRow>
                <Grid
                    style="flex: 1 1 0;"
                    scrollable
                    records-bind="$page.data"
                    columns={[{
                        header: 'Column1',
                        field: 'field1',
                        sortable: true
                    }, {
                        header: 'Column2',
                        field: 'field2',
                        sortable: true,
                        format: 'currency;USD;2',
                        align: 'right'
                    }, {
                        header: 'Column3',
                        field: 'field3',
                        sortable: true,
                        format: 'n;2',
                        align: 'right'
                    }, {
                        header: 'Column4',
                        field: 'field4',
                        sortable: true,
                        format: 'p;2',
                        align: 'right'
                    }]}
                    emptyText="No data to show"
                />
                <FlexRow align="center">
                    <Pagination page-bind="$page.filter.page" pageCount-bind="$page.filter.pageCount"/>
                    <Select value-bind="$page.filter.pageSize" style="margin-left: auto; width: 50px">
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </Select>
                    <span>
                    records per page
                </span>
                </FlexRow>
            </FlexCol>
        </Section>
    </cx>
);
