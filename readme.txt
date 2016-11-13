Nga is the Angular Agile Tool. Use it to facilitate planning, tasking, scrum meetings, and demos.

Prerequisites:
  - NodeJS

Instructions:
  - npm start
  - visit http://localhost:8000/

TOC:
  -Planning
  -Tasking
  -Scrum Meetings
  -Demos
  -Back-End Integration
  -Developer Reference
  -TODO
  -user guide

Planning
  -Simple plans use Excel.
  -But that's proprietary and doesn't diff.
  -Advanced planning will use platforms like Rally or Jira and integrated analytics
  -But those are proprietary and integrated analytics are not flexible.
  -Traditional Agile uses an abstract points system.
    -Points aren't supposed to correlate to hours, except they do.
  -Plan: CSV-based HTML5 performance management system + datasplash.com for accurate forecasting.
    -Estimate in "hard points" which is correlated to hours. Longer term: Quiz developer about task to facilitate estimate.

Tasking

Scrum Meetings
  -

Demos
  -Typically you would use Power Point.
  -But that's proprietary and doesn't diff.
  -Plan: CSV-based HTML5 slideshow tool.

Back-End Integration
  -Currently it doesn't. But later it might.
  -Then it would support reminders and server tasks like emails and stuff.

Developer Reference:
  -https://github.com/angular/angular-seed
  -https://bower.io/
  -https://github.com/mbostock-bower/d3-bower
  -https://github.com/twbs/bootstrap

TODO:
  -Readme to Markdown
  -Basic GUIs and functional implementation
  -Better documentation
  -BE, Rally, and HipChat/Slack integrations
  -Maybe drop Bootstrap and jQuery and use Angular UI Bootstrap instead (https://github.com/angular-ui/bootstrap)
  -Bootstrap activate nav button on click

User Guide
----------
The order of use is generally:
1 - Create backlog
2 - Prioritize items by sprint
3 - Current sprint availability
4 - EOE for items until sprint filled
5 - reprioritize / negotiate w client. Utilize overcapacity ratio to evidence risk.
6 - WCS during daily scrum; status updates
7 - Near sprint end or ad hoc "crunch time" use ITW as a strategic micromanaging tool
8 - Rinse and repeat
9 - If you have spare time, work on estimating the backlog and/or pulling future items into current sprint
10- After a few sprints it is useful to begin multi-sprint planning (MSP) and performance analysis.