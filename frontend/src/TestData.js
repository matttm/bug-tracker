export function getTestBugs() {
    return [
        {
            id: 1,
            name: "Context Menu is broken",
            desc: "Right-click generates an event, but the context menu is not shown",
            priority: 5,
            date: "10-10-19",
            reporter: "Matt Maloney"
        },
        {
            id: 2,
            name: "Tracks are not being registered",
            desc: "Track entities are being displayed but are not being registered in the event registration systenm",
            priority: 3,
            date: "10-10-19",
            reporter: "Matt Maloney"
        },
        {
            id: 3,
            name: "Consolidate CSS naming scheme",
            desc: "The CSS file being used contains classes of varying prefixes. Refactor these classes to conform to one prefix",
            priority: 1,
            date: "11-11-19",
            reporter: "Matt Maloney"
        },
    ];
}