```dataview
CALENDAR Date
WHERE contains(row["Course Code"], this.file.name) OR contains(row["Course Code"].file.name, this.file.name)
```