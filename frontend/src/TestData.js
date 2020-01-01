export function getTestBugs() {
    return [
        {
            id: 1,
            name: "Context Menu is broken",
            desc: "Right-click generates an event, but the context menu is not shown",
            priority: 5,
            date: "2019-10-10",
            reporter: "Matt Maloney"
        },
        {
            id: 2,
            name: "Tracks are not being registered",
            desc: "Track entities are being displayed but are not being registered in the event registration systenm",
            priority: 3,
            date: "2019-10-10",
            reporter: "Matt Maloney"
        },
        {
            id: 3,
            name: "Consolidate CSS naming scheme",
            desc: "The CSS file being used contains classes of varying prefixes. Refactor these classes to conform to one prefix",
            priority: 1,
            date: "2019-11-11",
            reporter: "Matt Maloney"
        },
        {
            id: 4,
            name: "Fix sorting capability",
            desc: "React does not rerender when the bug list is sorted. Further investigating has to be done if this is the issue or the list isn't even being sorted.",
            priority: 2,
            date: "2019-12-11",
            reporter: "John Doe"
        },
        {
            id: 5,
            name: "Fix typos in comments",
            desc: "There is a multiitude of typos in comments. Fix them.",
            priority: 4,
            date: "2019-12-19",
            reporter: "Ray Donavan"
        },
    ];
}