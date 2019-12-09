export function getTestBugs() {
    return [
        {
            id: 1,
            name: "Context Menu is broken",
            desc: "Right-click generates an event, but the context menu is not shown",
            priority: 4,
            date: "10-10-19",
            reporter: "Matt Maloney"
        },
        {
            id: 2,
            name: "Tracks are not being registered",
            desc: "Track entities are being displayed but are not being registered in the event registration systenm",
            priority: 5,
            date: "10-10-19",
            reporter: "Matt Maloney"
        },
    ];
}