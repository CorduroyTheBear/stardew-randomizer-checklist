import { GROUPED_TABLES } from "../../data/groupedTables";

export function resetHandler(setTableData)
{
    return () =>
    {
       setTableData(
        () =>
            Object.fromEntries
            (
                Object.values(GROUPED_TABLES).flatMap
                (
                    table => table.groups.map
                    (
                        group =>
                            [
                                group.id, group.data.map
                                (
                                    item => ({...item, done: false, found: false})
                                )
                            ]
                    )
                )
            )
       );
    };
}