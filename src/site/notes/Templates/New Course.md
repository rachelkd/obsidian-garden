---
{"dg-publish":true,"permalink":"/templates/new-course/","tags":["university"],"created":"2024-06-22T19:07:40.000-04:00","updated":"2025-01-09T19:28:28.744-05:00"}
---


> [!course-info] <span><span>New Course: null</span></span>
> **Section:**
> **Professor:**
> **Syllabus**

---

```table-of-contents
title:
style: nestedList # TOC style (nestedList|nestedOrderedList|inlineFirstLevel)
minLevel: 3 # Include headings from the specified level
maxLevel: 6 # Include headings up to the specified level
includeLinks: true # Make headings clickable
debugInConsole: false # Print debug info in Obsidian console
```

---

## Lectures/Notes

### Module



### Week

```dataviewjs
const pages = dv.pages('(#lecture or #note) and -"Templates"')
    .filter(p => {
        const courseCode = p["Course Code"];
        return courseCode && courseCode.join("").includes(dv.current().file.name || dv.current().file.link);
    });

const groupedByWeek = pages.groupBy(p => p.week || 'No Week')
    .sort(p => p.key, 'asc');

groupedByWeek.forEach(group => {
    const groupKey = group.key || 'No Week';
    dv.header(5, 'Week ' + groupKey + ":");
    dv.table([], group.rows
        .sort((a, b) => {
            // Helper function to check if filename starts with "Week" and extract the number
            const getWeekNumber = (filename) => {
                // Get just the filename without the path
                const baseName = filename?.split('/').pop();
                const match = baseName?.match(/^Week\s+(\d+)(?:\s*-|$)/);
                const result = match ? parseInt(match[1]) : -1;
                return result;
            };

            const dateA = a.date ? new Date(a.date) : (a.file?.cday ? new Date(a.file.cday) : new Date(0));
            const dateB = b.date ? new Date(b.date) : (b.file?.cday ? new Date(b.file.cday) : new Date(0));
            
            if (dateA.getTime() === dateB.getTime()) {
                // Check for Week files as tiebreaker
                const weekA = getWeekNumber(a.file?.name);
                const weekB = getWeekNumber(b.file?.name);
                if (weekA >= 0 && weekB >= 0) return weekA - weekB;
                if (weekA >= 0) return -1;
                if (weekB >= 0) return 1;
                return (a.file?.name || '').localeCompare(b.file?.name || '');
            }
            return dateA - dateB;
        })
        .map(f => {
            let lecturePrefix = '';
            if (f.lecture) {
                const lectures = Array.isArray(f.lecture) ? f.lecture : [f.lecture];
                const numericLectures = lectures.map(Number).filter(n => !isNaN(n));
                if (numericLectures.length > 0) {
                    const min = Math.min(...numericLectures);
                    const max = Math.max(...numericLectures);
                    lecturePrefix = min === max ? `${min}` : `${min}-${max}`;
                }
            }
            const displayLink = lecturePrefix ? `\`L${lecturePrefix}\` ${f.file.link}` : f.file.link;
            return [displayLink, f.date ? f.date : f.file.cday];
        })
    );
});
