# gcal_bulkreate
Bulk insert events into a Google Calendar from a Google Sheet

This script takes the rows contained within an active Google Sheet and converts them to calendar events in a Google Calendar.

Notes:
- Script runs from within a Google Sheet -- navigate to Tools -> Script Editor
- User must change "Input CalendarId" string to reflect the id of the calendar in which events are being created into
- The current script is designed with four columns in mind -- Title, Start Datetime, End Datetime, and Location
