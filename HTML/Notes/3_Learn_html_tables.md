# Learn HTML: Tables

## Why Tables

Some data in the internet is naturally tabluar, so table is the best way to represent it.

## Create a Table

To create the table you first need a `<table>` element.

## Table Rows

To enter data into the table you first need to craete a _table row_ by using `<tr>` tag.

## Table Data

Then we need to define cells of the table by creating _table data_ element with `<td>` tags.

## Table Headings

To add _table headings_ to the table use `<th>` tags. Headings may have a `scope` attibute with possible values:

* `col` if it's a column heading;
* `row` if it's a row heading;
* `rowgroup` if it groups multiple rows
* `colgroup` if it groups multiple columns
* `auto` default value

## Table Border

In older versions of HTML we could use table attribute `border` to set the thickness of the border. Now this attribute is _deprecated_ and it's advised to use CSS styling instead.

## Spanning Columns

Sometimes data a table needs to span multpile columns. You can use `colspan` attibute, passing it an integer of the number of columns you need to span.

## Spanning Rows

You can also span rows using `rowspan` attribute. We can use it in `<td>` and `<th>` tags. If we use it in `<th>` tags we need to set `scope` attribute to `rowgroup` to improve accessibility.

## Table Body

When the table becomes long, we can section it off by using `<tbody>` tag. _Table body_ should include all of the table's data, excluding the table headings.

This tag has semantic meaning only, separating table into head, body and footer.

## Table Head

`<thead>` element is a wrapper for table's head elements.

## Table Footer

We can section off bottom part of the long table with _table footer_ element using `<tfoot>` tag.

Footers are usually used to contain sums, differences and other data results.

## Styling with CSS

By default tables look like nothing. To make them look good we should use CSS tables.
